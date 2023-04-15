export function bubbleSort(values: number[]): number[] {
    let swapped:boolean = true;
    while (swapped) {
        swapped = false;
        for (let i:number = 0; i <= values.length; i++) {
            if (values[i] > values[i + 1]) {
                let temp:number = values[i];
                values[i] = values[i + 1];
                values[i + 1] = temp;
                swapped = true;
            }
        }
    }
    return values;
}