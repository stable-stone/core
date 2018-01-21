import * as _ from 'lodash';
import { List } from 'lodash';

export class Array {

    tail<T>(source: List<T> | null | undefined): T {
        return _.takeRight(source, 1)[0];
    }

}