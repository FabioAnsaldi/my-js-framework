class Interpreter {
  /* Private Properties */

  #filters

  /* Methods */

  /**
   * @param {Array} providedFilters
   */
  constructor(providedFilters) {
    this.makeDefaultFilters()
    this.#filters = this.#filters.concat(providedFilters || [])
  }

  /**
   * 
   */
  makeDefaultFilters() {
    this.#filters = [{
      filter: "repeat",
      action: this.repeat
    }]
  }

  /**
   * 
   * @param {String} collection 
   * @param {String} variable 
   * @param {String} html 
   * @param {*} props 
   * @return {String} html
   */
  repeat(collection, variable, html, props) {
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, "text/html")
    const elm = doc.body.firstChild.querySelectorAll(`[data-repeat-${collection}]`)
    const parentNode = elm[0].parentNode
    let properties = []
    properties = props[collection]
    properties.forEach((key, i) => {
      const dynamicObject = {
        [variable]: key
      }
      const innerHTML = Interpreter.parseHtmlProperties(elm[0].outerHTML, dynamicObject)
      const child = parser.parseFromString(innerHTML, "text/html").body.firstChild
      if (i === 0) {
        elm[0].remove()
      }
      parentNode.append(child)
    })
    return doc.body.firstChild.outerHTML
  }

  /**
   * @param {Object} providedProps
   * @return {String} html
   */
  static parseHtmlProperties(html, props) {
    const regex = /(?<={{).*?(?=}})/
    let result = html
    let matched = null
    while ((matched = regex.exec(result)) !== null) {
      result = matched.input.replaceAll(`{{${matched[0]}}}`, matched[0].split('.').reduce((a, b) => a[b], props))
    }
    return result
  }

  /**
   * @param {Array} providedFilters
   */
  setFilters(providedFilters) {
    this.#filters = this.#filters.concat(providedFilters)
  }

  /**
   * @return {Array} providedFilters
   */
  getFilters() {
    return this.#filters
  }
 }

 export default Interpreter