const mongoose = require('mongoose');
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

module.exports = mongoose.model('User', UserSchema);








