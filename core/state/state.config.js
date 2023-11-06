import { StateKeys, TypeState } from '../types/state.type'
import { appProxyHandler } from './app/app.handler'
import { componentProxyHandler } from './component/component.handler'
import { eventProxyHandler } from './event/event.handler'
import { modelProxyHandler } from './model/model.handler'
import { pageProxyHandler } from './page/page.handler'
import { queryProxyHandler } from './query/query.handler'
import { styleProxyHandler } from './style/style.handler'

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
	[StateKeys.STYLE]: new Proxy({}, styleProxyHandler)
}
