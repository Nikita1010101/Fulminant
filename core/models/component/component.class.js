import { ComponentState } from '../../state/states/component.state'
import { StyleState } from '../../state/states/style.state'
import { TypeCreateComponent } from '../../types/component.type'
import { LocalState } from '../helper/local-state.class'

/**
 * @class
 * @classdesc Class for creating the component
 */
export class Component {
	/**
	 * @constructor
	 */
	constructor() {}

	/**
	 * @description Function for define the component
	 * @param { TypeCreateComponent } componentData
	 * @returns { void }
	 */
	define({ name, template, styles, page, props }) {
		const style = new StyleState()

		const localTemplate = LocalState.addTemplatePrefix(template, name)
		const localStyles = LocalState.addStylesPrefix(styles, name)
		// LocalState.findEvents(name, template)

		style.getValue('styles')
			? style.addValue('styles', localStyles)
			: style.setValue('styles', [localStyles])

		class Element extends HTMLElement {
			constructor() {
				super()
			}

			connectedCallback() {
				this.innerHTML = localTemplate

				if (page) {
					const componentState = new ComponentState()
				}
			}

			static get observedAttributes() {
				return props
			}
		}

		customElements.define(name, Element)
	}

	/**
	 * @param { () => void } scriptsFn - Function for scripts of component
	 */
	scripts(scriptsFn) {}
}
