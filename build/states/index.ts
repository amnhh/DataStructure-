import AlgorithmFileBundle from '../fileBundle/AlgorithmFileBundle'
import DataStructureFileBundle from '../fileBundle/DsFileBundle'
import QuestionFileBundle from '../fileBundle/QuestionFileBundle'
import { DataStructureKeys, AlgorithmKeys } from '../../types/interface'
import { FileBundleBundlesType } from '../fileBundle/index'

type TSourceType = 'DataStructureLists' | 'AlgorithmLists'
type TReactNameType = DataStructureKeys | AlgorithmKeys

/**
 * 公共数据管理
 *
 * 内部包含
 *  LeetcodeQuestions, SwordOfferQuestions,
 *  AlgorithmLists, DataStructureLists
 *
 * 工程的最小数据单元是 Question
 */
export class GlobalVars {
    // leetcode 习题集
    private LeetcodeQuestions: Array<QuestionFileBundle> = []

    // 剑指 offer 习题集
    private SwordOfferQuestions: Array<QuestionFileBundle> = []

    // 数据结构的 bundle
    private DataStructureLists: Map<DataStructureKeys, DataStructureFileBundle> = new Map<DataStructureKeys, DataStructureFileBundle>()

    // 算法学习的 bundle
    private AlgorithmLists: Map<AlgorithmKeys, AlgorithmFileBundle> = new Map<AlgorithmKeys, AlgorithmFileBundle>()

    // 所有问题的 bundle
    private QuestionsBundleList: Array<QuestionFileBundle> = []

    /**
     * 添加问题单元
     * @param questionInstance
     */
    addQuestion(questionInstance: QuestionFileBundle): void {
        this.QuestionsBundleList.push(questionInstance)
    }

    addLeetcode(questionInstance: QuestionFileBundle): void {
        this.LeetcodeQuestions.push(questionInstance)
    }

    addSwordOffer(questionInstance: QuestionFileBundle): void {
        this.SwordOfferQuestions.push(questionInstance)
    }

    /**
     * 向某个 DataStructure 或者 Algorithm 的 children 属性中添加 question
     */
    setDsChild(reactName: DataStructureKeys,value: QuestionFileBundle): void {
        (<DataStructureFileBundle>this.DataStructureLists.get(reactName)).children.push(value)
    }

    setAlgChild(reactName: AlgorithmKeys, value: QuestionFileBundle): void {
        (<AlgorithmFileBundle>this.AlgorithmLists.get(reactName)).children.push(value)
    }

    /**
     * 设置「数据结构」 bundle
     */
    setDs(reactName: DataStructureKeys, value: DataStructureFileBundle): void {
        this.DataStructureLists.set(reactName, value)
    }

    /**
     * 设置 「算法」 bundle
     * @param reactName
     * @param value
     */
    setAlg(reactName: AlgorithmKeys, value: AlgorithmFileBundle): void {
        this.AlgorithmLists.set(reactName, value)
    }
}

const globalVars = new GlobalVars()

export default globalVars
