const PositionsController = require('../controllers/positions_controllers');
const Router = require('express');
const router = new Router();


router.post('/positions', PositionsController.createPositions);
router.get('/positions', PositionsController.getPositionsByCategories);
router.put('/positions', PositionsController.updatePositions);
router.delete('/positions/:id', PositionsController.deletePositions);

module.exports = router;