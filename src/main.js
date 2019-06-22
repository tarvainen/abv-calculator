import { mount } from 'redom'
import Form from './components/Form'
import './styles/app.css'

const form = new Form()

document.addEventListener(
  'DOMContentLoaded',
  () => mount(document.body, form),
  false
)
