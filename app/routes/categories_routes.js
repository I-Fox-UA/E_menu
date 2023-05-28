const CategoriesController = require('../controllers/categories_controllers');
const Router = require('express');
const router = new Router();


router.post('/categories', CategoriesController.createCategories);
router.get('/categories', CategoriesController.getCategories);
router.get('/categories/:id', CategoriesController.getOneCategories);
router.put('/categories', CategoriesController.updateCategories);
router.delete('/categories/:id', CategoriesController.deleteCategories);



module.exports = router;