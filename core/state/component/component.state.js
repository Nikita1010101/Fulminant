import { StateKeys } from '../../types/state.type'
import { State } from '../state.instance'

export class ComponentState extends State {
	constructor() {
		super(StateKeys.COMPONENT)
	}
}
