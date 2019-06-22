import { el, text } from 'redom'
import Input from './Input'
import Output from './Output'

class Form {
  constructor () {
    this.el = el('.form',
      text('('),
      this.og = new Input('number', 'og', 'Original Gravity', undefined, true),
      text(' - '),
      this.fg = new Input('number', 'fg', 'Final Gravity', 1.015),
      text(') * 131.25 = '),
      this.output = new Output('ABV'),
      text('%')
    )

    this.og.onChange(() => this.recalculate())
    this.fg.onChange(() => this.recalculate())
  }

  recalculate () {
    const og = this.og.value
    const fg = this.fg.value

    const abv = (og - fg) * 131.25
    this.output.update(abv.toFixed(2))
  }
}

export default Form
