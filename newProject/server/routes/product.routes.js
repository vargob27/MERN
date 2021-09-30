const ProductController = require('../controllers/product.controller');
module.exports = function(app) {
    app.get('/api/products', ProductController.getAllProducts);
    app.post('/api/products', ProductController.createProduct);
}