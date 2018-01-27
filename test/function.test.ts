import test from 'ava';
import { $ } from '../src/function';

test('测试 / tail', (t) => {
    const arr = [1, 2, 3, 4, 5];
    t.is($.tail(arr), 5);
});

test('测试 / isFloat', (t) => {
    t.true($.isFloat(1.3323));
    t.false($.isFloat(3));
    t.false($.isFloat(1.00));
    t.true($.isFloat(0.222));
});