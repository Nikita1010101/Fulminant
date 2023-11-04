import { StateKeys, TypeState } from '../types/state.type'
import {
	appProxyHandler,
	componentProxyHandler,
	eventProxyHandler,
	modelProxyHandler,
	pageProxyHandler,
	queryProxyHandler
} from './state.handlers'

/**
 * @satisfies { TypeState }
 */
export const state = {
	[StateKeys.APP]: new Proxy({}, appProxyHandler),
	[StateKeys.COMPONENT]: new Proxy({}, componentProxyHandler),
	[StateKeys.PAGE]: new Proxy({}, pageProxyHandler),
	[StateKeys.EVENT]: new Proxy({}, eventProxyHandler),
	[StateKeys.QUERY]: new Proxy({}, queryProxyHandler),
	[StateKeys.MODEL]: new Proxy({}, modelProxyHandler),
	[StateKeys.STYLE]: new Proxy({}, modelProxyHandler)
}
