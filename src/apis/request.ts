import Taro from '@tarojs/taro';
import { API_URL, HTTP_STATUS } from 'constant';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'HEAD' | 'OPTIONS' | 'CONNECT';
type ContentType = 'application/json' | 'application/x-www-form-urlencoded';
type Params = Omit<Taro.request.Option, 'url' | 'method' | 'success'>;

function request(
  url: string,
  method: RequestMethod = 'GET',
  params: Params,
  contentType: ContentType = 'application/json',
) {
  return Taro.request({
    url: url.indexOf('http') !== -1 ? url : API_URL + url,
    method,
    header: {
      'content-type': contentType,
    },
    mode: 'cors',
    credentials: 'include',
    ...params,
    success(response) {
      console.log(JSON.stringify(response));
      if (response.statusCode === HTTP_STATUS.NOT_FOUND) {
        return Promise.reject(new Error('请求资源不存在'));
      } else if (response.statusCode === HTTP_STATUS.BAD_GATEWAY) {
        return Promise.reject(new Error('服务端出现了问题'));
      } else if (response.statusCode === HTTP_STATUS.FORBIDDEN) {
        return Promise.reject(new Error('没有权限访问'));
      } else if (response.statusCode === HTTP_STATUS.AUTHENTICATE) {
        // 清除缓存
        // Taro.clearStorage()
        // 跳到登录页面
      } else if (response.statusCode === HTTP_STATUS.SUCCESS) {
        return response.data;
      }
    },
    fail(res) {
      return Promise.reject(new Error(res.errMsg));
    },
  });
}

/**
 * GET 请求
 * @param url
 * @param data
 * @param params
 * @returns
 */
export function get(url: string, data?: Record<string, any>, params?: Omit<Params, 'data'>) {
  return request(url, 'GET', { ...params, data });
}

/**
 * POST 请求
 * @param url
 * @param data
 * @param contentType
 * @param params
 * @returns
 */
export function post(
  url: string,
  data?: Record<string, any>,
  contentType: ContentType = 'application/json',
  params?: Omit<Params, 'data'>,
) {
  return request(url, 'POST', { ...params, data }, contentType);
}

/**
 * PUT 请求
 * @param url
 * @param data
 * @param params
 * @returns
 */
export function put(url: string, data?: Record<string, any>, params?: Omit<Params, 'data'>) {
  return request(url, 'PUT', { ...params, data });
}

/**
 * DELETE 请求
 * @param url
 * @param data
 * @param params
 * @returns
 */
export function del(url: string, data?: Record<string, any>, params?: Omit<Params, 'data'>) {
  return request(url, 'DELETE', { ...params, data });
}
