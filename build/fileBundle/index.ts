/**
 * fileBundle 的主类
 */
import AlgorithmFileBundle from './AlgorithmFileBundle'
import DsFileBundle from './DsFileBundle'
import QuestionFileBundle from './QuestionFileBundle'
import { FileBundleConfig } from '../../types/interface'
import { config } from '../config'
import * as path from 'path'

type FileBundleBundlesType = AlgorithmFileBundle | DsFileBundle | QuestionFileBundle

export default class FileBundle {
    // 目录路径, 会默认读取目录下的 config.json
    dirpath: string

    // 文件的各项解析结果
    bundles: FileBundleBundlesType = <FileBundleBundlesType>{}

    // 配置
    config: FileBundleConfig = <FileBundleConfig>{}

    // 模板路径
    templateFilePath: string = ''

    constructor(dirpath: string) {
        this.dirpath = dirpath
        this.readEntry()
    }

    /**
     * 读取入口文件的配置信息
     */
    readEntry(): void {
        const entryPath: string = path.resolve(this.dirpath, config.entryFileName)
        const configRet: FileBundleConfig = require(entryPath)
        this.config = configRet
    }
}
