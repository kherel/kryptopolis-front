export const storageKey = 'motivate-yourself'

class LocalStorage {
  constructor() {
    this.storage = this._supportsHtml5Storage() ? localStorage : null
  }

  _supportsHtml5Storage() {
    try {
      return 'localStorage' in window && window['localStorage'] !== null
    } catch (e) {
      return false
    }
  }


  store() {
    return this.storage && this.storage.getItem(`${storageKey}-store`)
  }

  saveStore(store) {
    if (!this.storage) {
      return null
    }
    this.storage.setItem(`${storageKey}-store`, store)
  }
}

export default new LocalStorage()
