import { ComponentState } from '../../state/component/component.state'
import { StyleState } from '../../state/style/style.state'
import { TypeStateComponent, TypeStateStyle } from '../../types/state.type'
import { TypeCreateComponent } from '../../types/component.type'
import { DataConstructor } from '../helper/data-constructor'

/** @satisfies { TypeStateComponent } */
const componentState = new ComponentState()
/** @satisfies { TypeStateStyle } */
const styleState = new StyleState()
const dataConstructor = new DataConstructor()

/** @class @classdesc - Class for creating the component */
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
	define({ name, template, styles, data, props, page, memoization }) {
		const localTemplate = dataConstructor.addTemplatePrefix(template, name)
		const localStyles = dataConstructor.addStylesPrefix(styles, name)

		componentState.setValue(name, { template: localTemplate, data, page })
		styleState.setValue('styles', localStyles)

		class Element extends HTMLElement {
			constructor() {
				super()
			}

			connectedCallback() {
				this.innerHTML = localTemplate

				if (page) {
				}
			}

			static get observedAttributes() {
				return props
			}
		}

		customElements.define(name, Element)
	}
}
