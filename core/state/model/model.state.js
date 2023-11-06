import { StateKeys } from '../../types/state.type'
import { State } from '../state.instance'

export class ModelState extends State {
	constructor() {
		super(StateKeys.MODEL)
	}
}
