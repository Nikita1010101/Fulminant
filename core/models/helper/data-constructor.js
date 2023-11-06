import { AppState } from '../../state/app/app.state'
import {
	RegExpParsedTemplate,
	RegExpPrefixStyle,
	RegExpPrefixTemplate,
	RegExpConditional
} from '../../types/regular-expression.type'

const appState = new AppState()

/** @class */
export class DataConstructor {
	/**@constructor */
	constructor() {}

	/**
	 *
	 * @param { string } data
	 * @param { RegExp } splitRegExp
	 * @param { RegExp } findRegExp
	 * @param { (item: string) => string } handler
	 * @returns { string }
	 */
	#handle(data, splitRegExp, findRegExp, handler) {
		/** @type { string } */
		const wrapper = data.split(splitRegExp)

		/** @type { Iterator } */
		const dataInterator = data.matchAll(findRegExp)

		/** @type { string[][] } */
		const dataArray = Array.from(dataInterator)

		/** @type { string[] } */
		const newData = []

		if (dataArray.length === 0) {
			return data
		}


		for (let i = 0; i < wrapper.length; i++) {
			if (i == wrapper.length - 1) {
				newData.push(wrapper[i])
				break
			}

			const data = handler(dataArray[i])
			newData.push(wrapper[i], data)
		}

		/** @type { string } */
		const localData = newData.join('')

		return localData
	}
	
	/**
	 *
	 * @param { string } htmlSource - HTML markup as string
	 * @param { string } prefix - Prefix for addition to everyone classes
	 * @returns { string }
	 */
	addTemplatePrefix(htmlSource, prefix) {
		/** @type { RegExp } */
		const splitRegExp = RegExpPrefixTemplate.SPLIT

		/** @type { RegExp } */
		const findRegExp = RegExpPrefixTemplate.FIND

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
		const localTemplate = this.#handle(htmlSource, splitRegExp, findRegExp, handler)

		return localTemplate
	}

	/**
	 *
	 * @param { string } scssSource - SCSS murkup as string
	 * @param { string } prefix - Prefix for addition to everyone classes
	 * @returns { string }
	 */
	addStylesPrefix(scssSource, prefix) {
		if (scssSource === undefined) {
			return ''
		}

		/** @type { RegExp } */
		const splitRegExp = RegExpPrefixStyle.SPLIT

		/** @type { RegExp } */
		const findRegExp = RegExpPrefixStyle.FIND

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
		const localStyles = this.#handle(scssSource, splitRegExp, findRegExp, handler)

		return localStyles
	}

	/**
	 * @param { string } template
	 * @param { unknown } modelName
	 */
	createParsedTemplate(template, modelName) {
		const model = appState.getValue(modelName.slice(1))

		/** @type { RegExp } */
		const splitRegExp = RegExpParsedTemplate.SPLIT

		/** @type { RegExp } */
		const findRegExp = RegExpParsedTemplate.FIND

		function handler(item) {
			const key = item[1]
			const value = model[key]
			return value
		}

		/** @type { string } */
		const persedTemplate = this.#handle(template, splitRegExp, findRegExp, handler)

		return persedTemplate
	}

	createConditional(conditional) {
		// const appState = new AppState()
		/** @type { RegExp } */
		const splitRegExp = RegExpConditional.SPLIT

		/** @type { RegExp } */
		const findRegExp = RegExpConditional.FIND

		function handler(item) {
			const scope = item[1]
			const name = item[2]

			const value = appState.getValue(name)
			const updatedValue = `'${value}'`

			return updatedValue
		}

		/** @type { string } */
		const updatedConditional = this.#handle(conditional, splitRegExp, findRegExp, handler)

		return updatedConditional
	}
}
