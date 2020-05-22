/**
 * 「数据结构」类型的文件生成器
 */

import FileBundle from './index';
import { FileBundleTypes } from '../../types/interface'
import QuestionFileBundle from './QuestionFileBundle'


/**
 * 数据结构相关的页面的 build
 */
export default class DataStructureFileBundle extends FileBundle {
    // 类型
    type: FileBundleTypes = 'datastructure'

    // 子节点
    children: Array<QuestionFileBundle> = []

    // ctor
    constructor (dirpath: string) {
        super(dirpath)
        this.bindTemplatePath()
    }

    /**
     * 将 bundles 这个变量填充起来
     * 也就是处理这些东西
     */
    build (): void {
        debugger
    }
}
