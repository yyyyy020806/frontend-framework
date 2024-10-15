/**
 * 用户信息
 */
export interface UserInfo {
  id: number
  token: string
}

/**
 * 响应
 */
export interface Response<D> {
  code: number
  data: D
  message: string
}

/**
 * 字典
 */
export interface Dictionary {
  label: string
  value: string
  sort: number
}