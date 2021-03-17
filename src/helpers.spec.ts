import {options, source} from './helpers';

// window.fetch = jest.fn(() => Promise.resolve({
//     json: () => Promise.resolve({})
// }));

describe('helpers', () => {
    describe('source', () => {
        it('should return "src" from HTMLElement', () => {
            const el = document.createElement('img');
            el.src = 'test';
            expect(source(el)).toBe('test');
        });

        it('should throw an exception for missing "src"', () => {
            const el = document.createElement('img');
            expect(() => source(el)).toThrow();
        });
    });

    describe('options', () => {
        it('should return "undefined" for no options', () => {
            const el = document.createElement('img');
            expect(options(el)).toBe(undefined);
        });
        it('should return options object', () => {
            const expected = {
                str: 'foo',
                num: 2
            };
            const el = document.createElement('img');
            el.setAttribute('opts', JSON.stringify(expected));
            expect(options(el)).toEqual(expected);
        });
        it('should throw an error for options not parsed', () => {
            const el = document.createElement('img');
            el.setAttribute('opts', '-not-valid-json-');
            expect(() => options(el)).toThrow();
        });
    });

    describe.skip('load', () => {

    });
});
