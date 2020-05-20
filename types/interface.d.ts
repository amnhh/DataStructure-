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

export type FileBundleTypes = 'datastructure' | 'questions' | 'algorithm'

// config.json 文件产出的接口信息
export interface FileBundleConfig {
    build_target?: {
        DataSource?: Array<DataStructureValues>
        Algorthm?: Array<AlgorithmValues>
        QuestionNotes?: BookNotesValues
    }
    date: string
    type: FileBundleTypes
}
