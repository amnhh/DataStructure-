import * as path from 'path'
import * as fs from 'fs'
import { ICompositeResponse, parseCompositeName } from './utils/name'
import { getFileBundle } from './fileBundle/output'
import { libDirResolver } from './utils/path-lang'

/**
 * 整个分为一下阶段
 *
 * 1. 遍历 lib 文件，分块暂存到 globalVars
 * 2. 遍历记录到的信息，进行分类、组织
 * 3. 产出最终的 mds 目录，以各个维度划分 mds 的子目录
 * 4. 产出 html 文件，或者直接通过一个 html，然后渲染的方式？
 */

const entries: Array<string> = fs.readdirSync(libDirResolver(), { encoding: 'utf8' })

export default function run(): void {
    entries
        .forEach(name => {
            const nameInfos: ICompositeResponse = parseCompositeName(name)
            const fileBundle = getFileBundle(nameInfos.bundleName, libDirResolver(name))
            fileBundle.build()
        })
}
