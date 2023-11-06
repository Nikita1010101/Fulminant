import { StateKeys } from '../../types/state.type'
import { State } from '../state.instance'

export class PageState extends State {
	constructor() {
		super(StateKeys.PAGE)
	}
}
