import { Console } from "@woowacourse/mission-utils";
import { COMMON_MESSAGE } from "../constants/message.js";

class ConsoleView {
    static printPurchaseCount(lottoCount) {
        Console.print(`\n${lottoCount}개를 구매했습니다.`);
    }

    static printLottoNumbers(lottos) {
        lottos.forEach((lotto) => {
            Console.print(lotto.getNumbers());
        });
    }

    static printWinningStatsHeader() {
        Console.print(COMMON_MESSAGE.WINNING_STATS);
    }

    static printLottoResult(resultData) {
        const { results } = resultData;

        const rankOrder = [5, 4, 3, 2, 1];

        const descriptions = {
            5: "3개 일치 (5,000원)",
            4: "4개 일치 (50,000원)",
            3: "5개 일치 (1,500,000원)",
            2: "5개 일치, 보너스 볼 일치 (30,000,000원)",
            1: "6개 일치 (2,000,000,000원)",
        }

        rankOrder.forEach(rank => {
            Console.print(`${descriptions[rank]} - ${results[rank]}개`);
        });
    }

    static printReturnOfRate(returnOfRate) {
        Console.print(`총 수익률은 ${returnOfRate}%입니다.`);
    }
}

export default ConsoleView;