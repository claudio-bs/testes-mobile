class ProductScreen {

    get #enterProductRegister() {
        return $('//android.widget.FrameLayout[@content-desc="Products"]')
    }

    get #addProduct() {
        return $('~Add products')
      }
    
      get #simpleProduct() {
        return $('android=new UiSelector().text("Simple physical product")')
      }

    get #entertitle() {
        return $('android=new UiSelector().text("Enter Product Title")')
    }

      get #titleProduct() {
        return $('id:editText')
    }
    
      get #enterDescription() {
        return $('android=new UiSelector().text("Describe your product")')
    }
    
      get #visualEditor() {
        return $('id:visualEditor')
    }
    
      get #backButton() {
        return $('~Navigate up')
    }
    
      get #priceButton() {
        return $('android=new UiSelector().text("Add price")')
    }
    
      get #regularPrice() {
        return $('id:com.woocommerce.android:id/product_regular_price')
    }
    
      get #enterPrice() {
        return $('id:edit_text')
    }
    
      get #salePrice() {
        return $('id:com.woocommerce.android:id/product_sale_price')
    }
    
      get #enterpublish() {
        return $('id:menu_done')
    }

    async goToRegister(){
        await this.#enterProductRegister.click()
    }

    async setAddProduct() {
        await this.#addProduct.click()
      }
    
      async setSimpleProduct() {
        await this.#simpleProduct.click()
      }
    
    async setProduct(text) {
        await this.#entertitle.click()
        await this.#titleProduct.setValue(text)
      }
    
      async setDescription() {
        await this.#enterDescription.click()
      }
    
      async setVisualEditor(text) {
        await this.#visualEditor.setValue(text)
        await this.#backButton.click()
      }
    
      async buttonPrice() {
        await this.#priceButton.click()
      }
    
      async setAddPrice(price1, price2) {
        await this.#regularPrice.click()
        await this.#enterPrice.setValue(price1)
        await this.#salePrice.click()
        await this.#enterPrice.setValue(price2)
        await this.#backButton.click()
      }
    
      async menuPublish() {
        await this.#enterpublish.click()
      }
    }

module.exports = new ProductScreen()