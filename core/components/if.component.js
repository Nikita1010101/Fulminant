import { DataConstructor } from "../models/helper/data-constructor"

const dataConstructor = new DataConstructor()

/** @class @classdesc - */
class FtIf extends HTMLElement {
	/** @constructor */
	constructor() {
		super()
	}

	connectedCallback() {
		const conditional = this.getAttribute('conditional')
		const updatedConditional = dataConstructor.createConditional(conditional)

		try {
			const conditionalResult = eval(updatedConditional)
			const content = this.innerHTML
			
			this.innerHTML = conditionalResult ? content : ''
		} catch (error) {
			this.innerHTML = ''
			throw error
		}
	}
}

customElements.define('ft-if', FtIf)
