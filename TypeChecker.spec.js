const expect = require('chai').expect;
const TypeChecker = require('./TypeChecker');

describe('TypeChecker', () => {
    describe('valid', () => {
        beforeEach(() => {
            this.instance = new TypeChecker();
        });
        describe('Restriction - optional', () => {
            it('On', () => {
                const query = '?number';
                const value = undefined;
                const result = this.instance.valid(query, value);
                expect(result).to.be.true;
            });
            it('On - value is given', () => {
                const query = '?number';
                const value = 1;
                const result = this.instance.valid(query, value);
                expect(result).to.be.true;
            })
            it('Off', () => {
                const query = 'number';
                const value = undefined;
                const result = this.instance.valid(query, value);
                expect(result).to.be.false;
            });
        });
        describe('Restriction - array', () => {
            it('Array', () => {
                const query = 'number[]';
                const value = [1, 2, 3];
                const result = this.instance.valid(query, value);
                expect(result).to.be.true;
            });
            it('Non-array', () => {
                const query = 'number[]';
                const value = 1;
                const result = this.instance.valid(query, value);
                expect(result).to.be.false;
            });
        });
        describe('Restriction - empty array', () => {
            it('Empty', () => {
                const query = 'number[?]';
                const value = [];
                const result = this.instance.valid(query, value);
                expect(result).to.be.true;
            });
            it('Not Empty', () => {
                const query = 'number[]';
                const value = [];
                const result = this.instance.valid(query, value);
                expect(result).to.be.false;
            });
        });
        describe('Restriction - type', () => {
            it('Matched', () => {
                const query = 'number';
                const value = 1;
                const result = this.instance.valid(query, value);
                expect(result).to.be.true;
            });
            it('Matched - array', () => {
                const query = 'number[]';
                const value = [1, 2, 3];
                const result = this.instance.valid(query, value);
                expect(result).to.be.true;
            });
            it('Matched - not consistent array', () => {
                const query = 'number[]';
                const value = [1, '2', 3];
                const result = this.instance.valid(query, value);
                expect(result).to.be.false;
            });
            it('Not Matched', () => {
                const query = 'number';
                const value = '1';
                const result = this.instance.valid(query, value);
                expect(result).to.be.false;
            });
            it('Not Matched - given empty array', () => {
                const query = 'number';
                const value = [];
                const result = this.instance.valid(query, value);
                expect(result).to.be.false;
            });
        });
    });
});
