require('dotenv').config()

let specsConf = process.env.PLATFORM == 'android' ? {
    services: ['browserstack'],
    specs: [
        '../test/specs/login.spec.js'
    ]
} : {
    specs: [
        '../test/specs/products.spec.js',
        '../test/specs/search.spec.js',
        '../test/specs/cartproduct.spec.js'
    ]
}

module.exports = { specsConf }