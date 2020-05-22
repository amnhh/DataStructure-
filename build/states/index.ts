import AlgorithmFileBundle from '../fileBundle/AlgorithmFileBundle'
import DataStructureFileBundle from '../fileBundle/DsFileBundle'
import QuestionFileBundle from '../fileBundle/QuestionFileBundle'
import { DataStructureKeys } from '../../types/interface'
import { FileBundleBundlesType } from '../fileBundle/index'

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
    private AlgorithmLists: Map<string, AlgorithmFileBundle> = new Map<string, AlgorithmFileBundle>()

    /**
     * 存数据 => 直接存......
     * @param sourceType => LeetcodeQuestions, SwordOfferQuestions, DataStructureLists, AlgorithmLists，直接 Map.set
     * @param value => 各个 fileBundle 的实例
     */
    set(sourceType: string, value: FileBundleBundlesType): void {

    }

    /**
     * 存数据 => 存到某个已有数据的 children 属性中
     * @param sourceType => 存储的时哪个 globalVars 里的数据
     * @param value => 各个 fileBundle 的实例
     * @param filterFn => 如何从这 map 里找到父级
     */
    setChildren(sourceType: string, filterFn: Function, value: FileBundleBundlesType) {

    }
}

const globalVars = new GlobalVars()

export default globalVars
