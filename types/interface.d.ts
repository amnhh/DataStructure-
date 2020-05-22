// 「数据结构」模块下的二级标题
export type DataStructureValues = 'Array' | 'HashMap'

// 「算法」模块下的二级标题
export type AlgorithmValues = ''

export type LeetcodeQuestionsTarget = 'root' | 'Array'


// 「图书问题」模块下的二级标题
export interface BookNotesValues {
    LeetCode?: {
        title: string
        target: Array<LeetcodeQuestionsTarget>
    }
    SwordOffer?: string
}

export type FileBundleTypes = 'datastructure' | 'questions' | 'algorithm' | ''

// config.json 文件产出的接口信息
export interface FileBundleConfig {
    // 问题的 build target
    build_target?: {
        DataSource?: Array<DataStructureValues>
        Algorthm?: Array<AlgorithmValues>
        QuestionNotes?: BookNotesValues
    }
    // 时间
    date: string
    // 类型
    type: FileBundleTypes
    // 英文名字
    name: string
    // 中文名字
    cname: string
}

// 数据结构所拥有的key
export type DataStructureKeys = 'Array' | 'LinkedList' | 'Queue' | 'Stack' | 'Tree' | 'Table'
