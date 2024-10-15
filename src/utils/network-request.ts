import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'


interface NetworkRequestConfig {
  baseURL: string
}


class NetworkRequest {
  private axiosInstance: AxiosInstance

  constructor(config: NetworkRequestConfig) {
    this.axiosInstance = this.init(config)
  }

  private init(config: NetworkRequestConfig): AxiosInstance {
    const axiosInstance = axios.create({
      timeout: 1000 * 30,
      baseURL: config.baseURL,
      headers: {

      }
    })

    return axiosInstance
  }

  public get<R>(url: string, params?: any, config?: AxiosRequestConfig): Promise<R> {
    return new Promise((resolve, reject) => {
      this.axiosInstance.get(url, { params, ...config }).then((response) => {
        resolve(response.data)
      }).catch((error) => {
        reject(error)
      })
    })
  }

  public post<R>(url: string, params?: any, config?: AxiosRequestConfig): Promise<R> {
    return new Promise((resolve, reject) => {
      this.axiosInstance.post(url, params, config).then((response) => {
        resolve(response.data)
      }).catch((error) => {
        reject(error)
      })
    })
  }

}


export default NetworkRequest