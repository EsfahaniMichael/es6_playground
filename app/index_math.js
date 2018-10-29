import * as math from './math';
import { addToDom as atd} from './helpers';

console.log('math:', math);

atd('h1', `23 + 67 = ${math.add(23, 67)}`);

atd('h1', `56 - 14 = ${math.subtract(56,14)}`);

atd('h1', `2 x 3 = ${math.multiply(2,3)}`);
atd('h1', `10 / 2 = ${math.divide(10,2)}`);
