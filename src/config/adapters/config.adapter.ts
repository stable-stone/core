import { IAdapter } from '../interface';
import * as config from 'config';

export class ConfigAdapter implements IAdapter {

    public get<T>(key: string): T {
        return config.get(key);
    }

    public has(key: string): boolean {
        return config.has(key);
    }

}