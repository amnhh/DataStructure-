/**
 * 「数据结构」类型的文件生成器
 */

import FileBundle from './index';
import { DataStructureKeys, FileBundleTypes } from '../../types/interface'
import QuestionFileBundle, { buildQuestion } from './QuestionFileBundle'
import {
    getTmpValue,
    getFileValue,
    getDirChildList
} from '../utils/fs-lang'
import {
    getInterfacePath,
    getRealizePath,
    getQuestionsPath,
    getSimpleQuestionPath
} from '../utils/path-lang'

import globalVars from '../states'

/**
 * 数据结构相关的页面的 build
 */
export default class DataStructureFileBundle extends FileBundle {
    // 类型
    type: FileBundleTypes = 'datastructure'

    // 子节点
    children: Array<QuestionFileBundle> = []

    // 数据结构所拥有的接口信息
    interfaceInfo: string = ''

    // 数据结构的接口的实现
    realize: string = ''

    // 问题目录
    questionPath: string = ''

    // ctor
    constructor (dirpath: string) {
        super(dirpath)
        this.bindTemplatePath()

        this.build()
        this.recordBundle()
    }

    /**
     * 将 bundles 这个变量填充起来
     * 也就是处理这些东西
     */
    build (): void {
        // 获取模板
        this.templateValue = getTmpValue(this.type)

        // 获取各项模板的值
        this.readNotes()
        this.readInterface()
        this.readRealize()
        this.buildChildQuestions()
    }

    recordBundle(): void {
        debugger
        globalVars.setDs(<DataStructureKeys>this.name, this)
    }

    /**
     * 读取相应的接口信息
     */
    readInterface(): void {
        const interfacePath = getInterfacePath(this.dirpath)
        this.interfaceInfo = getFileValue(interfacePath)
    }

    /**
     * 读取相应的接口实现
     */
    readRealize(): void {
        const realizePath = getRealizePath(this.dirpath)
        this.realize = getFileValue(realizePath)
    }

    /**
     * 触发 children question 的 build
     */
    buildChildQuestions(): void {
        this.questionPath = getQuestionsPath(this.dirpath)
        const questionsList: Array<string> = getDirChildList(this.questionPath)
        questionsList.forEach(questionName => {
            buildQuestion(getSimpleQuestionPath(this.dirpath, questionName))
        })
    }
}
