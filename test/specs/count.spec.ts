import { Pet, Dog } from './_';
import { curray } from '../../src/index';

describe('count ', () => {
    beforeEach(() => {
        curray();
    });

    it('returns the amount of numbers in a plain array', () => {
        const fruits: string[] = [
            'apple',
            'banana',
            'mango',
            'orange',
            'passionfruit',
            'grape'
        ];

        const results = fruits.count();

        expect(results).toBe(6);
    });

    it('returns the amount of numbers in an array with a predicate', () => {
        const fruits: string[] = [
            'apple',
            'banana',
            'mango',
            'orange',
            'passionfruit',
            'grape'
        ];

        const results = fruits.count(m => m.length > 5);

        expect(results).toBe(3);
    });
});
