// ==============================
// API Base URL
const API_URL = "http://localhost:4000/api";

// ==============================
// Login Function
document.getElementById("loginForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const body = { email: form.email.value, password: form.password.value };

  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      alert("✅ Login successful!");
      window.location.href = "courses-list.html";
    } else {
      alert(data.message || "❌ Login failed.");
    }
  } catch (err) {
    alert("⚠️ Error connecting to server.");
    console.error("Login error:", err);
  }
});

// ==============================
// Register Function
document.getElementById("registerForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  if (form.password.value !== form.confirmPassword.value) {
    alert("❌ Passwords do not match.");
    return;
  }

  const body = { name: form.name.value, email: form.email.value, password: form.password.value };

  try {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    if (res.ok) {
      alert("✅ Registration successful! Please log in.");
      window.location.href = "login.html";
    } else {
      alert(data.message || "❌ Registration failed.");
    }
  } catch (err) {
    alert("⚠️ Error connecting to server.");
    console.error("Register error:", err);
  }
});

// ==============================
// Helper: Authenticated Fetch
async function authFetch(endpoint, options = {}) {
  const token = localStorage.getItem("token");
  if (!token) {
    alert("You must be logged in first.");
    window.location.href = "login.html";
    return;
  }

  const res = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(options.headers || {}),
    },
  });

  if (res.status === 401) {
    alert("Session expired. Please log in again.");
    localStorage.removeItem("token");
    window.location.href = "login.html";
    return;
  }

  return res;
}

// ==============================
// Fetch All Courses (courses-list.html)
async function fetchAllCourses() {
  try {
    const res = await authFetch("/courses");
    if (!res) return;

    const data = await res.json();
    const container = document.getElementById("courses-container");
    if (!container) return;

    if (res.ok) {
      container.innerHTML = data.length
        ? data
            .map((c) => {
              const completedLessons = JSON.parse(localStorage.getItem("completedLessons") || "[]");
              const completedCount = c.lessons?.filter(l => completedLessons.includes(l)).length || 0;
              const progressPercent = c.lessons?.length ? Math.round((completedCount / c.lessons.length) * 100) : 0;

              return `
                <div class="course-card">
                  <h3>${c.title}</h3>
                  <p>${c.description || ""}</p>
                  <div style="margin-bottom:5px; height:10px; background:#eee; border-radius:5px;">
                    <div style="width:${progressPercent}%; height:100%; background:#2ecc71; border-radius:5px;"></div>
                  </div>
                  <small>${progressPercent}% completed</small><br/>
                  <a href="courses.html?id=${c._id}">View Details</a>
                </div>`;
            })
            .join("")
        : "<p>No courses available.</p>";
    } else {
      container.innerHTML = `<p>${data.message || "❌ Failed to fetch courses."}</p>`;
    }
  } catch (err) {
    console.error("Error fetching courses:", err);
    const container = document.getElementById("courses-container");
    if (container) container.innerHTML = "<p>⚠️ Unable to load courses.</p>";
  }
}

