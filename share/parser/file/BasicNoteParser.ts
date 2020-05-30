import BasicParser from './BasicParser'
import { INoteConfig } from '../types'

/**
 * 基础笔记的 parser
 *
 * 基础笔记的 parser 不会涉及到 handlebars 的模板替换，只会做基本的
 */
export default class BasicNoteParser extends BasicParser {
    // 配置信息
    config: INoteConfig = <INoteConfig>{}

    /**
     * 构造函数
     * @param templatePath
     */
    constructor (templatePath: string) {
        super(templatePath, 'IntroToAlgNote');
        this.__getConfig()
        this.__parse()
    }

    /**
     * 获取 config 信息
     * @private
     */
    __getConfig(): void {}

    /**
     * 编译
     * 做基础的模板中的文件路径 => 具体文件值
     * @private
     */
    __parse (): void {
        const { templateSource } = this

    }
}
