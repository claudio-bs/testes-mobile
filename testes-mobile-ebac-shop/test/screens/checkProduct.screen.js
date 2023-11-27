class CheckProductScreen {

    get #toGoNavigation() {
        return $('~Navigate up')
      }
    
      get #toGoSearch() {
        return $('id:menu_search')
      }
    
      get #toGoSearchProduct() {
        return $('id:search_src_text')
      }
    
      get #toGoConfirmProduct() {
        return $('id:linearLayout')
      }
    
      async navigation() {
        await this.#toGoNavigation.click()
      }
      async searchMenu() {
        await this.#toGoSearch.click()
      }
    
      async setSearchProduct(text) {
        await this.#toGoSearchProduct.setValue(text)
      }
    
      async checkProduct() {
        await this.#toGoConfirmProduct.click()
      }
}

module.exports = new CheckProductScreen()