import { _, $ } from '../function';

type Object = { [key: string]: any };

export class Regexp {

    /**
     * 区分真实手机号
     *
     * @protected
     * @memberof Regexp
     */
    public rule_mobile = /^1(3|4|5|7|8)[0-9]{9}$/;
    /**
     * 强密码
     * 数字/字母/符号 至少选两种
     * 忽略长度限制
     *
     * @public
     * @memberof Regexp
     */
    public rule_strong_password = /^(?!\d+$)(?![a-zA-Z]+$)(?![^a-zA-Z\d]+$)\S+$/;
    /**
     * 小时分钟型
     * 03:00, 23:00 类似, 兼容 3:00, 23:00
     *
     * @public
     * @memberof Regexp
     */
    public rule_hour_minute = /^([0]?[0-9]|[1][0-9]|[2][0-3]):([0-9]|[0-5][0-9])$/;

    public check(source: string, rule: string | RegExp) {
        const reg = new RegExp(rule);
        return reg.test(source);
    }

}

const core = new Regexp();
export { core as RegexpStatic };