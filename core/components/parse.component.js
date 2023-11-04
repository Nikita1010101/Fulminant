import { AppState } from '../state/states/app.state'

class FtParse extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		const appState = new AppState()
		const model = this.getAttribute('model')
		const content = this.innerHTML

		const elements = content.matchAll(/{{\s*\$(\w+)\s*}}/g)
		const wrapper = content.split(/{{\s*\$\w+\s*}}/g)

		const items = Array.from(elements).map(element => element[1])

		const newModel = model.slice(1)

		const user = appState.getValue(newModel)

		const values = items.map(item => user[item])

		const updatedContent = []

		for (let i = 0; i < wrapper.length; i++) {
			if (i === wrapper.length - 1) {
				updatedContent.push(wrapper[i])
			} else {
				updatedContent.push(wrapper[i], values[i])
			}
		}

		this.innerHTML = updatedContent.join('')
	}
}

customElements.define('ft-parse', FtParse)
