import _ from 'lodash'

const Breaker = {
  break: (input) => {
    return _.chain(input)
      .split(' ')
      .map(skill => ({
        skillName: skill.replace(/[0-9]/g, ''),
        skillLevel: Number(skill.match(/\d+/)[0])
      }))
      .keyBy('skillName')
      .mapValues(({skillLevel}) => skillLevel)
      .value()
  }
}

export default Breaker