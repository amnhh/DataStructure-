import { FileBundleTypes } from '../../types/interface';
import FileBundle from './index';
import globalVars from '../states';

interface ISolutionBundle {
    input: string
}

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
        this.build()
    }

    /**
     * 将 bundles 这个变量填充起来
     * 也就是处理这些东西
     */
    build(): void {
        console.log(`QUESTION: ${this.dirpath}`)
    }

    /**
     * 初始化「问题」bundle的产出位置
     * 只处理 config 里的 build_target 位置
     * 将整个 questionFileBundle 放到对应的 global states 里
     * 后续再往 this 上挂各种各样的东西
     */
    initBuildTarget(): void {
        const { build_target } = this.config

        debugger
    }
}

export const buildQuestion = (dirname: string): QuestionFileBundle => new QuestionFileBundle(dirname)
