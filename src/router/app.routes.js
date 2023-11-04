import { Router } from '../../core/models/router/router.class'

const router = new Router()

const page = '<main-comp></main-comp>'
const page1 = '<h1>This is one two three page!!!</h1>'
const page2 = '<h1>This is page page!!!</h1>'

router.addPage({ path: '/', component: page })
router.addPage({ path: ['one', 'two', 'three'], component: page1 })
router.addPage({ path: '/page', component: page2 })

router.addPrivatePage({
	path: '/private',
	component: '<h1>Private information</h1>',
	middleware: () => {
		return true
	}
})
