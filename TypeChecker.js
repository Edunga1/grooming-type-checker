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
        const optional = false;     // solve this!
        const array = false;        // solve this! 
        const emptyArray = false;   // solve this! 
        const typeMatched = false;  // solve this!

        return optional && typeMatched && array && emptyArray;
    }
};
