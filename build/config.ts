import * as path from 'path'

interface Config {
    entryFileName: string,
    templatesDir: string
}

export const config: Config = {
    entryFileName: 'config',
    templatesDir: path.resolve(__dirname, './templates/')
}
