import { _, $ } from '../function';
import { IPaginateFormat } from './interface';

type Object = { [key: string]: any };

class Paginate {

    /**
     * 输出的接口格式
     * 默认
     *
     * @private
     * @memberof Paginate
     */
    private _format: IPaginateFormat = {
        total: 'total',
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

    public set format(format: IPaginateFormat) {
        this._format = format;
    }

    public get format(): IPaginateFormat {
        return this._format;
    }

    /**
     * 标准分页器渲染
     *
     * @static
     * @template T
     * @param {[T[], number]} pages 所需要分页的数据, T[]表明数据源, number表明数据个数
     * @param {number} page 当前页
     * @param {string} [url] 用以后端渲染所需要的网页绝对路径
     * @returns {IPaginate<T>}
     * @memberof Paginate
     */
    public render<T>(pages: [T[], number], per_page: number, page: number, url: string): Object {
        const page_total = pages[1];
        const source = pages[0];

        // 进一取整
        const last_page = _.ceil(page_total / per_page);

        // 超过最后一页/小于第一页,则变成 null
        const next_page_url = page + 1 > last_page ? null : `${url}?page=${page + 1}`;
        const prev_page_url = page <= 1 ? null : `${url}?page=${page - 1}`;

        const from = 1 + (page - 1) * per_page;
        const to = per_page * page > page_total ? page_total : per_page * page;

        return this.formatResponse({
            total: page_total,
            perPage: per_page,
            currentPage: page,
            firstPage: 1,
            lastPage: last_page,
            nextPageUrl: next_page_url,
            prevPageUrl: prev_page_url,
            from: from,
            to: to,
            data: source,
        });
    }

    protected formatResponse<T extends Object>(source: T): T {
        const paginate: any = {};
        for (const key in this.format) {
            paginate[this.format[key]] = source[key];
        }

        return paginate;
    }

}

const core = new Paginate();
export { core as Paginate };