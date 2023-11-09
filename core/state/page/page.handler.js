export const pageProxyHandler = {
	get(target, key) {
		return target[key]
	},

	set(target, key, value) {
		target[key] = value
		return true
	}
}