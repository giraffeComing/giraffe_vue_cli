/**
 * Created by zhangwei36 on 2017/7/31.
 */
import {apiRoot} from '../api.config'
export function FUND() {
    return {
        "fundList": apiRoot()+'/apife/getfundProductList?type=A',
        "fundDetail": apiRoot()+'/apife/getfundProductDetail?id=202301'
    }
}