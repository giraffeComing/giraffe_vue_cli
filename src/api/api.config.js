/**
 * Created by zhangwei36 on 2017/7/31.
 */
export function APIRoot() {

    let hostname = window.location.hostname,
    // 请求mock数据的根节点配置
    // API_ROOT = './mock';
    //默认环境
    API_ROOT = 'http://172.16.59.143:8089';
    switch (hostname)
    {
        case 'sina.jr.com':
            //正式环境
            API_ROOT = 'http://172.16.59.143:8089';
            break;
        case 'test.sina.jr.com':
            //测试环境
            API_ROOT = 'http://172.xx.xx.xxx:8089';
            break;
        case 'release.sina.jr.com':
            //预发布环境
            API_ROOT = 'http://172.xx.xx.xxx:8089';
            break;
    }

    return API_ROOT;
}
