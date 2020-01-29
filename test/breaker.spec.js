import Breaker from '../src/breaker';

describe('breaker', () => {
  test('should be able to recognize Chinese skill name and its skill level', () => {
    const input = '看破7'

    const result = Breaker.break(input)

    expect(result).toEqual({'看破': 7})
  });

  test('should be able to recognize multiple skills with space separator', () => {
    const input = '看破7 弱点特效3 超会心3'

    const result = Breaker.break(input)

    expect(result).toEqual({'看破': 7, '弱点特效': 3, '超会心': 3})
  });
})
