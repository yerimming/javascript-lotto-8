import { COMMON_MESSAGE } from "../constants/message.js";
import Input from "../utils/Input.js";
import Validator from "../utils/validate.js";
import ConsoleView from "../view/ConsoleView.js";

class LottoController {
    async run() {
        const inputPurchaseAmount = new Input(Validator.validatePurchaseAmount.bind(Validator));
        await inputPurchaseAmount.inputValue(COMMON_MESSAGE.INPUT_PRURCHASE);
        const purchaseAmount = inputPurchaseAmount.getValue();
        const lottoCount = inputPurchaseAmount.getLottoCount();

        ConsoleView.printPurchaseCount(lottoCount);
    }
}

export default LottoController;