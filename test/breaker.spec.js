import Breaker from '../src/breaker';

describe('breaker', () => {
  test('should be able to recognize Chinese skill name and its skill level', () => {
    const input = '看破7'

    const result = Breaker.break(input)

    expect(result).toEqual({'看破': 7})
  });
})
