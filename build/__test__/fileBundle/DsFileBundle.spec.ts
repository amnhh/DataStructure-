import { describe, it } from 'mocha'
import { assert } from 'chai'
import DataStructureFileBundle  from '../../fileBundle/DsFileBundle'
import * as path from 'path'
import { config } from '../../config'

const resolveExamplesDir: Function = (_: string = ''): string => path.resolve(__dirname, './examples', _)

describe('数据结构的 bundle 测试', () => {
    it('基础使用', () => {
        const dsBundle: DataStructureFileBundle = new DataStructureFileBundle(resolveExamplesDir())
        assert.equal(dsBundle.configPath, resolveExamplesDir(config.entryFileName))

        dsBundle.build();
    })
})
