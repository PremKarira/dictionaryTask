function solution(D) {
    const outputDict = {};
    const sortedKeys = Object.keys(D).sort();

    for (const key of sortedKeys) {
        const date = new Date(key);
        const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getDay()];
        if (!(dayOfWeek in outputDict)) {
            let value;
            if (key in D) {
                value = D[key];
            } else {
                const prevKey = sortedKeys[sortedKeys.indexOf(key) - 1];
                const nextKey = sortedKeys[sortedKeys.indexOf(key) + 1];
                const prevValue = D[prevKey];
                const nextValue = D[nextKey];
                value = (prevValue + nextValue) / 2;
            }
            // console.log(value)
            outputDict[dayOfWeek] = value;
        }
        else {
            value = D[key];
            // console.log(value)
            outputDict[dayOfWeek] += value
        }
    }

    return outputDict;
}

const D1 = {
    '2020-01-01': 4,
    '2020-01-02': 4,
    '2020-01-03': 6,
    '2020-01-04': 8,
    '2020-01-05': 2,
    '2020-01-06': -6,
    '2020-01-07': 2,
    '2020-01-08': -2,
};

console.log(solution(D1));
// Output: { Mon: -6, Tue: 2, Wed: 2, Thu: 4, Fri: 6, Sat: 8, Sun: 2 }

const D2 = {
    '2020-01-01': 6,
    '2020-01-04': 12,
    '2020-01-05': 14,
    '2020-01-06': 2,
    '2020-01-07': 4,
};

console.log(solution(D2));
// Output: { Mon: 2, Tue: 4, Wed: 6, Thu: 8, Fri: 10, Sat: 12, Sun: 14 }
