import _ from 'lodash'
import skills from '../data/skills'

const Breaker = {
  break: (input) => {

    const skillTexts = _.split(input, ' ')

    return _.map(skillTexts, singleSkillText => {
      const skill = _.find(skills, {'zh-hans': singleSkillText.replace(/[0-9]/g, '')})
      const inputLevel = Number(singleSkillText.match(/\d+/)[0])
      const level = inputLevel > skill.maxLevel ? skill.maxLevel : inputLevel
      return {
        level,
        ..._.pick(skill, ['id', 'en', 'jp', 'zh-hans', 'zh-hant'])
      }
    })
  }
}

export default Breaker