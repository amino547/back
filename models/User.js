/*const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 

const saltRounds = 10; 

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  age: { type: Number },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  unitSystem: { type: String, default: 'metric' },
  language: { type: String, default: 'en' },
  startOfWeek: {
    type: String,
    enum: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
    required: false
  },  
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  progress: [
    {
      weight: { type: Number },
      date: { type: Date, default: Date.now },
    },
  ],
}, { timestamps: true });


UserSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    try {
      
      this.password = await bcrypt.hash(this.password, saltRounds);
      next(); 
    } catch (err) {
      next(err); 
    }
  } else {
    next(); 
  }
});

module.exports = mongoose.model('User', UserSchema);*/


// models/User.js
/*const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  unitSystem: { type: String, required: true },
  language: { type: String, required: true },
  startOfWeek: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  progress: [{ weight: { type: Number, required: true }, date: { type: Date, default: Date.now } }],
});

module.exports = mongoose.model('User', UserSchema);*/



// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  unitSystem: { type: String, required: true },
  language: { type: String, required: true },
  startOfWeek: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  workouts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workout' }],
  exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }],
  progress: [{ weight: { type: Number, required: true }, date: { type: Date, default: Date.now } }],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;











