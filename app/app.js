const express = require('express');
const categoriesRouter = require('./routes/categories_routes.js');
const positionRouter = require('./routes/position_routes.js');
const PORT = process.env.PORT || 8080;
const app = express();


app.use(express.json());
app.use('/api', categoriesRouter);
app.use('/api', positionRouter);

app.listen(PORT, () => console.log(`Server is work! ${PORT}`));