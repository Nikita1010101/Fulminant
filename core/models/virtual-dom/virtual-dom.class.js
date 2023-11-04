export class VirtualDOM {
	constructor() {
		this.markup = {
			tag: 'div',
			props: [
				{
					name: 'id',
					value: 'main'
				},
				{
					name: 'class',
					value: 'main'
				}
			],
			children: [
				{
					tag: 'h1',
					props: [
						{
							name: 'click',
							value: '@show()'
						}
					],
					children: 'Hello World!!!'
				},
				{
					tag: 'p',
					props: [],
					children: []
				},
				{
					tag: 'my-el',
					props: [],
					children: []
				}
			]
		}
	}

	

	createVDOM(node) {
		const element = {
			tag: '',
			props: [],
			children: []
		}

		element.tag = node.tagName

		if (node.attributes.length !== 0) {
			for (let i = 0; i < node.attributes.length; i++) {
				const attribute = node.attributes[i]
				element.props.push({ name: attribute.name, value: attribute.value })
			}
		}

		if (node.children.length !== 0) {
			for (let i = 0; i < node.children.length; i++) {
				const childNode = node.children[i]
				const children = this.createVDOM(childNode)
				element.children.push(children)
			}
		}
		else {
			element.children = node.textContent
		}

		return element
	}

	mount(markup) {
		function print() {
			alert('event is working)))!!!')
		}

		const element = document.createElement(markup.tag)

		for (let i = 0; i < markup.props.length; i++) {
			const isEvent = /[@#]\w+\(\)/.test(markup.props[i].value)

			if (isEvent) {
				element.addEventListener(markup.props[i].name, print)
				continue
			}

			element.setAttribute(markup.props[i].name, markup.props[i].value)
		}

		if (typeof markup.children === 'string') {
			element.textContent = markup.children
		} else {
			for (let i = 0; i < markup.children.length; i++) {
				const child = this.mount(markup.children[i])
				element.appendChild(child)
			}
		}

		return element
	}
}
