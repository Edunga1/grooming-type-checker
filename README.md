# Quiz!

Query에 만족하는 변수만 허용하는 메서드를 구현하려 합니다.

Query(첫 번째 인자)의 양식과 메서드의 사용법은 다음과 같습니다:

usage: `valid(query:string, value:any) : boolean`

일반적인 쿼리 표현.

- `.valid('number', 1)` => `true`
- `.valid('number', '1')` => `false`
- `.valid('number', undefined)` => `false`

Optional. 값이 누락되어도 허용 됩니다.

- `.valid('?number', 1)` => `true`
- `.valid('?number', undefined)` => `true`

배열. 빈 배열은 허용하지 않습니다.

- `.valid('number[]', [1, 2, 3]` => `true`
- `.valid('number[]', []` => `false`

빈 배열 허용.

- `.valid('number[?]', []` => `true`
- `.valid('number[?]', [1, 2]` => `true`

위 조건들을 만족하는 로직을 구현 해 주세요!

*다른 조건들은 테스트 코드를 참조하시면 됩니다.*

# 이미 구현됨

다행히 다음 내용은 이미 구현되어 있습니다.

Query를 파싱하여 얻은 변수:

- ⓐ `flagOptional`
    - true: 값 생략 가능
    - false: 값 생략 불가능
- ⓑ `flagArray`
    - true: 배열
    - false: 배열 불가
- ⓒ `flagEmptyArray`
    - true: 빈 배열 가능
    - false: 빈 배열 불가
- ⓣ `type`
    - `query`에 입력된 타입
    - `?number[?]`라면 `number`를 담고 있음

Value를 파싱하여 얻은 변수:

- ① `isExists`
    - true: 값이 존재함
    - false: 값이 존재하지 않음
- ② `isArray`
    - true: 값이 배열임 (빈 배열 포함)
    - false: 값이 배열이 아님
- ③ `isEmptyArray`
    - true: 값이 빈 배열임
    - false: 값이 빈 배열이 아님

# 목표

`TypeChecker.js` 파일을 열어서 메서드 내 논리식을 구현하십시오.

`TypeChecker.spec.js`는 건드려선 안됩니다.

예를들어 **생략 가능 조건**을 통과하는 `optional`의 논리식은 다음과 같이 구현할 수 있습니다:

```javascript
const optional = flagOptional || isExists;
```

# 테스트

의존 모듈(테스트 도구)를 자동으로 설치합니다:

```bash
npm install
```

`TypeChecker.js` 파일 구현 후 테스트를 통과하는지 확인하세요.

```bash
npm test
```
