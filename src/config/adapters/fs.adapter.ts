import { IAdapter } from '../interface';
import * as path from 'path';
import * as fs from 'fs';
import * as _ from 'lodash';

export class FsAdapter implements IAdapter {

    private readonly json;

    constructor() {
        try {
            const file_path = path.resolve('./config/default.json');
            const config = fs.readFileSync(file_path);
            this.json = JSON.parse(config.toString());
        } catch (e) {
            throw Error('无法读取配置文件');
        }
    }

    public get<T>(key: string): T {
        return _.get(this.json, key);
    }

    public has(key: string): boolean {
        return _.has(this.json, key);
    }

}