const Breaker = {
  break: (input) => {
    const skillLevel = Number(input.match(/\d+/)[0])
    const skillName = input.replace(/[0-9]/g, '')

    return {[skillName]: skillLevel}
  }
}

export default Breaker