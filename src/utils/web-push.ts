import EventEmitter from './event-emitter'

interface WebPushConfig {
  url: string
}


class WebPush<T> {
  private socketEvents = new EventEmitter<T>()

  constructor(config: WebPushConfig) {
    this.init(config)
  }

  private init(config: WebPushConfig): WebSocket {
    const socketInstance = new WebSocket(config.url)

    socketInstance.addEventListener('open', this.handleSocketOpen)
    socketInstance.addEventListener('close', this.handleSocketClose)
    socketInstance.addEventListener('error', this.handleSocketError)
    socketInstance.addEventListener('message', this.handleSocketMessage)

    this.heartbeat()
    this.reconnect()

    return socketInstance
  }

  private heartbeat() {

  }

  private reconnect() {

  }

  private handleSocketOpen(ev: WebSocketEventMap['open']) {

  }

  private handleSocketClose(ev: WebSocketEventMap['close']) {

  }

  private handleSocketError(ev: WebSocketEventMap['error']) {

  }

  private handleSocketMessage(ev: WebSocketEventMap['error']) {

  }

  public on(event: T, listener: Function) {
    this.socketEvents.on(event, listener)
  }

  public off(event: T, listener: Function) {
    this.socketEvents.off(event, listener)
  }

  public once(event: T, listener: Function) {
    this.socketEvents.once(event, listener)
  }

  public close() {

  }

}

export default WebPush