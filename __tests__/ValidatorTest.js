import Validator from "../src/utils/validate.js";
import { ERROR_MESSAGE } from "../src/constants/message.js";

describe('Validator 단위 테스트', () => {

    describe('validatePurchaseAmount (구입 금액 검증)', () => {
        test('1,000원 단위가 아니면 오류를 발생시킨다.', () => {
            expect(() => Validator.validatePurchaseAmount('1001'))
                .toThrow(ERROR_MESSAGE.PURCHASE_AMOUNT_NOT_DIVISIBLE_THOUSAND);
        });

        test('숫자가 아닌 값을 입력하면 오류를 발생시킨다.', () => {
            expect(() => Validator.validatePurchaseAmount('thousand'))
                .toThrow(ERROR_MESSAGE.NOT_NUMBER);
        });

        test('0 또는 음수를 입력하면 오류를 발생시킨다.', () => {
            expect(() => Validator.validatePurchaseAmount('0'))
                .toThrow(ERROR_MESSAGE.NOT_POSITIVE);
            expect(() => Validator.validatePurchaseAmount('-1000'))
                .toThrow(ERROR_MESSAGE.NOT_POSITIVE);
        });

        test('유효한 금액을 입력하면 오류를 발생시키지 않는다.', () => {
            expect(() => Validator.validatePurchaseAmount('7000')).not.toThrow();
        });
    });

    describe('validateWinningNum (당첨 번호 검증)', () => {
        test('번호가 1~45 범위 내의 숫자가 아니면 오류를 발생시킨다.', () => {
            expect(() => Validator.validateWinningNum('1,2,3,4,5,46'))
                .toThrow(ERROR_MESSAGE.NOT_RANGE);
            expect(() => Validator.validateWinningNum('1,2,3,4,5,0'))
                .toThrow(ERROR_MESSAGE.NOT_RANGE);
        });

        test('번호 개수가 6개가 아니면 오류를 발생시킨다.', () => {
            expect(() => Validator.validateWinningNum('1,2,3,4,5'))
                .toThrow(ERROR_MESSAGE.NOT_SIX_ELEMENTS);
        });

        test('중복된 숫자가 있으면 오류를 발생시킨다.', () => {
            expect(() => Validator.validateWinningNum('1,2,3,4,5,5'))
                .toThrow(ERROR_MESSAGE.DUPLICATION);
        });

        test('유효한 당첨 번호를 입력하면 오류를 발생시키지 않는다.', () => {
            expect(() => Validator.validateWinningNum('1,2,3,4,5,6')).not.toThrow();
        });
    });

    describe('validateBonusNum (보너스 번호 검증)', () => {
        const winningNums = [1, 2, 3, 4, 5, 6];

        test('당첨 번호와 중복되면 오류를 발생시킨다.', () => {
            expect(() => Validator.validateBonusNum('6', winningNums))
                .toThrow(ERROR_MESSAGE.BONUS_IN_WINNING_NUM);
        });

        test('범위를 벗어나면 오류를 발생시킨다.', () => {
            expect(() => Validator.validateBonusNum('46', winningNums))
                .toThrow(ERROR_MESSAGE.NOT_RANGE);
        });

        test('유효한 보너스 번호를 입력하면 오류를 발생시키지 않는다.', () => {
            expect(() => Validator.validateBonusNum('7', winningNums)).not.toThrow();
        });
    });
});