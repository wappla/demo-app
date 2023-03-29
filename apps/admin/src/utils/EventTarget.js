// Remove this polyfill when the issue below is resolved
// https://github.com/jsdom/jsdom/issues/2156
export default class EventTargetPolyfill {
    constructor() {
        this.events = {}
    }

    addEventListener(type, listener) {
        if (typeof this.events[type] === 'undefined') {
            this.events[type] = []
        }
        this.events[type].push(listener)
    }

    removeEventListener(type, listener) {
        if (typeof this.events[type] !== 'undefined') {
            const index = this.events[type].indexOf(listener)
            if (index > -1) {
                this.events[type].splice(index, 1)
            }
        }
    }

    dispatchEvent(event) {
        const { type } = event
        if (typeof this.events[type] !== 'undefined') {
            this.events[type].forEach((listener) => {
                listener(event)
            })
        }
    }
}
