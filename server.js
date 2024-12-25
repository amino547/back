const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./config/db');
const bodyParser = require('body-parser');
//const userRoute = require('./routes/authRoutes');
const workoutRoutes = require('./routes/workoutRoutes');
const authRoutes = require('./routes/authRoutes');
//const settingRoutes = require('./routes/settingRoutes')
//const updateRouter = require ('./routes/UpdateRoute')


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
db()

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


//http://localhost:5000/users
//app.use('/users', userRoute);
//app.use('/api/users', userRoute);
app.use('/workouts', workoutRoutes);
//app.use('/api/exercises', require('./routes/exercises'));
app.use('/exercises', require('./routes/exercises'));
app.use('/api/plans', require('./routes/plans'));
//app.use('/user', settingRoutes);
app.use('/auth', authRoutes);


app.use('/api/admins', require('./routes/admin'));
app.use('/api/dashboard', require('./routes/dashboard'));
app.use('/api/members', require('./routes/member'));
app.use('/api/trainers', require('./routes/trainers'));
app.use('/api/equipment', require('./routes/equipment'));
app.use('/api/packages', require('./routes/packages'));


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


















































