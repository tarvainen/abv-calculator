import { el } from 'redom'

class Input {
  constructor (type, placeholder, label, value, autofocus = false) {
    this.el = el('',
      this.label = el('label', label),
      this.input = el('input', { placeholder, type, value, autofocus })
    )
  }

  get value () {
    return this.input.value
  }

  onChange (cb) {
    this.input.oninput = () => cb(this.input.value)
  }
}

export default Input
