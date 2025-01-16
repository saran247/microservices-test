require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());


app.use('/user', require('./routes/userRoutes'));
app.use('/product', require('./routes/productRoutes'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Gateway running on port ${PORT}`));
