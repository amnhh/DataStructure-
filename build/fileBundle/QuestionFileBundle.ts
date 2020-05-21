import { FileBundleTypes } from '../../types/interface';
import FileBundle from './index';

/**
 * 「问题」的文件生成类
 */
export default class QuestionFileBundle extends FileBundle {
    // 类型
    type: FileBundleTypes = 'questions'

    constructor (dirpath: string) {
        super(dirpath)
        this.bindTemplatePath()
    }

    /**
     * 将 bundles 这个变量填充起来
     * 也就是处理这些东西
     */
    build(): void {
        debugger
    }
}
