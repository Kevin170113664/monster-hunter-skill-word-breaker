# mhw skill word breaker

* This is a small util to help hunters(programmers) on skill selection.
* skill alias is keep updating, feel free to tell me some popular alias.

## Functionality

### Parse text to skills
Skill text with level as an input
```javascript
import Breaker from 'monster-hunter-skill-word-breaker';

const result = Breaker.break('无伤1');
```
Then the `result` is
```json
[
  {
    "en": "Peak Performance",
    "id": 56,
    "jp": "フルチャージ",
    "level": 1,
    "zh-hans": "无伤",
    "zh-hant": "無傷"
  }
]
```

### Support skill alias
Use space separator to make skill text as an input
```javascript
import Breaker from 'monster-hunter-skill-word-breaker';

const result = Breaker.break('看7 弱特3 超心3 挑5 无伤3');
```
Then you can get `result` as below
```json
[
  {
    "en": "Critical Eye",
    "id": 42,
    "jp": "見切り",
    "level": 7,
    "zh-hans": "看破",
    "zh-hant": "看破"
  },
  {
    "en": "Weakness Exploit",
    "id": 44,
    "jp": "弱点特効",
    "level": 3,
    "zh-hans": "弱点特效",
    "zh-hant": "弱點特效"
  },
  {
    "en": "Critical Boost",
    "id": 43,
    "jp": "超会心",
    "level": 3,
    "zh-hans": "超会心",
    "zh-hant": "超會心"
  },
  {
    "en": "Agitator",
    "id": 55,
    "jp": "挑戦者",
    "level": 5,
    "zh-hans": "挑战者",
    "zh-hant": "挑戰者"
  },
  {
    "en": "Peak Performance",
    "id": 56,
    "jp": "フルチャージ",
    "level": 3,
    "zh-hans": "无伤",
    "zh-hant": "無傷"
  }
]
```

## License
MIT