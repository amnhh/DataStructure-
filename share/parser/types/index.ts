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
