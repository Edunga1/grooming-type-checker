const REGEX_OPTIONAL = /^\?/;
const REGEX_TYPE = /[A-Za-z]+/;
const REGEX_EMPTY_ARRAY = /\[\?\]$/;
const REGEX_ARRAY = /\[\??\]$/;

module.exports = class TypeChecker {
    /**
     * @param {string} query
     * @param {any} value
     */
    valid(query, value) {
        const type = query.match(REGEX_TYPE)[0];

        // actual status
        const isExists = value !== undefined;
        const isArray = Array.isArray(value);
        const isEmptyArray = isArray && !value.length;

        // flags
        const flagOptional = REGEX_OPTIONAL.test(query);
        const flagArray = REGEX_ARRAY.test(query);
        const flagEmptyArray = REGEX_EMPTY_ARRAY.test(query);

        // results
        const optional = false;     // solve this! '생략 가능' 통과 여부
        const array = false;        // solve this! '배열' 통과 여부
        const emptyArray = false;   // solve this! '빈 배열' 통과 여부
        const typeMatched = true;   // 타입 일치 여부. 이 부분은 까다로우므로
                                    // true로 두고 테스트를 모두 통과하면 구현하는 것을 추천합니다.

        // 건드리지 마세요!
        return optional && typeMatched && array && emptyArray;
    }
};
