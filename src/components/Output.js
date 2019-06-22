import Input from './Input'

class Output extends Input {
  constructor (title) {
    super('number', '', title, '0.00')

    this.input.disabled = true
  }

  update (i) {
    this.input.value = i
  }
}

export default Output