// ==============================
// Fetch Single Course (courses.html)
async function fetchCourseDetails(courseId) {
  try {
    const res = await authFetch(`/courses/${courseId}`);
    if (!res) return;

    const course = await res.json();
    if (!res.ok) {
      document.getElementById("course-title").innerText = "❌ Error loading course";
      document.getElementById("lessons").innerHTML = `<p>${course.message || "Unable to load lessons."}</p>`;
      return;
    }

    document.getElementById("course-title").innerText = course.title || "Untitled Course";
    document.getElementById("course-description").innerText = course.description || "";

    const lessonsEl = document.getElementById("lessons");
    if (!course.lessons || course.lessons.length === 0) {
      lessonsEl.innerHTML = "<p>No lessons available for this course.</p>";
      return;
    }

    const completedLessons = JSON.parse(localStorage.getItem("completedLessons") || "[]");

    lessonsEl.innerHTML = course.lessons
      .sort((a,b) => (a.order||0)-(b.order||0))
      .map(lesson => `
        <div class="lesson ${completedLessons.includes(lesson._id) ? "completed" : ""}">
          <h4>${lesson.title}</h4>
          <div class="lesson-content">
            <p>${lesson.content || ""}</p>
            ${lesson.videoUrl ? `<video class="lesson-video" data-src="${lesson.videoUrl}" controls style="width:100%; margin-top:0.5rem; border-radius:6px;"></video>` : ""}
            <div>
              <input type="checkbox" class="complete-lesson" data-id="${lesson._id}" ${completedLessons.includes(lesson._id) ? "checked" : ""}> Completed
            </div>
            <textarea class="lesson-notes" data-id="${lesson._id}" placeholder="Your notes...">${localStorage.getItem(`notes-${lesson._id}`) || ""}</textarea>
          </div>
        </div>`).join("");

    // Toggle lesson content and lazy load video
    document.querySelectorAll(".lesson h4").forEach(el => {
      el.addEventListener("click", () => {
        const content = el.nextElementSibling;
        if(content.style.display === "none") {
          content.style.display = "block";
          const video = content.querySelector("video[data-src]");
          if(video && !video.src) video.src = video.dataset.src;
        } else {
          content.style.display = "none";
        }
      });
    });

    // Lesson completion checkboxes
    document.querySelectorAll(".complete-lesson").forEach(cb => {
      cb.addEventListener("change", e => {
        const id = e.target.dataset.id;
        let completed = JSON.parse(localStorage.getItem("completedLessons") || "[]");
        if (e.target.checked) {
          completed.push(id);
          cb.closest(".lesson").classList.add("completed");
        } else {
          completed = completed.filter(x => x !== id);
          cb.closest(".lesson").classList.remove("completed");
        }
        localStorage.setItem("completedLessons", JSON.stringify(completed));
        updateProgressBar(course.lessons, completed);
      });
    });

    // Save notes
    document.querySelectorAll(".lesson-notes").forEach(textarea => {
      textarea.addEventListener("input", e => {
        const id = e.target.dataset.id;
        localStorage.setItem(`notes-${id}`, e.target.value);
      });
    });

    // Auto-play next lesson video
    const lessonVideos = document.querySelectorAll(".lesson-video");
    lessonVideos.forEach((video, idx, arr) => {
      video.addEventListener("ended", () => {
        const nextLesson = arr[idx].closest(".lesson").nextElementSibling;
        if(nextLesson) {
          const nextContent = nextLesson.querySelector(".lesson-content");
          if(nextContent) nextContent.style.display = "block";
          const nextVideo = nextContent.querySelector(".lesson-video");
          if(nextVideo) nextVideo.play();
        }
      });
    });

    updateProgressBar(course.lessons, completedLessons);

  } catch(err) {
    console.error("Error loading course:", err);
    document.getElementById("course-title").innerText = "❌ Error loading course";
    document.getElementById("lessons").innerHTML = "<p>⚠️ Unable to load lessons.</p>";
  }
}

// ==============================
function updateProgressBar(lessons, completed) {
  const progressEl = document.getElementById("course-progress");
  const total = lessons.length;
  const done = lessons.filter(l => completed.includes(l._id)).length;
  const percent = total ? Math.round((done / total) * 100) : 0;
  if(progressEl) progressEl.style.width = percent + "%";
}

// ==============================
// Logout Function
function logoutUser() {
  localStorage.removeItem("token");
  window.location.href = "login.html";
}

// ==============================
// Auto-init depending on page
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("courses-container")) fetchAllCourses();
  if (document.getElementById("course-title")) {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get("id");
    if (courseId) fetchCourseDetails(courseId);
  }
});

// ==============================
// Dark Mode Toggle
const darkToggle = document.createElement("button");
darkToggle.innerText = "🌙 Dark Mode";
darkToggle.id = "dark-toggle";
darkToggle.style.position = "fixed";
darkToggle.style.bottom = "20px";
darkToggle.style.right = "20px";
darkToggle.style.padding = "10px 15px";
darkToggle.style.border = "none";
darkToggle.style.borderRadius = "8px";
darkToggle.style.cursor = "pointer";
darkToggle.style.background = "#2c3e50";
darkToggle.style.color = "#fff";
darkToggle.style.zIndex = "1000";
document.body.appendChild(darkToggle);

if(localStorage.getItem("dark-mode") === "enabled") {
  document.body.classList.add("dark-mode");
  darkToggle.innerText = "☀️ Light Mode";
}
darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if(document.body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "enabled");
    darkToggle.innerText = "☀️ Light Mode";
  } else {
    localStorage.setItem("dark-mode", "disabled");
    darkToggle.innerText = "🌙 Dark Mode";
  }
});
