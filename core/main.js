import { DOMConstructor } from './models/helper/dom-constructor'
import { Router } from './models/router/router.class'
import { VirtualDOM } from './models/virtual-dom/virtual-dom.class'

function showPage() {
	const router = new Router()
	const currentPath = window.location.pathname
	const url = new URL(currentPath, process.env.APP_URL)
	router.render(url.pathname)


	const vdom = new VirtualDOM()
	const domConstructor = new DOMConstructor()

	const temp = domConstructor.createNodeFromTemplate('<main-comp></main-comp>')

	const createdDom = vdom.createVDOM(temp)

	const dat = vdom.mount(createdDom)

	app.appendChild(dat)
}

function findFiles(directory) {
	return directory.keys().map(path => {
		const mainPath = path.slice(2)
		return mainPath
	})
}

const coreContext = require.context('../core', true, /\.js$/)
const srcContext = require.context('../src', true, /\.js$/)

export const coreFiles = findFiles(coreContext)
export const srcFiles = findFiles(srcContext)

window.onload = () => showPage()
