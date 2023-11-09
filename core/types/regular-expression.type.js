/**
 * @typedef { Object } TypeRegExp
 * @property { RegExp } SPLIT
 * @property { RegExp } FIND
 */

/** @enum @type { TypeRegExp } */
const RegExpParsedTemplate = {
	SPLIT: /{{\s*\$\w+\s*}}/g,
	FIND: /{{\s*\$(\w+)\s*}}/g
}

/** @enum @type { TypeRegExp } */
const RegExpPrefixTemplate = {
	SPLIT: /(?:id|class)=".+?"/g,
	FIND: /(id|class)="(.+?)"/g
}

/** @enum @type { TypeRegExp } */
const RegExpPrefixStyle = {
	SPLIT: /[\w\.#]\w+.*{/g,
	FIND: /([\w\.#]\w+.*){/g
}

/** @enum @type { TypeRegExp } */
const RegExpConditional = {
	SPLIT: /[@#](?:\w+\.)+\w+\(?\)?/g,
	FIND: /([@#])(\w+(?:.\w+)+\(?\)?)/g
}

export {
	RegExpParsedTemplate,
	RegExpPrefixTemplate,
	RegExpPrefixStyle,
	RegExpConditional
}
