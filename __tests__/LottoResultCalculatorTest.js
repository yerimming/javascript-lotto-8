import Lotto from '../src/Lotto.js';
import LottoResultCalculator from '../src/model/LottoResultCalculator.js';
import { LOTTO_CONFIG } from '../src/constants/config.js';

describe('LottoResultCalculator 단위 테스트', () => {
    let calculator;
    const winningNums = [1, 2, 3, 4, 5, 6];
    const bonusNum = 7;

    beforeEach(() => {
        calculator = new LottoResultCalculator();
    });

    describe('getRank (등수 계산)', () => {
        test('6개 일치 시 1을 반환한다', () => {
            const myLotto = [1, 2, 3, 4, 5, 6];
            expect(calculator.getRank(myLotto, winningNums, bonusNum)).toBe(1);
        });

        test('5개 + 보너스 일치 시 2를 반환한다', () => {
            const myLotto = [1, 2, 3, 4, 5, 7];
            expect(calculator.getRank(myLotto, winningNums, bonusNum)).toBe(2);
        });

        test('5개 일치 (보너스 불일치) 시 3을 반환한다', () => {
            const myLotto = [1, 2, 3, 4, 5, 8];
            expect(calculator.getRank(myLotto, winningNums, bonusNum)).toBe(3);
        });

        test('4개 일치 시 4를 반환한다', () => {
            const myLotto = [1, 2, 3, 4, 8, 9];
            expect(calculator.getRank(myLotto, winningNums, bonusNum)).toBe(4);
        });

        test('3개 일치 시 5를 반환한다', () => {
            const myLotto = [1, 2, 3, 8, 9, 10];
            expect(calculator.getRank(myLotto, winningNums, bonusNum)).toBe(5);
        });

        test('2개 이하 일치 시 0을 반환한다', () => {
            const myLotto = [1, 2, 8, 9, 10, 11];
            expect(calculator.getRank(myLotto, winningNums, bonusNum)).toBe(0);
        });
    });

    describe('calculateResults & calculateRate (결과 및 수익률 계산)', () => {
        test('5등 1개 당첨 시, 결과와 수익률을 정확히 계산한다', () => {
            // 5등 상금: 5000원
            // 1장 가격: 1000원
            // 수익률: (5000 / 1000) * 100 = 500.0%

            const lottos = [new Lotto([1, 2, 3, 10, 11, 12])]; // 5등 1개
            const purchaseAmount = lottos.length * LOTTO_CONFIG.LOTTO_PRICE; // 1000

            calculator.calculateResults(winningNums, bonusNum, lottos);
            calculator.calculateRate(purchaseAmount);

            const results = calculator.getResults();
            const rate = calculator.getReturnOfRate();

            expect(results.results[5]).toBe(1); // 5등 1개
            expect(results.results[4]).toBe(0); // 4등 0개
            expect(rate).toBe('500.0'); // 수익률
        });

        test('당첨 내역이 없을 때, 수익률은 0.0%이다', () => {
            const lottos = [new Lotto([10, 11, 12, 13, 14, 15])]; // 꽝
            const purchaseAmount = 1000;

            calculator.calculateResults(winningNums, bonusNum, lottos);
            calculator.calculateRate(purchaseAmount);

            expect(calculator.getReturnOfRate()).toBe('0.0');
        });
    });
});