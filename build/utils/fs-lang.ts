/**
 * fs 的增强函数
 */
import * as fs from 'fs'
import { config } from '../config'
import * as path from 'path'
import { resolveTemplateFileName } from './path-lang'

/**
 * 获取模板的值 => 会自动添加扩展名~
 * @param tmpName
 */
export const getTmpValue = (tmpName: string): string => {
    return fs.readFileSync(path.resolve(__dirname, config.templatesDir, resolveTemplateFileName(tmpName)), { encoding: 'utf8' })
}

/**
 * 获取普通文件的值
 * @param mdPath
 */
export const getFileValue = (filepath: string): string => {
    return fs.readFileSync(filepath, { encoding: 'utf8' })
}

/**
 * 获取文件夹下的文件名列表
 * @param dirpath
 */
export const getDirChildList = (dirpath: string): Array<string> => {
    return fs.readdirSync(dirpath, { encoding: 'utf8' })
}
