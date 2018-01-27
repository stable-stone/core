import * as _ from 'lodash';

export class Is {

    /**
     * 判断是否为小数
     * 如果是, 返回 true, 反之 false
     *
     * @param {number} value
     * @returns {boolean}
     * @memberof Is
     */
    isFloat(value: number): boolean {
        console.log(value,!(_.floor(value) === value));
        return !(_.floor(value) === value);
    }

}