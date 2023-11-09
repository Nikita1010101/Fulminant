import { PageState } from '../../state/page/page.state'
import { TypeStatePage } from '../../types/state.type'
import { TypePageParams, TypePrivatePageParams } from '../../types/router.type'
import { StyleState } from '../../state/style/style.state'

/** @satisfies { TypeStatePage } */
const state = new PageState()

/**
 * @class
 * @classdesc - App router
 */
export class Router {
	/**
	 * @constructor
	 */
	constructor() {}

	/**
	 *
	 * @param { string | string[] } path
	 */
	render(path) {
		const style = new StyleState()
		const styles = document.createElement('style')
		styles.textContent = style.getValue('styles').join('\n')
		document.body.appendChild(styles)
		const app = document.getElementById('app')
		const page = state.getValue(path)

		console.log(page.component, page.component.innerHTML)

		if (!page) {
			app.innerHTML += '<h1>Page is no found!!!</h1>'
			return
		}

		if (page?.middleware) {
			const isAccess = page.middleware()

			if (!isAccess) {
				app.innerHTML += '<h1>No access!!!</h1>'
				return
			}
		}

		app.innerHTML = page.component
	}

	/**
	 *
	 * @param { TypePageParams } routePararms
	 */
	addPage({ path, component }) {
		if (typeof path !== 'string') {
			path = `/${path.join('/')}`
		}

		const page = {
			component
		}

		state.setValue(path, page)
	}

	/**
	 *
	 * @param { TypePrivatePageParams } routePararms
	 */
	addPrivatePage({ path, component, middleware }) {
		if (typeof path !== 'string') {
			path = `/${path.join('/')}`
		}

		const page = {
			component,
			middleware
		}

		state.setValue(path, page)
	}

	/**
	 *
	 * @param { string | string[] } new_path
	 */
	replaceUrl(new_path) {
		window.history.pushState(new_path, new_path, new_path)
		const url = window.location.pathname
		this.render(url)
	}
}
