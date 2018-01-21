import test from 'ava';
import { $ } from '../src/function';

test('测试 / tail', (t) => {
    const arr = [1, 2, 3, 4, 5];
    t.is($.tail(arr), 5);
});