import { FileBundleConfig } from '../../types/interface'

const config: FileBundleConfig = {
    date: '2020-05-23',
    type: 'questions',
    build_target: {
        DataSource: [
            'Array',
            'HashMap'
        ],
        Algorthm: [],
        QuestionNotes: {
            LeetCode: {
                title: '15~三数之和',
                target: [
                    'root',
                    'Array'
                ]
            }
        }
    },
    name: 'ThreeSum',
    cname: '三数之和'
}

export default config
