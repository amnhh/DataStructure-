/**
 * 「数据结构」类型的文件生成器
 */

import FileBundle from './index';
import { FileBundleTypes } from '../../types/interface'
import * as path from 'path';
import { config } from '../config'
import { resolveTemplateFileName } from '../utils/path-lang'


export default class DataStructureFileBundle extends FileBundle{
    // 类型
    type: FileBundleTypes = 'datastructure'

    constructor (dirpath: string) {
        super(dirpath)
        this.bindTemplatePath()
    }

    /**
     * 绑定模板路径
     */
    bindTemplatePath(): void {
        this.templateFilePath = path.resolve(config.templatesDir, resolveTemplateFileName(this.type))
    }
}
