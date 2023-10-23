import View from './View.js'

class Application {
  /* Private Properties */
  
  #root
  #pages

  /* Methods */

  /**
   * @param {Object} pages
   */
  constructor(providedRoot, providedPages) {
    this.#root = providedRoot || document.querySelector('body')
    this.#pages = providedPages || []

    this.bootstrap()
  }

  /**
   * @return {*} promise
   */
  async bootstrap() {
    const activeView = this.retrieveActiveView()
    this.catchOnPopState()
    this.makeFriendlyPath()
    this.#root.innerHTML = await activeView.renderContent()
  }

  /**
   * 
   */
  catchOnPopState() {
    window.onpopstate = () => {
      this.bootstrap()
    }
  }

  /**
   * @return {Object} view
   */
  retrieveActiveView() {
    const hash = this.retrieveHash()
    const view = this.#pages.find((v) => {
      return `#!${v.getProps().path}` === hash
    })
    if (view) {
      view.setProps(Object.assign({}, view.getProps(), { active: true }))
      return view
    } else {
      return new View({ html: `<h2>404</h2><p>Page Not Found!</p>`, path: '/404', title: '404' });
    }
  }

  /**
   * @return {String} 
   */
  retrieveHash() {
    const hash = window.location.hash
    if (hash === '') {
      window.location.hash = `#!/`
    }
    return window.location.hash
  }

  /**
   * 
   */
  makeFriendlyPath() {
    window.history.replaceState(null, '', `/${window.location.hash}`)
  }

  /**
   * @param {String} providedRoot
   */
  setRoot(providedRoot) {
    this.#root = providedRoot
  }

  /**
   * @return {Object} root
   */
  getRoot() {
    return this.#root
  }

  /**
   * @param {String} providedPages
   */
  setPages(providedPages) {
    this.#pages = providedPages
  }

  /**
   * @return {String} pages
   */
  getPages() {
    return this.#pages
  }
 }

 export default Application