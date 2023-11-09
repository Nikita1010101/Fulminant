import { ComponentState } from '../../state/component/component.state'

const domParser = new DOMParser()
const componentState = new ComponentState()

/** @class */
export class DOMConstructor {
	/** @constructor */
	constructor() {}

	/**
	 * @param { string } template
	 * @returns { string }
	 */
	createNodeFromTemplate(template) {
		const node = domParser.parseFromString(template, 'text/xml').childNodes[0]
		return node
	}

	/**
	 *
	 * @param { Node } component
	 * @returns { Node | undefined }
	 */
	createNode(component) {
    const componentPrefix = component.split('-')[0]

		if (componentPrefix !== 'ft' && /\w+-\w+/.test(component)) {
			const template = componentState.getValue(component).template
			const node = this.createNodeFromTemplate(template)
			node.id = component
			console.log(node.attributes.id)
			return node
		}

		return
	}

	/**
	 *
	 * @param { string } componentName
	 * @param { string } eventFunction
	 */
	getEvent(componentName, eventFunction) {
		const componentEventsData = componentState.getValue(componentName)?.data
		const eventFunctionName = eventFunction.slice(0, eventFunction.length - 2)
		const event = componentEventsData[eventFunctionName].bind(componentEventsData)
    return event
	}
}
