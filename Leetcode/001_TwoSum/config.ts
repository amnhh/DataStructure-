import { FileBundleConfig } from '../../types/interface'

const config: FileBundleConfig = {
    date: '2020-05-19',
    type: 'questions',
    build_target: {
        DataSource: [
            'Array',
            'HashMap'
        ],
        Algorthm: [],
        QuestionNotes: {
            LeetCode: {
                title: '1~两数之和',
                target: [
                    'root',
                    'Array'
                ]
            }
        }
    },
    name: 'TwoSum',
    cname: '两数之和'
}

export default config
