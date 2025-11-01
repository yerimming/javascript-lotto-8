import { LOTTO_CONFIG } from "../constants/config.js";
import { ERROR_MESSAGE } from "../constants/message.js";

class Validator {
    // 구입 금액 검증
    static validatePurchaseAmount(purchaseAmount) {
        const amount = Number(purchaseAmount);
        this.checkDivisibleByThousand(amount);
        this.checkIsNumber(amount);
        this.checkIsPositive(amount);
    }

    static checkDivisibleByThousand(value) {
        if ((value % LOTTO_CONFIG.LOTTO_PRICE) != 0) {
            throw new Error(ERROR_MESSAGE.PURCHASE_AMOUNT_NOT_DIVISIBLE_THOUSAND);
        }
    }

    static checkIsNumber(value) {
        if (isNaN(value)) {
            throw new Error(ERROR_MESSAGE.NOT_NUMBER);
        }
    }

    static checkIsPositive(value) {
        if (value <= 0) {
            throw new ERROR(ERROR_MESSAGE.NOT_POSITIVE);
        }
    }

    // 당첨 번호 인증
    static validateWinningNum(winningNum) {
        const numbers = winningNum.split(',').map(Number);
        this.checkWinningNumIsNumber(numbers);
        this.checkWinningNumRange(numbers);
        this.checkIsSixElements(numbers);
        this.checkWinningNumDuplication(numbers);
    }

    static checkWinningNumIsNumber(value) {
        if(value.some(isNaN)) {
            throw new Error(ERROR_MESSAGE.NOT_NUMBER);
        }
    }

    static checkWinningNumRange(value) {
        const isValid = value.every(num => num >= 1 && num <= 45);
        if (!isValid) {
            throw new Error(ERROR_MESSAGE.NOT_RANGE);
        }
    }

    static checkIsSixElements(value) {
        if(value.length !== 6) {
            throw new Error(ERROR_MESSAGE.NOT_SIX_ELEMENTS);
        }
    }

    static checkWinningNumDuplication(value) {
        const isValid = new Set(value).size === value.length;
        if(!isValid) {
            throw new Error(ERROR_MESSAGE.DUPLICATION);
        }
    }
}

export default Validator;