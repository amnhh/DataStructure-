import BasicParser from './BasicParser'
import { TTemplateType, TBlockSplitResult } from '../types'

export default class SolutionParser extends BasicParser {
    // 成块解析的结果集
    blockSplitResult: TBlockSplitResult = <TBlockSplitResult>{}

    constructor (templatePath: string) {
        super(templatePath, 'solutions');
        this.__parse()
    }

    /**
     * 执行
     * @private
     */
    __parse() {
        this.__splitBlock()
    }

    __splitBlock(): TBlockSplitResult {
        const { templateSource } = this



        return <TBlockSplitResult>{
            input: templateSource
        }
    }
}
