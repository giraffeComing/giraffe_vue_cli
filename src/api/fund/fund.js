/**
 * Created by zhangwei36 on 2017/7/31.
 */
import {APIRoot} from '../api.config'
export function FUND() {
    return {
        "fundList": APIRoot()+'/apife/getfundProductList?type=A',
        "fundDetail": APIRoot()+'/apife/getfundProductDetail?id=202301'
    }
}