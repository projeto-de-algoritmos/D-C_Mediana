function findKthSmallest(arr, k) {
  if (arr.length === 1) {
    return arr[0];
  }

  // Divide the array into groups of 5
  const groups = [];
  for (let i = 0; i < arr.length; i += 5) {
    groups.push(arr.slice(i, i + 5));
  }

  // Find the median of each group
  const medians = groups.map(
    (group) => group.sort((a, b) => a - b)[Math.floor(group.length / 2)]
  );

  // Recursively find the median of medians
  const medianOfMedians = findKthSmallest(
    medians,
    Math.floor(medians.length / 2)
  );

  // Partition the array around the median of medians
  const pivotIndex = arr.indexOf(medianOfMedians);
  const smaller = arr.filter(
    (element, index) =>
      element < medianOfMedians ||
      (element === medianOfMedians && index < pivotIndex)
  );
  const larger = arr.filter(
    (element, index) =>
      element > medianOfMedians ||
      (element === medianOfMedians && index > pivotIndex)
  );

  if (k <= smaller.length) {
    return findKthSmallest(smaller, k);
  } else if (k === smaller.length + 1) {
    return medianOfMedians;
  } else {
    return findKthSmallest(larger, k - smaller.length - 1);
  }
}

export default function median(numbers) {
  if (numbers.length == 1) return numbers[0];
  if (numbers.length == 2) return (Number(numbers[0]) + Number(numbers[1])) / 2;

  if (numbers.length % 2 == 0) {
    const a = findKthSmallest(numbers, numbers.length / 2);
    const b = findKthSmallest(numbers, numbers.length / 2 + 1);
    return (Number(a) + Number(b)) / 2;
  } else {
    return findKthSmallest(numbers, Math.ceil(numbers.length / 2));
  }
}
