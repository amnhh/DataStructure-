import { FileBundleTypes, DataStructureKeys, AlgorithmKeys } from '../../types/interface'

type TCompositeType = 'ds' | 'alg' | 'q'

// lib 目录下的 dirname 的前两位 -> fileBundle 的 type 的结构体
type TCompositeNs = {
    [index in TCompositeType]: FileBundleTypes
}

// 复合类型
const compositeNameMap: TCompositeNs = {
    ds: 'datastructure',
    alg: 'algorithm',
    q: 'questions'
}

// 通过 name 来确定复合类型属于哪个类别
export const getCompositeNamespace = (name: TCompositeType): FileBundleTypes => {
    return compositeNameMap[name]
}

// 解析 lib 第一级下的名字的返回结构体
export interface ICompositeResponse {
    // 最终 fileBundle 对应的 type 值
    bundleName: FileBundleTypes
    // bundleName 对应的短语形式
    bundleShortName: TCompositeType
    // 顺序
    index: number,
    // 真实的名字，类似 Array，类似 BubbleSort 之类的
    reactName: AlgorithmKeys | DataStructureKeys
}

// 解析lib下第一级的名字
export const parseCompositeName = (name: string): ICompositeResponse => {
    const ret = <ICompositeResponse>{}
    // data structure 和 algorithm 会以 ds|alg 开头
    if (/^(ds|alg)/.test(name)) {
        const matched = name.match(/^(ds|alg)-([0-9]*)-(.*)$/)
        if (!matched) {
            throw new Error(`${name}作为 datasource 和 algorithm 的文件名，是不合法的`)
            process.exit(0)
        } else {
            ret.bundleShortName = <TCompositeType>matched[1]
            ret.bundleName = getCompositeNamespace(ret.bundleShortName)
            ret.index = Number(matched[2])
            ret.reactName = <AlgorithmKeys | DataStructureKeys>matched[3]
        }
    }
    return ret
}
