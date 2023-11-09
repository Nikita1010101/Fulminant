import '../src/index.html'
import '../src/styles.global.css'
import { coreFiles, srcFiles } from './main'

for (let i = 0; i < coreFiles.length; i++) {
	if (coreFiles[i] === 'index.js' || coreFiles[i] === 'main.js') continue
	import(/* webpackInclude: /\.js$/ */ `../core/${coreFiles[i]}`)
}

for (let i = 0; i < srcFiles.length; i++) {
	import(/* webpackInclude: /\.js$/ */ `../src/${srcFiles[i]}`)
}
