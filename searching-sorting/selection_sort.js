function selectionSort(arr) {
	const swap = (arr, index1, index2) => {
		[ arr[index1], arr[index2] ] = [ arr[index2], arr[index1] ];
	};
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[min] > arr[j]) {
				min = j;
			}
		}
		if (i !== min) swap(arr, i, min);
	}
	return arr;
}

selectionSort([ 2, 1, 5, 3, 7, 9, 4 ]);
