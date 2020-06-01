import BasicParser from './BasicParser'
import {
    TTemplateType,
    TBlockSplitResult,
    TBlockParseResult
} from '../types'

export default class SolutionParser extends BasicParser {
    // 分块结果
    blockSplitResult: TBlockSplitResult = <TBlockSplitResult>{}

    blockParseResult: TBlockParseResult = <TBlockParseResult>{}

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
