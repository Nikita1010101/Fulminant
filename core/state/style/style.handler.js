export const styleProxyHandler = {
	get(target, key) {
		return target[key]
	},

	set(target, key, value) {
		if (target[key] !== undefined) {
			target[key].push(value)
			return true
		}

		target[key] = [value]
		return true
	}
}