export const appProxyHandler = {
	get(target, key) {
		return target[key]
	},

	set(target, key, value) {
		target[key] = value
		return true
	}
}

export const componentProxyHandler = {
	get(target, key) {
		return target[key]
	},

	set(target, key, value) {
		target[key] = value
		return true
	}
}

export const eventProxyHandler = {
	get(target, key) {
		return target[key]
	},

	set(target, key, value) {
		target[key] = value
		return true
	}
}

export const pageProxyHandler = {
	get(target, key) {
		return target[key]
	},

	set(target, key, value) {
		target[key] = value
		return true
	}
}

export const queryProxyHandler = {
	get(target, key) {
		return target[key]
	},

	set(target, key, value) {
		target[key] = value
		return true
	}
}

export const modelProxyHandler = {
	get(target, key) {
		return target[key]
	},

	set(target, key, value) {
		target[key] = value
		return true
	}
}
