import FileBundle from './index'
import { FileBundleTypes } from '../../types/interface';

/**
 * 「算法」类型文件的生成类
 */

export default class AglorithmFileBundle extends FileBundle {
    type:FileBundleTypes = 'algorithm'

    constructor (dirname: string) {
        super(dirname);
    }
}
