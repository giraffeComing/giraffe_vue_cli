/**
 * Created by zhangwei36 on 2017/7/31.
 */
import {APIRoot} from '../api.config'
export function USER() {
    return {
        "userStepOne": APIRoot()+'/apife/fundOderPay?fundCode=123089&amount=343.09',
        "userStepTwo": APIRoot()+'/apife/fundOderPayStep2?orderNum=20323728374104064&password=1&tradeacco=1'
    }
}