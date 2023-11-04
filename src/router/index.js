import { Router } from '../../core/models/router/router.class'
import { VirtualDOM } from '../../core/models/virtual-dom/virtual-dom.class'

const app = document.getElementById('app')

const router = new Router()

// window.addEventListener('hashchange', () => alert('change url history'))

// window.onload = () => {
//   const btn = document.getElementById('btn')
//   btn.onclick = () => {
//     router.replacePath('/hello')
//     changeUrl()
//   }
// }

const vdom = new VirtualDOM()

const el = vdom.mount(vdom.markup)

// app.append(el)

const markup1 = `
  <div id="temp">
    <div id="el" class="el">
      <p>hello</p>
    </div>
    <div id="el" class="el">
      <h3>world</h3>
    </div>
  </div>
`

const domParser = new DOMParser()

// eslint-disable-next-line semi
const node = domParser.parseFromString(markup1, 'text/xml').childNodes[0]

const elem = vdom.createVDOM(node)

// app.append(vdom.mount(elem))

