import { StateKeys } from '../../types/state.type'
import { State } from '../state.instance'

export class EventState extends State {
	constructor() {
		super(StateKeys.EVENT)
	}
}
