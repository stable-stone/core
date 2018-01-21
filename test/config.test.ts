import test from 'ava';
import { Config } from '../src/config';

for (const engine of ['config', 'fs']) {

    test.before(t => {
        Config.init({ engine: <'config' | 'fs'>engine });
    });

    test(`测试 / get / using ${engine}引擎`, t => {
        t.is(Config.get('test'), 100);
        t.is(Config.get('test1.test1'), 'ssss');
        t.deepEqual(Config.get('test2.test2.test2'), { a: '1' });
    });

    test(`测试 / has / using ${engine}引擎`, t => {
        t.true(Config.has('test'));
        t.true(Config.has('test1.test1'));
        t.true(Config.has('test2.test2.test2'));
        t.false(Config.has('test1.test122'));
    });

}