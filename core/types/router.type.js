/**
 * @typedef  { Object }            TypePageParams
 * @property { string | string[] } path
 * @property { string }            component
 */

/**
 * @typedef  { Object }        TypePageMiddleware
 * @property { () => boolean } middleware
 */

/**
 * @typedef { TypePageParams & TypePageMiddleware } TypePrivatePageParams
 */

/** @type { TypePageParams }        */
let TypePageParams

/** @type { TypePrivatePageParams } */
let TypePrivatePageParams

export { TypePageParams, TypePrivatePageParams }
