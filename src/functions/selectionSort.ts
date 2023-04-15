export function selectionSort(values: number[]): number[] {
    for (let i:number = 0; i <= values.length; i++) {
        let minIndex:number = i;
        for (let j:number = i + 1; j < values.length; j++) {
            if (values[j] < values[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            let temp:number = values[i];
            values[i] = values[minIndex];
            values[minIndex] = temp;
        }
    }
    return values;
}