const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./config/db');
const userRoute = require('./routes/authRoutes');
const settingRoutes = require('./routes/settingRoutes')
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
db()

app.use(express.json());
app.use(cors());


//http://localhost:5000/users
app.use('/users', userRoute);

app.use('/user', settingRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));












