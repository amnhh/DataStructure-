/**
 * 统一管理 hbs 的扩展名
 * ps: 万一哪天想换了呢~
 * @param fileNameWithoutExt
 */
export const resolveTemplateFileName = (fileNameWithoutExt: string): string => `${fileNameWithoutExt}.hbs`
