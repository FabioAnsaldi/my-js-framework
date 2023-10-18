import Person from './Person.js'

class Guest extends Person {
  /* Methods */

  /**
   * @param {String} rovidedName
   * @param {String} providedSurname
   * @param {String|Number} providedAge
   */
  constructor(rovidedName, providedSurname, providedAge) {
    super(rovidedName, providedSurname, providedAge)
  }
 }

 export default Guest