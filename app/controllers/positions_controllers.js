const db = require('../db');

class PositionsController {
      async createPositions(req, res) {
            const { name_positions, description_positions, weight_positions, sell, categories_id } = req.body;
            const newPosition = await db.query('INSERT INTO positions (name_positions, description_positions, weight_positions, sell, categories_id) VALUES($1, $2, $3, $4, $5) RETURNING *', [name_positions, description_positions, weight_positions, sell, categories_id]);
            res.json(newPosition.rows[0]);
      }
      async getPositionsByCategories(req, res) {
            const id = req.query.id;
            const positions = await db.query('SELECT * FROM positions where categories_id = $1', [id]);
            res.json(positions.rows);
      }
      async updatePositions(req, res) {
            const { id, name_positions, description_positions, weight_positions, sell } = req.body
            const positions = await db.query('UPDATE positions SET name_positions = $1, description_positions = $2, weight_positions = $3, sell = $4 where id = $5 RETURNING *', [name_positions, description_positions, weight_positions, sell, id]);
            res.json(positions.rows);
      }
      async deletePositions(req, res) {
            const id = req.params.id;
            const deletePosition = await db.query('DELETE FROM positions WHERE id = $1', [id]);
            res.json(deletePosition.rows[0]);
      }
}

module.exports = new PositionsController();