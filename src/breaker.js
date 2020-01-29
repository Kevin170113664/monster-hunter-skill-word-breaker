import _ from 'lodash'
import skills from '../data/skills'

const Breaker = {
  break: (input) => {
    const skillTexts = _.split(input, ' ')

    const parsedSkills = _.map(skillTexts, singleSkillText => {
      const skill = _.find(skills, {'zh-hans': singleSkillText.replace(/[0-9]/g, '')})
      if (!skill) {
        return
      }

      const inputLevel = Number(_.get(singleSkillText.match(/\d+/), [0], 1))
      const level = inputLevel > skill.maxLevel ? skill.maxLevel : inputLevel
      return {
        level,
        ..._.pick(skill, ['id', 'en', 'jp', 'zh-hans', 'zh-hant'])
      }
    })

    return _.compact(parsedSkills)
  }
}

export default Breaker