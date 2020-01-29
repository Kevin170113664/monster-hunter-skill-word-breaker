import _ from 'lodash'
import skills from '../data/skills'

const findSkill = (skillText) => {
  return _.find(skills, (skill) => {
    let skillTexts = [skill['zh-hans'], skill['zh-hant'], skill['en'], skill['jp']]
    if (skill.hasOwnProperty('alias')) {
      skillTexts = [...skillTexts, ...skill.alias]
    }
    return _.includes(skillTexts, skillText)
  })
}

const Breaker = {
  getSkills: () => skills,
  break: (input) => {
    const skillTexts = _.split(input, ' ')

    const parsedSkills = _.map(skillTexts, singleSkillText => {
      const skill = findSkill(singleSkillText.replace(/[0-9]/g, ''))
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