type TBaseRegs = {
  // 「问题」对应的目录匹配
  QUESTIONS_DIR_REG: RegExp

  // 在 lib 目录的首层进行分类
  // lib 目录下的首层的分层匹配规则，类似 ds-1-array 会被我认为是数据结构大类下的第一个，array
  LIB_TOP_LEVEL_NS_REG: RegExp
  
  // 测试用例所在的文件
  TESTS_DIR_REG: RegExp,

  // 「问题」目录下的名字规则
  QUESTION_TOP_LEVEL_NS_REG: RegExp
}

export const baseRegs: TBaseRegs = {
  QUESTIONS_DIR_REG: /^questions$/,
  
  // [oldValue, $1, $2, $3] = 'ds-1-array'.match(baseRegs.LIB_TOP_LEVEL_NS_REG)
  // $1 => ds => 大类 ~ 是属于 DataStructure 还是 Algorithm
  // $2 => 1 => 顺序 ~ 数据结构大类中的第 1 个
  // $3 => array => 名字 ~ 是数据结构大类中的 array
  LIB_TOP_LEVEL_NS_REG: /^([a-zA-z_]*)-([1-9]*)-([a-zA-Z1-9_]*)$/,
  
  TESTS_DIR_REG: /^__test__$/,

  // [oldValue, $1, $2] = ‘leetcode-01_twoSum’.match(baseRegs.QUESTION_TOP_LEVEL_NS_REG)
  // $1 => leetcode => 问题大类 ~ 属于「leetcode」还是「剑指offer」或者其他
  // $2 => 01_twoSum => 问题的名字
  QUESTION_TOP_LEVEL_NS_REG: /^([a-zA-z0-9_]*)-([a-zA-Z0-9_]*)$/
}


// 占位符的 placeholder
export enum EPlaceholder {
  // 解决方案
  solutions,
  // 测试用例
  tests,
  // 问题解释
  questions,
  // 配置信息
  config,
  // 问题列表
  questionLists,
  // 实现
  realize,
  // 接口结构
  interface,
  // 题目来源
  questionSource,
  // 标签
  tags
}
