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
    }

    generateLottoNumbers() {
        return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
    }
}

export default LottoController;