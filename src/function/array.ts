import * as _ from 'lodash';
import { List } from 'lodash';

export class Array {

    /**
     * 返回数组中最后一个元素
     *
     * @template T
     * @param {(List<T> | null | undefined)} source
     * @returns {T}
     * @memberof Array
     */
    tail<T>(source: List<T> | null | undefined): T {
        return _.takeRight(source, 1)[0];
    }

}