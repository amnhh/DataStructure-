// import AlgorithmFileBundle from '../fileBundle/AlgorithmFileBundle'
import DataStructureFileBundle from '../fileBundle/DsFileBundle'
import QuestionFileBundle from '../fileBundle/QuestionFileBundle'
import { DataStructureKeys, AlgorithmKeys } from '../../types/interface'

interface IWalkDsStructure <K, V>{
    cb(value: V, key: K, map: Map<K, V>): void
}

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
    // private AlgorithmLists: Map<AlgorithmKeys, AlgorithmFileBundle> = new Map<AlgorithmKeys, AlgorithmFileBundle>()

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

    /**
     * 向某个 ALgorithm 的 children 属性中添加 question
     * @param reactName
     * @param value
     */
    // setAlgChild(reactName: AlgorithmKeys, value: QuestionFileBundle): void {
    //     (<AlgorithmFileBundle>this.AlgorithmLists.get(reactName)).children.push(value)
    // }

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
    // setAlg(reactName: AlgorithmKeys, value: AlgorithmFileBundle): void {
    //     this.AlgorithmLists.set(reactName, value)
    // }

    /**
     * 遍历整个 DataStructure 的列表
     * 执行 cb
     */
    walkDsList(walkerOptions: IWalkDsStructure<DataStructureKeys, DataStructureFileBundle>): void {
        this.DataStructureLists.forEach(walkerOptions.cb)
    }

    /**
     * 获取 DataStructureLists 的长度
     */
    getDsSize(): number {
        return this.DataStructureLists.size
    }
}

const globalVars = new GlobalVars()

export default globalVars
