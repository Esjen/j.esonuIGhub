
</details>

---

### ✅ `server.js` 
```js
import app from './src/app.js';

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
