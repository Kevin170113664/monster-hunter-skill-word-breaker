import _ from 'lodash'
import Breaker from '../src/breaker'

describe('breaker', () => {
  test('should be able to recognize simplify Chinese skill name and its skill level', () => {
    const input = '看破7'

    const result = Breaker.break(input)

    expect(result).toEqual([
      {
        'id': 42,
        'en': 'Critical Eye',
        'jp': '見切り',
        'zh-hans': '看破',
        'zh-hant': '看破',
        'level': 7
      }
    ])
  })

  test('should be able to recognize Japanese skill name and its skill level', () => {
    const input = '見切り7'

    const result = Breaker.break(input)

    expect(result).toEqual([
      {
        'id': 42,
        'en': 'Critical Eye',
        'jp': '見切り',
        'zh-hans': '看破',
        'zh-hant': '看破',
        'level': 7
      }
    ])
  })

  test('should be able to recognize multiple skills with space separator', () => {
    const input = '看破7 弱点特效3 超会心3'

    const result = Breaker.break(input)

    expect(result).toEqual([
      {
        'id': 42,
        'en': 'Critical Eye',
        'jp': '見切り',
        'zh-hans': '看破',
        'zh-hant': '看破',
        'level': 7
      },
      {
        'id': 44,
        'en': 'Weakness Exploit',
        'jp': '弱点特効',
        'zh-hans': '弱点特效',
        'zh-hant': '弱點特效',
        'level': 3
      },
      {
        'id': 43,
        'en': 'Critical Boost',
        'jp': '超会心',
        'zh-hans': '超会心',
        'zh-hant': '超會心',
        'level': 3
      }
    ])
  })

  test('should not breakthrough the max level', () => {
    const input = '攻击10'

    const result = Breaker.break(input)

    expect(result).toEqual([
      {
        'id': 14,
        'en': 'Attack Boost',
        'jp': '攻撃',
        'zh-hans': '攻击',
        'zh-hant': '攻擊',
        'level': 7
      }
    ])
  })

  test('should be able to find skills with alias', () => {
    const input = '看7 弱特2 超心3'

    const result = Breaker.break(input)

    expect(result).toEqual([
      {
        'id': 42,
        'en': 'Critical Eye',
        'jp': '見切り',
        'zh-hans': '看破',
        'zh-hant': '看破',
        'level': 7
      },
      {
        'id': 44,
        'en': 'Weakness Exploit',
        'jp': '弱点特効',
        'zh-hans': '弱点特效',
        'zh-hant': '弱點特效',
        'level': 2
      },
      {
        'id': 43,
        'en': 'Critical Boost',
        'jp': '超会心',
        'zh-hans': '超会心',
        'zh-hant': '超會心',
        'level': 3
      }
    ])
  })

  test('should be able to set level to 1 by default', () => {
    const input = '毅力'

    const result = Breaker.break(input)

    expect(result).toEqual([
      {
        'id': 141,
        'en': 'Guts',
        'jp': '根性',
        'zh-hans': '毅力',
        'zh-hant': '毅力',
        'level': 1
      }
    ])
  })

  test('should be able to ignore unrecognized skill', () => {
    const input = '看破弱特超心'

    const result = Breaker.break(input)

    expect(result).toEqual([])
  })
})

describe('skill data', () => {
  test('should not have duplicate alias', () => {
    const skills = Breaker.getSkills()
    const result = _.chain(skills)
      .map(({alias}) => alias)
      .flatten()
      .filter((val, i, iteratee) => _.includes(iteratee, val, i + 1))
      .compact()
      .value()

    expect(result).toEqual([])
  })
})
