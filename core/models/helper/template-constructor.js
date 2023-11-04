export class DataConstructor {
  /**@constructor */
  constructor() {}

  /**
   * 
   * @param { string } data 
   * @param { RegExp } splitRegExp 
   * @param { RegExp } findRegExp 
   * @param { () => string } handler 
   * @returns { string }
   */
  static handle(data, splitRegExp, findRegExp, handler) {
    /** @type { string } */
    const wrapper = data.split(splitRegExp)

		/** @type { Iterator } */
		const dataInterator = data.matchAll(findRegExp)

		/** @type { string[][] } */
		const dataArray = Array.from(dataInterator)

		/** @type { string[] } */
		const newData = []

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
}