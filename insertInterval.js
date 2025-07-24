function insert(intervals, newInterval) {
    const result = [];
    let i = 0;
    const n = intervals.length;

    // Step 1: Add all intervals before newInterval
    while (i < n && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    // Step 2: Merge all overlapping intervals with newInterval
    while (i < n && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.push(newInterval); // Add the merged interval

    // Step 3: Add the rest of the intervals
    while (i < n) {
        result.push(intervals[i]);
        i++;
    }

    return result;
}

console.log(insert([[1,2],[2,4]], [3,5]));
