import { describe, it } from 'mocha'
import { assert } from 'chai'
import QuestionFileBundle from '../../fileBundle/QuestionFileBundle'
import * as path from 'path'

const resolveExamplesDir: Function = (_: string = ''): string => path.resolve(__dirname, './examples', _)

const questionBun = new QuestionFileBundle(resolveExamplesDir('./questions/02_DuplicateArray__swordOffer'))

describe('「问题」模块的相关测试用例', () => {
    it('type 为 questions', () => {
        assert.equal(questionBun.type, 'questions')
    })

    it('产出物 target 收集', () => {
        questionBun.initBuildTarget();
    })
})
