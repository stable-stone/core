import { Array } from './array';
import { Is } from './is';

import * as _ from 'lodash';
import { DClassInherit } from '../decorator';

/**
 * 核心函数库
 *
 * @class Function
 * @implements {Array}
 */
@DClassInherit([Array, Is])
export class Function implements Array, Is {

    /**
     * 返回数组中最后一个元素
     *
     * @memberof Function
     */
    tail: <T>(source: _.List<T> | null | undefined) => T;

    /**
     * 判断是否为小数
     * 如果是, 返回 true, 反之 false
     *
     * @memberof Function
     */
    isFloat: (value: number) => boolean;

}

const core = new Function();
export { core as $, _ };