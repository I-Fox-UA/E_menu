const db = require('../db');

class CategoriesController {
      async createCategories(req, res) {
            const { name_categories } = req.body;
            const newCategories = await db.query('INSERT INTO categories (name_categories) VALUES($1) RETURNING *', [name_categories]);
            res.json(newCategories.rows[0]);
      }
      async getCategories(req, res) {
            const categories = await db.query('SELECT * FROM categories');
            res.json(categories.rows);
      }
      async getOneCategories(req, res) {
            const id = req.params.id;
            const oneCategories = await db.query('SELECT * FROM categories WHERE id = $1', [id]);
            res.json(oneCategories.rows[0]);
      }
      async updateCategories(req, res) {
            const { id, name_categories } = req.body
            const updateCategories = await db.query('UPDATE categories SET name_categories = $1 where id = $2 RETURNING *', [name_categories, id]);
            res.json(updateCategories.rows[0]);
      }
      async deleteCategories(req, res) {
            const id = req.params.id;
            const deleteCategories = await db.query('DELETE FROM categories WHERE id = $1', [id]);
            res.json(deleteCategories.rows[0]);
      }
}

module.exports = new CategoriesController();