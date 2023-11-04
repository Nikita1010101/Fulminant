/** @typedef { Object } TypeStateApp    	 */

/** @typedef { Object } TypeStatePage  		 */

/** @typedef { Object } TypeStateEvent     */

/** @typedef { Object } TypeStateQuery  	 */

/** @typedef { Object } TypeStateComponent */

/** @typedef { Object } TypeStateModel     */

/** @typedef { Object } TypeStateStyle     */

/**
 * @typedef  { Object }          		TypeState
 * @property { TypeStateApp }    		app
 * @property { TypeStatePage }  		page
 * @property { TypeStateEvent } 		event
 * @property { TypeStateQuery }  		query
 * @property { TypeStateComponent } component
 * @property { TypeStateModel } 		model
 * @property { TypeStateStyle } 		style
 */

/**
 * @typedef  { Object }   		EnumStateKeys
 * @property { 'app' }    		APP
 * @property { 'component' }  COMPONENT
 * @property { 'page' }  			PAGE
 * @property { 'event' } 			EVENT
 * @property { 'query' }  		QUERY
 * @property { 'model' }  		MODEL
 * @property { 'style' }  		STYLE
 */

/** @typedef { keyof TypeState } TypeStateKeys */

/** @typedef { TypeState[keyof TypeState] } TypeStateValues */

/** @type { TypeState } 				 */
let TypeState

/** @type { TypeStateApp } 			 */
let TypeStateApp

/** @type { TypeStatePage } 		 */
let TypeStatePage

/** @type { TypeStateEvent }     */
let TypeStateEvent

/** @type { TypeStateQuery } 		 */
let TypeStateQuery

/** @type { TypeStateComponent } */
let TypeStateComponent

/** @type { TypeStateModel }  	 */
let TypeStateModel

/** @type { TypeStateStyle } */
let TypeStateStyle

/** @type { TypeStateKeys } 		 */
let TypeStateKeys

/** @type { TypeStateValues } 	 */
let TypeStateValues

/** @type { EnumStateKeys } 		 */
let EnumStateKeys

/** @enum @satisfies { EnumStateKeys } */
const StateKeys = {
	APP: 'app',
	COMPONENT: 'component',
	EVENT: 'event',
	PAGE: 'page',
	QUERY: 'query',
	MODEL: 'model',
	STYLE: 'style'
}

export {
	TypeState,
	TypeStateApp,
	TypeStatePage,
	TypeStateEvent,
	TypeStateQuery,
	TypeStateComponent,
	TypeStateModel,
	TypeStateStyle,
	TypeStateKeys,
	TypeStateValues,
	EnumStateKeys,
	StateKeys
}
