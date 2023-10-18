import ContentRenderer from '../interfaces/ContentRenderer.js'

class View extends ContentRenderer {
  /* Private Properties */
  
  #props

  /* Methods */

  /**
   * @param {Object} providedProps
   */
  constructor(providedProps) {
    super()
    this.#props = providedProps || {}
  }

  /**
   * @return {*} promise
   */
  async html() {
    return `${await this.beforeHTML()}
      ${await this.retrieveHtmlView(this.#props.html)}
      ${await this.afterHTML()}`
  }

  /**
   * @return {*} promise
   */
  async beforeHTML() {
    const resource = await this.retrieveHtmlView(this.#props.before && this.#props.before.getProps().html)
    const props = this.#props.before && this.#props.before.getProps() || {}
    return this.parseHtml(resource, props)
  }

  /**
   * @return {*} promise
   */
  async afterHTML() {
    const resource = await this.retrieveHtmlView(this.#props.after && this.#props.after.getProps().html)
    const props = this.#props.after && this.#props.after.getProps() || {}
    return this.parseHtml(resource, props)
  }

  /**
   * @param {Object} providedProps
   */
  setProps(providedProps) {
    this.#props = providedProps
  }

  /**
   * @return {Object} content
   */
  getProps() {
    return this.#props
  }
 }

 export default View