/** @class @classdesc -  */
class FtFor extends HTMLElement {
	/** @constructor */
	constructor() {
		super()
	}

	connectedCallback() {
		const count = this.getAttribute('count') || 1
		const through = this.getAttribute('through') || []

		const iterableHtml = this.innerHTML

		const isContent = iterableHtml.replace(/\n|\t/g, '') !== ''

		if (!isContent) {
			throw Error("Not iterable content in tag 'f-for'!")
		}

		for (let i = 0; i < +count; i++) {
			if (i === 0) {
				this.innerHTML = iterableHtml
			} else {
				this.innerHTML += iterableHtml
			}
		}
	}
}

customElements.define('ft-for', FtFor)
