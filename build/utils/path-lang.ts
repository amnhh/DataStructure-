import * as path from 'path'

/**
 * 统一管理 hbs 的扩展名
 * ps: 万一哪天想换了呢~
 * @param fileNameWithoutExt
 */
export const resolveTemplateFileName = (fileNameWithoutExt: string): string => `${fileNameWithoutExt}.hbs`

/**
 * 为 markdown 添加扩展名
 * @param fileNameWithoutExt
 */
export const resolveMdsFileName = (fileNameWithoutExt: string): string => `${fileNameWithoutExt}.md`

/**
 * 获取 note 的 filepath
 * @param dirname
 */
export const getNotesFilepath = (dirname: string): string => path.resolve(dirname, resolveMdsFileName('notes'))

/**
 * 找到 interface 的文件path
 * @param dirpath
 */
export const getInterfacePath = (dirpath: string): string => path.resolve(dirpath, 'realize/interface.ts')

/**
 * 找到数据结构实现的文件path
 * @param dirpath
 */
export const getRealizePath = (dirpath: string): string => path.resolve(dirpath, 'realize/index.ts')

/**
 * 获取「问题」所在的目录
 */
export const getQuestionsPath = (dirpath: string): string => path.resolve(dirpath, 'questions')

/**
 * 依据父级的名字还有 question 的文件夹名，获取 questionBundle 需要的 dirpath
 */
export const getSimpleQuestionPath = (parentPath: string, questionName: string): string => {
    return path.resolve(
        getQuestionsPath(parentPath),
        questionName
    )
}
