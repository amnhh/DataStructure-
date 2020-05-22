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
export default class GlobalVars {
    // leetcode 习题集
    private LeetcodeQuestions: Array<QuestionFileBundle> = []
    // 剑指 offer 习题集
    private SwordOfferQuestions: Array<QuestionFileBundle> = []
    // 数据结构的 bundle
    private DataStructureLists: Map<DataStructureKeys, DataStructureFileBundle> = new Map<DataStructureKeys, DataStructureFileBundle>()
    // 算法学习的 bundle
    private AlgorithmLists: Map<string, AlgorithmFileBundle> = new Map<string, AlgorithmFileBundle>()

    /**
     * 存数据
     * @param type => 可以是直接 LeetcodeQuestions, SwordOfferQuestions, DataStructureLists, AlgorithmLists，就直接 Map.set
     *                也可以是复合，例如 DataStructureLists -> children, 意为向某个数据结构的 bundle.children 属性中 push
     * @param value
     */
    set(type: string, value: FileBundleBundlesType): void {

    }
}
