# Quiz!

`number[]`와 같이 타입을 나타내는 Query가 있습니다.

`[1, 2, 3]`와 같은 값이 입력되면 `true`를 나태나고,

`1`처럼 정의한 타입이 아닌 값이 입력되면 `false`를 반환하는 모듈(클래스) `TypeChecker.js`를 구현하고자 합니다.

구현하려는 모듈 사용법은 다음과 같습니다:

```javascript
const query = 'number';
const value = 1;
const result = new TypeChecker().valid(query, value);
console.log(result);    // true
```

# 이미 구현됨

다행하게도 다음 내용은 구현되었습니다.

Query를 파싱하는 부분:

- `flagOptional`
    - true: 값 생략 가능
    - false: 값 생략 불가능
- `flagArray`
    - true: 배열
    - false: 배열 불가
- `flagEmptyArray`
    - true: 빈 배열 가능
    - false: 빈 배열 불가

Value를 파싱하여 얻은 정보:

- `isExists`
    - true: 값이 존재함
    - false: 값이 존재하지 않음
- `isArray`
    - true: 값이 배열임 (빈 배열 포함)
    - false: 값이 배열이 아님
- `isEmptyArray`
    - true: 값이 빈 배열임
    - false: 값이 빈 배열이 아님 

그리고 현재 변수의 `type`.
이 값은 단순히 `typeof value`의 결과이므로 자바스크립트의 `typeof`를 어느정도 이해하셔야 합니다.

`typeof []` => `"object"`

`typeof 1` => `"number"`

`typeof undefined` => `"undefined"`

# 목표

`TypeChecker.js` 파일을 열어서 메서드내 논리식을 구현하십시오.

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
