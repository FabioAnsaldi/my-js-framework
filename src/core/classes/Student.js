import Person from './Person.js'

class Student extends Person {
  /* Private Properties */
  
  #freshman
     
  /* Methods */

  /**
   * @param {String} rovidedName
   * @param {String} providedSurname
   * @param {String|Number} providedAge
   * @param {String|Number} providedFreshman
   */
  constructor(rovidedName, providedSurname, providedAge, providedFreshman) {
    super(rovidedName, providedSurname, providedAge)
    this.freshman = providedFreshman || ''
  }

  /**
   * @param {String} providedFreshman
   */
  setFreshman(providedFreshman) {
    this.freshman = providedFreshman
  }

  /**
   * @return {String} freshman
   */
  getFreshman() {
    return this.freshman
  }
 }

 export default Student