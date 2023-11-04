import { DataConstructor } from './template-constructor'

/**
 * @class
 * @classdesc - Class for component local state
 */

export class LocalState {
	/**
	 * @constructor
	 */
	constructor() {}

	/**
	 *
	 * @param { string } htmlSource - HTML markup as string
	 * @param { string } prefix - Prefix for addition to everyone classes
	 * @returns { string }
	 */
	static addTemplatePrefix(htmlSource, prefix) {
		/** @type { RegExp } */
		const splitRegExp = /(?:id|class)=".+?"/g

		/** @type { RegExp } */
		const findRegExp = /(id|class)="(.+?)"/g

		/**
		 * @param { string } item
		 * @returns { string }
		 */
		const handler = item => {
			const selectorType = item[1]
			const selectorValues = item[2]

			const data = selectorValues.split(' ').filter(item => item !== '')
			const formatedData = data.map(item => `${prefix}_${item}`).join(' ')

			return `${selectorType}="${formatedData}"`
		}

		/** @type { string } */
		const localTemplate = DataConstructor.handle(htmlSource, splitRegExp, findRegExp, handler)

		return localTemplate
	}

	/**
	 *
	 * @param { string } scssSource - SCSS murkup as string
	 * @param { string } prefix - Prefix for addition to everyone classes
	 * @returns { string }
	 */
	static addStylesPrefix(scssSource, prefix) {
		if (scssSource === undefined) {
			return ''
		}

		/** @type { RegExp } */
		const splitRegExp = /[\w\.#]\w+.*{/g

		/** @type { RegExp } */
		const findRegExp = /([\w\.#]\w+.*){/g

		/**
		 * @param { string } item
		 * @returns { string }
		 */
		const handler = item => {
			const values = item[1].split(' ')
			const updatedSelectors = []

			for (let i = 0; i < values.length; i++) {
				const value = values[i]

				const selectorType = value[0]
				const selectorName = value.slice(1)

				if (selectorType === '#' || selectorType === '.') {
					const updatedSelector = `${selectorType}${prefix}_${selectorName}`
					updatedSelectors.push(updatedSelector)
					continue
				}

				updatedSelectors.push(value)
			}

			return updatedSelectors.join(' ') + '{'
		}

		/** @type { string } */
		const localStyles = DataConstructor.handle(scssSource, splitRegExp, findRegExp, handler)

		return localStyles
	}

	/**
	 * @param { string } name
	 * @param { string } template  
	 */
	findEvents(name, template) {
		
	}
}
