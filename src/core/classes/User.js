import WebRequest from '../interfaces/WebRequest.js'
import Guest from './Guest.js'

class User extends WebRequest {
  /* Private Properties */

  #typology
  #email
  #biographical

  /* Methods */

  /**
   * @param {String} providedEmail
   * @param {Object} providedBiographical
   */
	constructor(providedEmail, providedBiographical) {
    super()
		this.#email = providedEmail || ''
		this.#biographical = providedBiographical || new Guest()
    this.setTypology(this.#biographical.constructor.name)
	}

  /**
   * @param {String} providedTypology
   */
  setTypology(providedTypology) {
    this.#typology = providedTypology
  }

  /**
   * @return {String} typology
   */
  getTypology() {
    return this.#typology
  }

  /**
   * @param {String} providedEmail
   */
  setEmail(providedEmail) {
    this.#email = providedEmail
  }

  /**
   * @return {String} Email
   */
  getEmail() {
    return this.#email
  }

  /**
   * @param {Object} providedBiographical
   */
  setBiographical(providedBiographical) {
    this.#biographical = providedBiographical
  }

  /**
   * @return {Object} biographical
   */
  getBiographical() {
    return this.#biographical
  }
}

export default User