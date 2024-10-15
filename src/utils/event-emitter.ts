class EventEmitter<T> {
  private events = new Map<T, Set<Function>>()

  private anyEvents = new Set<Function>()

  on(event: T, listener: Function) {
    if (this.events.has(event) === false) {
      this.events.set(event, new Set())
    }
    this.events.get(event)?.add(listener)
  }

  onAny(listener: Function) {
    this.anyEvents.add(listener)
  }

  off(event: T, listener: Function) {
    if (this.events.has(event) === false) {
      return
    }
    this.events.get(event)?.delete(listener)
  }

  offAny(listener: Function) {
    this.anyEvents.delete(listener)
  }

  once(event: T, listener: Function) {
    const onceListener = (...args: any[]) => {
      listener(...args)
      this.off(event, onceListener)
    }
    this.on(event, onceListener)
  }

  emit(event: T, ...args: any[]) {
    if (this.events.has(event) === false) {
      return
    }
    this.events.get(event)?.forEach((listener) => {
      listener(...args)
    })
  }

}

export default EventEmitter