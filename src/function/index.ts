import { Array } from './array';
import * as _ from 'lodash';
import { DClassInherit } from '../decorator';

/**
 * 核心函数库
 *
 * @class Function
 * @implements {Array}
 */
@DClassInherit(Array)
class Function implements Array {

    /**
     * 返回数组中最后一个元素
     *
     * @memberof Function
     */
    tail: <T>(source: _.List<T> | null | undefined) => T;

}

const core = new Function();
export { core as $, _ };