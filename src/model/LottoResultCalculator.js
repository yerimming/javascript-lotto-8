import { LOTTO_CONFIG } from "../constants/config.js";

class LottoResultCalculator {
    constructor() {
        this.results = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        this.totalPrize = 0;
        this.returnOfRate = 0;
    }

    get PRIZE_MONEY() {
        return LOTTO_CONFIG.PRIZE_MONEY;
    }

    calculateResults(winningNums, bonusNum, lottos) {
        lottos.forEach((lotto) => {
            const lottoNumbers = lotto.getNumbers();
            const rank = this.getRank(lottoNumbers, winningNums, bonusNum);
            if (rank !== 0) {
                this.results[rank] += 1;
                this.totalPrize += this.PRIZE_MONEY[rank];
            }
        });
    }

    getRank(lottoNumbers, winningNums, bonusNum) {
        const matchedCount = lottoNumbers.filter(num => winningNums.includes(num)).length;
        const hasBonus = lottoNumbers.includes(bonusNum);

        if(matchedCount === 6) return 1;
        if(matchedCount === 5 && hasBonus) return 2;
        if(matchedCount === 5) return 3;
        if(matchedCount === 4) return 4;
        if(matchedCount === 3) return 5;

        return 0;
    }

    calculateRate(purchaseAmount) {
        this.returnOfRate = (this.totalPrize / purchaseAmount * 100).toFixed(1);
    }

    getResults() {
        return {
            results: this.results,
            prizeMoney: this.PRIZE_MONEY
        };
    }

    getReturnOfRate() {
        return this.returnOfRate;
    }
}

export default LottoResultCalculator;