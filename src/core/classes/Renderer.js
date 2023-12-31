import WebRequest from '../interfaces/WebRequest.js'
import Interpreter from './Interpreter.js'

class Renderer extends WebRequest {
  /* Methods */

  /**
   * @return {*} promise
   */
  async renderContent() {
    const props = {
      typology: this.constructor.name,
      ... this.getProps()
    }
    const resource = await this.html()
    const parsedHTML = this.parseHtml(resource, props)
    return parsedHTML
  }

  /**
   * @param {Object} providedProps
   * @return {String} html
   */
  parseHtml(html, props) {
    const innerHTML = this.parseElementsAttribute(html, props)
    const result = Interpreter.parseHtmlProperties(innerHTML, props)
    return result
  }

  /**
   * @param {Object} providedProps
   * @return {String} html
   */
  parseElementsAttribute(html, props) {
    const regex = /(?<=\[\[).*?(?=\]\])/
    const interpreter = new Interpreter()
    const filters = interpreter.getFilters()
    let matched = null
    let result = html
    while ((matched = regex.exec(result)) !== null) {
      const attribute = matched[0].split(' as ')
      const action = attribute[0].split('-')
      let response = matched.input.replaceAll(`[[${matched[0]}]]`, `${attribute[0]}`).trim()
      filters.forEach((obj, i) => {
        if (obj.filter === action[0]) {
          result = obj.action(action[1], attribute[1], response, Object.assign({}, this.getProps(), props))
        }
      })
    }
    return result
  }

  /**
   * @param {String} providedResource
   * @return {*} promise
   */
  async retrieveHtmlView(providedResource) {
    if (typeof providedResource === 'string') {
      const regex = /^([a-z]+:)?[\\/]/i
      if (regex.test(providedResource)) {
        const resource = `${window.location.origin}${providedResource}`
        const response = await this.retrieveHtmlResource(resource)
        return response
      } else {
        return providedResource
      }
    } else {
      return ''
    }
  }

}

export default Renderer