import { StateKeys } from '../../types/state.type'
import { State } from '../state.instance'

export class QueryState extends State {
	constructor() {
		super(StateKeys.QUERY)
	}
}
