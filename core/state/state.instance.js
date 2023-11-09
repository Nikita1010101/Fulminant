import { state } from './state.config'
import { TypeStateKeys, TypeStateValues } from '../types/state.type'

/** @class @classdesc - Instance state */
export class State {
	/** @private @satisfies { TypeStateValues } */
	#stateType

	/** @constructor @param { TypeStateKeys } stateType */
	constructor(stateType) {
		this.#stateType = stateType
	}

	/**
	 * @param { string } key
	 */
	getValue(key) {
		return state[this.#stateType][key]
	}

	/**
	 * @param { string } key
	 * @param { unknown } value
	 */
	setValue(key, value) {
		state[this.#stateType][key] = value
	}

	/**
	 * @param { string } key 
	 * @param { unknown } value 
	 */
	addValue(key, value) {
		state[this.#stateType][key].push(value)
	}
}
