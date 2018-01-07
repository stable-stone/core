import * as _ from 'lodash';
import { List } from 'lodash';

export function tail<T>(source: List<T> | null | undefined) {
    return _.takeRight(source, 1)[0];
}