class FtIf extends HTMLElement {
	constructor() {
		super()
	}

	connectedCallback() {
		const conditional = this.getAttribute('conditional')
		try {
			const conditionalResult = eval(conditional)

			const content = this.innerHTML

			this.innerHTML = conditionalResult ? content : ''
		} catch (error) {
			this.innerHTML = ''
			console.log(error)
		}
	}
}

customElements.define('ft-if', FtIf)
