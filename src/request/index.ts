import NetworkRequest from '@/utils/network-request.ts'

export const NETWORK_REQUEST = new NetworkRequest({
  baseURL: window.PROCESS_ENV_CONFIG.BASE_API_URL
})