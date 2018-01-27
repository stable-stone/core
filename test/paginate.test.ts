import test from 'ava';
import { Paginate } from '../src/paginate';

test('测试 / default render', (t) => {
    const response = Paginate.render([[1, 2, 3, 4, 5], 16], 5, 1, 'http://www.baidu.com');
    t.deepEqual(response, {
        total: 16,
        perPage: 5,
        currentPage: 1,
        firstPage: 1,
        lastPage: 4,
        nextPageUrl: 'http://www.baidu.com?page=2',
        prevPageUrl: null,
        from: 1,
        to: 5,
        data: [1, 2, 3, 4, 5],
    });
});

test('测试 / custom render', (t) => {
    Paginate.format = {
        total: 'totalNew',
        perPage: 'perPage',
        currentPage: 'currentPage',
        firstPage: 'firstPage',
        lastPage: 'lastPage',
        nextPageUrl: 'nextPageUrl',
        prevPageUrl: 'prevPageUrl',
        from: 'from',
        to: 'to',
        data: 'data',
    };
    const response = Paginate.render([[1, 2, 3, 4], 14], 10, 2, 'http://www.baidu.com');
    t.deepEqual(response, {
        totalNew: 14,
        perPage: 10,
        currentPage: 2,
        firstPage: 1,
        lastPage: 2,
        nextPageUrl: null,
        prevPageUrl: 'http://www.baidu.com?page=1',
        from: 11,
        to: 14,
        data: [1, 2, 3, 4],
    });
});