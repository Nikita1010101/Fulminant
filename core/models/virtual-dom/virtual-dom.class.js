import { DOMConstructor } from '../helper/dom-constructor'

const domConstructor = new DOMConstructor()

/** @class @classdesc - Virtual Document Object Model */
export class VirtualDOM {/** @constructor */
	constructor() {}

	/**
	 *
	 * @param { Node } component
	 * @returns { Object } #########
	 */
	createVDOM(component) {
		const element = {
			tag: '',
			props: [],
			children: []
		}

		const node = domConstructor.createNode(component.tagName) || component

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
		} else {
			element.children = node.textContent
		}

		return element
	}

	mount(markup) {
		// for (let i = 0; i < markup.props.length; i++) {
		// 	if (
		// 		markup.props[i].name == 'id' &&
		// 		markup.tag == 'div' &&
		// 		/\w+-\w+/.test(markup.props[i].value)
		// 	) {
		// 		console.log(this.#components, 'addition')
		// 		this.#components.push(markup.props[i].value)
		// 	}
		// }

		// console.log(this.#components)

		const element = document.createElement(markup.tag)

		for (let i = 0; i < markup.props.length; i++) {
			const isEvent = /\w+\(\)/.test(markup.props[i].value)

			if (isEvent) {
				// console.log('123',this.#components)
				// const componentName = this.#components[this.#components.length - 1]
				// console.log('1', componentName)
				const event = domConstructor.getEvent(componentName, markup.props[i].value)
				element.addEventListener(markup.props[i].name, event)
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

		// this.#components.pop()

		return element
	}
}
