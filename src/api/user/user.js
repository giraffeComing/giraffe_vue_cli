/**
 * Created by zhangwei36 on 2017/7/31.
 */
import {apiRoot} from '../api.config'
export function USER() {
    return {
        "userStepOne": apiRoot()+'/apife/fundOderPay?fundCode=123089&amount=343.09',
        "userStepTwo": apiRoot()+'/apife/fundOderPayStep2?orderNum=20323728374104064&password=1&tradeacco=1'
    }
}