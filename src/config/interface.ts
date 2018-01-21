export interface IAdapter {

    get<T>(key: string): T;

    has(key: string): boolean;

}