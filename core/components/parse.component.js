import { DataConstructor } from '../models/helper/data-constructor'

const dataConstructor = new DataConstructor()

/** @class @classdesc -  */
class FtParse extends HTMLElement {
	/** @constructor */
	constructor() {
		super()
	}

	connectedCallback() {
		const model = this.getAttribute('model')
		const content = this.innerHTML

		const parsedTemplate = dataConstructor.createParsedTemplate(content, model)

		this.innerHTML = parsedTemplate
	}
}

customElements.define('ft-parse', FtParse)
