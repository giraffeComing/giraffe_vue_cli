/**
 * Created by zhangwei36 on 2017/7/31.
 */
// export function apiBase() {
//     let hostname = window.location.hostname,
//         API_BASE_URL = 'http://test2api.dunizb.com';//默认环境
//     if(hostname === 'crm.dunizb.cn') {  //正式环境
//         API_BASE_URL = 'http://api.dunizb.cn';
//     } else if(hostname === 'admin.dunizb.com') {//公网测试环境
//         API_BASE_URL = 'http://testapi.dunizb.com';
//     } else if(hostname === 'manager.dunizb.com') {//内网测试环境
//         API_BASE_URL = 'http://test2api.dunizb.com';
//     }
//     return API_BASE_URL;
// }

export function apiRoot() {
    window.API_ROOT = 'http://172.16.59.143:8089';
    return API_ROOT;
}

// if (process.env.NODE_ENV == 'production') {
//     window.API_ROOT = 'http://172.16.59.143:8089';
//     window.MENU_URL = [window.API_ROOT, '/personal/menu'].join('');
//     window.LOGIN_URL = [window.API_ROOT, '/oauth'].join('');
// } else {
//     window.API_ROOT = './mock';
//     window.MENU_URL = './mock/menu';
//     window.LOGIN_URL = './mock/login'
// }