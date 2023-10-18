class WebRequest {
  /* Methods */

  /**
   * @param {String} providedEmail
   * @return {*} promise
   */
  async retrieveHtmlResource(providedResource) {
    const resource = await fetch(providedResource)
    const text =  await resource.text()
    return text
  }

}

export default WebRequest