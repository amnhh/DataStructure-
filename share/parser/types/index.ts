// template 类型
export type TTemplateType = 'basic' | 'solutions' | 'IntroToAlgNote'

/**
 * note parser
 */

// note parase 下的 innerParams 的类型
type TInnerParamsWrapper = {
    [key: string]: CInnerParams
}

/**
 * 生成 InnerParams 的一个产出机器
 */
class CInnerParams {
    // 类型
    type: TInnerParamsTypeProp = ''

    // 产出文案
    dist: string = ''

    // 命名空间
    namespace: string = ''

    path: string = ''

    constructor (type: TInnerParamsTypeProp, ) {
    }
}

type TInnerParamsTypeProp = '' | 'path'

export interface INoteConfig {
    // 产出的标题
    distTitle: string

    // 内部包含的变量的键值对
    innerParams: TInnerParamsWrapper


}

/**
 * line resolver
 */
export type LineResolverType =
    | 'note-inner-params'
    | ''

/**
 * Solution Parser
 */
type TSolutionParserType = 'source' | 'article'

/**
 * 源代码解析的最小单元
 */
export interface ISolutionParserUnit {
    // 源代码 | 文章
    type: TSolutionParserType
}

/**
 * 源代码
 */
export interface ISolutionSource extends ISolutionParserUnit {
    sourceCode: string
    sourceType: string
}

/**
 * comment 所枚举出来的类型
 */
export type TSolutionCommentType = ''
    | 'title'
    | 'index'
    | 'trainOfThought'
    | 'complexAnalysis'
    | 'type'
    | 'note'
    | 'remark'
    | 'category'
    | 'score'

/**
 * 源代码注释所解析出来的文章模块
 */
export type TSolutionArticle = ISolutionParserUnit
    & {
        [index in keyof TSolutionCommentType]: string
    }
    & {
        commentSource: string
    }

/**
 * 源代码分块的结果
 */
export type TBlockSplitResult = {
    // 入参
    input: string

    // 返回值
    outputList: Array<string>
}

/**
 * 源代码分块解析结果
 */
export type TBlockParseResult = {
    input: Array<string>
    outputList: Array<TSolutionArticle | ISolutionSource>
}
