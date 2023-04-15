
import { randomNumbers } from '../data/numeros.json';
import { bubbleSort } from './functions/bubbleSort';
import { selectionSort } from './functions/selectionSort';

const values = randomNumbers;
const selectedValues = selectionSort(values);
const swappedValues = bubbleSort(values);

console.log(swappedValues);
console.log(selectedValues);