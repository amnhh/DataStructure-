import { LineResolverType } from '../types'

export default class LineResolver {
    // 这一行的类型
    type: LineResolverType = ''

    // 所处的文件路径
    filepath: string

    // 具体内容
    input: string
    
    constructor (input: string, filepath: string) {
        this.input = input
        this.filepath = filepath
    }
}
