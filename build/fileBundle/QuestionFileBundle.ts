import { FileBundleTypes } from '../../types/interface'
import FileBundle from './index'
import globalVars from '../states'
import { getTmpValue } from '../utils/fs-lang';

interface ISolutionBundle {
    input: string
}

/**
 * 「问题」的文件生成类
 */
export default class QuestionFileBundle extends FileBundle {
    // 类型
    type: FileBundleTypes = 'questions'

    constructor (dirpath: string) {
        super(dirpath)
        this.bindTemplatePath()
        this.recordBundle()
        this.build()
    }

    /**
     * 将 bundles 这个变量填充起来
     * 也就是处理这些东西
     */
    build(): void {
        // 获取模板
        this.templateValue = getTmpValue(this.type)

        // 获取各项模板的值, 挨个实现
        debugger
        this.readQuestion()
        this.readSolutions()

    }

    readQuestion(): void {}

    readSolutions(): void {}


    /**
     * 将实例本身记录到 globalVars 中
     * 真正向 LeetCode、Datastructure 之类的填充 question 的过程
     * 在全部 init 完成后，通过遍历 QuestionList 的方式进行插空
     */
    recordBundle(): void {
        globalVars.addQuestion(this)
    }
}

export const buildQuestion = (dirname: string): QuestionFileBundle => new QuestionFileBundle(dirname)
