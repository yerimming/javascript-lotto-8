import { MissionUtils } from "@woowacourse/mission-utils";
import { COMMON_MESSAGE } from "../constants/message.js";
import Input from "../utils/Input.js";
import Validator from "../utils/validate.js";
import ConsoleView from "../view/ConsoleView.js";
import Lotto from "../model/Lotto.js";

class LottoController {
    async run() {
        const inputPurchaseAmount = new Input(Validator.validatePurchaseAmount.bind(Validator));
        await inputPurchaseAmount.inputValue(COMMON_MESSAGE.INPUT_PRURCHASE);
        const purchaseAmount = inputPurchaseAmount.getValue();
        const lottoCount = inputPurchaseAmount.getLottoCount();

        ConsoleView.printPurchaseCount(lottoCount);

        const lottos = [];
        for(let i = 0; i < lottoCount; i++) {
            const numbers = this.generateLottoNumbers();
            const lotto = new Lotto(numbers);
            lottos.push(lotto);
        }
        ConsoleView.printLottoNumbers(lottos);

        const inputWinningNums = new Input(Validator.validateWinningNum.bind(Validator));
        await inputWinningNums.inputValue(COMMON_MESSAGE.INPUT_WINNING_NUM);
        inputWinningNums.changeArray();
        const winningNums = inputWinningNums.getValue();

        const inputBonusNum = new Input(
            (bonusNum) => Validator.validateBonusNum(bonusNum, winningNums)
        );
        await inputBonusNum.inputValue(COMMON_MESSAGE.INPUT_BONUS_NUM);
        const bonusNum = Number(inputBonusNum.getValue());
    }

    generateLottoNumbers() {
        return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
    }
}

export default LottoController;