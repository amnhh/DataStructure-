import { TTemplateType } from '../types'
import {
    readFileSync,
    distDirPathResolver
} from '../utils'

export default class BasicParser {
    // 文件模板路径
    templateFilepath: string

    // 模板的类型
    type: TTemplateType = 'basic'

    // 模板的初始值
    templateSource: string = ''

    // 生成物的目录
    distDirPath: string = ''

    /**
     * 构造函数
     * @param templatePath 模板路径
     * @param type
     */
    constructor (templatePath: string, type: TTemplateType) {
        this.templateFilepath = templatePath
        this.type = type
        this.__init()
    }

    /**
     * 初始化方法
     * @private
     */
    __init(): void {
        this.templateSource = readFileSync(this.templateFilepath)
        this.distDirPath = distDirPathResolver(this.templateFilepath)
    }
}
