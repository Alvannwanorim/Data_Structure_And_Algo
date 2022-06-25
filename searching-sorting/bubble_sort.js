function bubbleSort(arr) {
	let noSwaps;
	const swap = (arr, index1, index2) => {
		[ arr[index1], arr[index2] ] = [ arr[index2], arr[index1] ];
	};
	for (let i = arr.length; i > 0; i--) {
		noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
				noSwaps = false;
			}
		}
		if (noSwaps) break;
	}
	return arr;
}

// swap(,0,3)
bubbleSort([ 1, 2, 3, 4, 8, 9, 7, 5 ]);
