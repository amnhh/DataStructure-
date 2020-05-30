import * as fs from 'fs'
import * as path from 'path'

/**
 * fs 增强方法
 */

// 简易封装 fs.readFileSync
export const readFileSync = (filepath: string): string =>
    fs.readFileSync(filepath, { encoding: 'utf8' })


/**
 * path 增强方法
 */
export const distDirPathResolver = (templatePath: string): string =>
    path.resolve(templatePath, '../dist')
