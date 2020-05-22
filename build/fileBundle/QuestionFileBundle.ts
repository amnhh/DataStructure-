import { FileBundleTypes } from '../../types/interface';
import FileBundle from './index';

/**
 * 「问题」的文件生成类
 */
export default class QuestionFileBundle extends FileBundle {
    // 类型
    type: FileBundleTypes = 'questions'

    buildTarget: Array<string> = []

    constructor (dirpath: string) {
        super(dirpath)
        this.bindTemplatePath()
        // this.initBuildTarget()
    }

    /**
     * 将 bundles 这个变量填充起来
     * 也就是处理这些东西
     */
    build(): void {
        debugger
    }

    /**
     * 初始化「问题」bundle的产出位置
     * 只处理 config 里的 build_target 位置
     */
    initBuildTarget(): void {
        const { build_target } = this.config

        debugger
    }
}
