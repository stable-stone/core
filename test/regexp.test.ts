import test from 'ava';
import { RegexpStatic, Regexp } from '../src/regexp';

test('测试 / rule_mobile', (t) => {
    t.true(RegexpStatic.check('15255159814', RegexpStatic.rule_mobile));
    t.false(RegexpStatic.check('11323232387', RegexpStatic.rule_mobile));
    t.false(RegexpStatic.check('10086', RegexpStatic.rule_mobile));
});

test('测试 / rule_strong_password', (t) => {
    t.true(RegexpStatic.check('adsa23213', RegexpStatic.rule_strong_password));
    t.false(RegexpStatic.check('11323232387', RegexpStatic.rule_strong_password));
    t.false(RegexpStatic.check('asdasdewsdsa', RegexpStatic.rule_strong_password));
    t.false(RegexpStatic.check('AHJHDDS', RegexpStatic.rule_strong_password));
    t.true(RegexpStatic.check('332sds31', RegexpStatic.rule_strong_password));
    t.true(RegexpStatic.check('ASJ342HJSHA', RegexpStatic.rule_strong_password));
    t.true(RegexpStatic.check('HUU@#$DSuhuh', RegexpStatic.rule_strong_password));
    t.true(RegexpStatic.check('2313123*&*&', RegexpStatic.rule_strong_password));
    t.true(RegexpStatic.check('gygy8978HGG', RegexpStatic.rule_strong_password));
    t.false(RegexpStatic.check('!!@#@#@#$#', RegexpStatic.rule_strong_password));
});

test('测试 / rule_hour_minute', (t) => {
    t.true(RegexpStatic.check('04:10', RegexpStatic.rule_hour_minute));
    t.true(RegexpStatic.check('20:02', RegexpStatic.rule_hour_minute));
    t.false(RegexpStatic.check('113:03', RegexpStatic.rule_hour_minute));
    t.false(RegexpStatic.check('-10:02', RegexpStatic.rule_hour_minute));
    t.false(RegexpStatic.check('07:67', RegexpStatic.rule_hour_minute));
    t.false(RegexpStatic.check('24:02', RegexpStatic.rule_hour_minute));
});

test('测试 / 规则继承覆写', (t) => {
    class RegexpNew extends Regexp {
        public rule_mobile = /^1(3|7|8)[0-9]{9}$/;
        public rule_mobile2 = '^1(7|8)[0-9]{9}$';
    }

    const reg_new = new RegexpNew();
    t.false(reg_new.check('15255159814', reg_new.rule_mobile));
    t.true(reg_new.check('13255159814', reg_new.rule_mobile));
    t.false(reg_new.check('13255159814', reg_new.rule_mobile2));
});