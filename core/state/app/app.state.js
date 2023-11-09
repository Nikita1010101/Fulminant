import { StateKeys } from '../../types/state.type'
import { State } from '../state.instance'

export class AppState extends State {
	constructor() {
		super(StateKeys.APP)
	}
}
