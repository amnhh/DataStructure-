import { compile, TemplateDelegate } from 'handlebars'
import * as path from 'path'
import * as fs from 'fs'


const libDirResolver = (dir: string = ''): string => path.resolve(__dirname, '../lib', dir)

/**
 * 整个分为一下阶段
 *
 * 1. 遍历 lib 文件，以 datasource，questions，algorithm 等维度产出 markdown 文件到同一个目录
 *    并记录 markdown 文件的各项信息
 * 2. 遍历记录到的信息，进行分类、组织
 * 3. 产出最终的 mds 目录，以各个维度划分 mds 的子目录
 * 4. 产出 html 文件，或者直接通过一个 html，然后渲染的方式？
 */

const entries = fs.readdirSync(libDirResolver(), { encoding: 'utf8' })


export default function run() {
    entries
        .forEach(name => {
            console.log(name)
            debugger
        })
}
