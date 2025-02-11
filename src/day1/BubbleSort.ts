export default function bubble_sort(arr: number[]): void {
    for (let limit = arr.length; limit > 0; limit--) {
        for (let index = 0; index < limit; index++) {
            if (arr[index] > arr[index + 1]) {
                let temp = arr[index];
                arr[index] = arr[index + 1];
                arr[index + 1] = temp;
            }
        }
    }
}
