import { Array } from './array';
import * as _ from 'lodash';
import { DClassInherit } from '../decorator';

@DClassInherit(Array)
class Function implements Array {

    tail: <T>(source: _.List<T> | null | undefined) => T;

}

const core = new Function();
export { core as $, _ };