var leastInterval = function (tasks, n) {
  let m = new Map();

  let maxVal = 0; // максимально количество вхождений

  let maxValCount = 0; // количество задач, которые имеют максимальное количество вхождений

  for (let k of tasks) {
    let tVal = m.has(k) ? m.get(k) + 1 : 1;
    m.set(k, tVal);
    if (tVal > maxVal) {
      // обновляем maxVal и количество задач maxVal, только если есть новый maxVal
      maxVal = tVal;
      maxValCount = 1;
    } else if (tVal === maxVal) {
      // иначе инкрементим количество задач maxVal
      maxValCount++;
    }
  }
  // Конечная формула.
  // Берем максимальное занчение из длинны списка задач и
  // (максимальное количество вхождений - 1, потому что нам не нужны заполнения после последней задачи)
  // умноженное на количество пробелов + 1
  // и прибавляем количество задач которые имеют максиальное количество вхождений.
  return Math.max(tasks.length, (maxVal - 1) * (n + 1) + maxValCount);
};
// tests
const arr = [
  {
    tasks: [
      'Task1',
      'Task1',
      'Task1',
      'Task1',
      'Task1',
      'Task1',
      'Task2',
      'Task3',
      'Task4',
      'Task5',
      'Task6',
      'Task7',
    ],
    n: 2,
    output: 16,
  },
  {
    tasks: ['A', 'A', 'A', 'B', 'B', 'B'],
    n: 2,
    output: 8,
  },
  {
    tasks: ['A', 'B', 'C', 'C', 'D', 'E', 'F', 'G'],
    n: 2,
    output: 8,
  },
];
arr.forEach(({ tasks, n, output }) => {
  const res = leastInterval(tasks, n);
  if (res === output) {
    console.log('res', res, 'expected', output, 'passed');
  } else {
    console.log('res', res, 'expected', output, 'failed');
  }
});
