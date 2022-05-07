const proxy = require('http-proxy-middleware')

module.exports = function(app) {
    app.use(
        proxy('/assets?asset_contract_address=0xB6183ec9664feD2901B2D17c30ac324Fe8e63192&order_direction=asc&offset=0&limit=20', {
            target: 'https://testnets-api.opensea.io',
            changeOrigin: true
        })
    )
}