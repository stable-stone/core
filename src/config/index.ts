import * as config from 'config';
import { IAdapter } from './interface';
import { ConfigAdapter } from './adapters/config.adapter';
import { FsAdapter } from './adapters/fs.adapter';

class Config implements IAdapter {

    private adapter: IAdapter;

    init(config: { engine: 'config' | 'fs' }) {
        switch (config.engine) {
            case 'config':
                this.adapter = new ConfigAdapter();
                break;
            case 'fs':
                this.adapter = new FsAdapter();
                break;
            default:
                this.adapter = new ConfigAdapter();
                break;
        }
    }

    public get<T>(key: string): T {
        return this.adapter.get(key);
    }

    public has(key: string): boolean {
        return this.adapter.has(key);
    }

}

const core = new Config();
export { core as Config };