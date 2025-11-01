import { Console } from "@woowacourse/mission-utils";

class ConsoleView {
    static printPurchaseCount(lottoCount) {
        Console.print(`\n${lottoCount}개를 구매했습니다.`);
    }

    static printLottoNumbers(lottos) {
        lottos.forEach((lotto) => {
            Console.print(lotto.getNumbers());
        });
    }
}

export default ConsoleView;