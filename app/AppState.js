import { Identity } from './Auth/Identity.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {
  /** @type {Identity} */
  identity = null

  /**@type {import('./models/Gift.js').Gift[]} */
  gifts = []

  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

export const AppState = createObservableProxy(new ObservableAppState())