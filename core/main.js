import { Router } from './models/router/router.class'

function showPage() {
	const router = new Router()
	const currentPath = window.location.pathname
	const url = new URL(currentPath, process.env.APP_URL)
	router.render(url.pathname)
}

function findFiles(directory) {
	return directory.keys().map(path => {
		const mainPath = path.slice(2)
		return mainPath
	})
}

const coreContext = require.context('../core', true, /\.js$/)
const srcContext = require.context('../src', true, /\.js$/)

export const coreFiles = findFiles(coreContext)
export const srcFiles = findFiles(srcContext)

window.onload = () => showPage()
