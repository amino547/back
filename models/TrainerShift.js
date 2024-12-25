const mongoose = require('mongoose');

const trainerShiftSchema = new mongoose.Schema({
  trainerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Trainer', required: true },
  shiftStart: { type: Date, required: true },
  shiftEnd: { type: Date, required: true },
});

module.exports = mongoose.model('TrainerShift', trainerShiftSchema);
