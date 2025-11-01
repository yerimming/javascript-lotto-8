import { DEFAULT_EXTENSIONS } from "@babel/core"
import { PureComponent } from "react";

export const COMMON_MESSAGE = Object.freeze({
    INPUT_PRURCHASE: "구입금액을 입력해 주세요.\n",
    INPUT_WINNING_NUM: "\n당첨 번호를 입력해 주세요.\n",
    INPUT_BONUS_NUM: "\n보너스 번호를 입력해 주세요.\n",
    WINNING_STATS: "\n당첨 통계\n---",
})

const DEFAULT_ERROR_MESSAGE = "[ERROR]";
export const ERROR_MESSAGE = Object.freeze({
    PURCHASE_AMOUNT_NOT_DIVISIBLE_THOUSAND: `${DEFAULT_ERROR_MESSAGE} 구입 금액이 1,000원 단위가 아닙니다. 다시 입력해주세요.`,
    NOT_NUMBER: `${DEFAULT_ERROR_MESSAGE} 입력한 값이 숫자가 아닙니다.`,
    NOT_POSITIVE: `${DEFAULT_ERROR_MESSAGE} 입력한 값이 양수가 아닙니다.`,
    NOT_RANGE: `${DEFAULT_ERROR_MESSAGE} 번호는 1 이상 45 이하 사이의 숫자여야 합니다.`,
    NOT_SIX_ELEMENTS: `${DEFAULT_ERROR_MESSAGE} 로또 번호는 6개여야 합니다.`,
    DUPLICATION: `${DEFAULT_ERROR_MESSAGE} 로또 번호에 중복된 숫자가 있습니다.`,
    BONUS_IN_WINNING_NUM: `${DEFAULT_ERROR_MESSAGE} 보너스 번호는 당첨 번호와 중복되지 않아야 합니다.`
})