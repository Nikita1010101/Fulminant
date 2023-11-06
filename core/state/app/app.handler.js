import { findProperty } from "./app.utils"

export const appProxyHandler = {
	get(target, key) {
		if (key.includes('.')) {
			const [name, ...properties] = key.split('.')

      const value = target[name]

      return findProperty(value, properties)
		}

		if (target.hasOwnProperty(key)) {
			return target[key]
		}

		return {}
	},

	set(target, key, value) {
		target[key] = value
		return true
	}
}