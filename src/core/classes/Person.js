class Person {
  /* Private Properties */
  
  #name
  #surname
  #age

  /* Methods */

  /**
   * @param {String} providedName
   * @param {String} providedSurname
   * @param {String|Number} providedAge
   */
  constructor(providedName, providedSurname, providedAge) {
    this.#name = providedName || ''
    this.#surname = providedSurname || ''
    this.#age = providedAge || ''
  }

  /**
   * @param {String} providedName
   */
  setName(providedName) {
    this.#name = providedName
  }

  /**
   * @return {String} name
   */
  getName() {
    return this.#name
  }
  
  /**
   * @param {String} providedSurname
   */
  setSurname(providedSurname) {
    this.#surname = providedSurname
  }

  /**
   * @return {String} surname
   */
  getSurname() {
    return this.#surname
  }
 }

 export default Person