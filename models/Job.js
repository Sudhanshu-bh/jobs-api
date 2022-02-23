const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Company name must be provided'],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, 'Position name must be provided'],
      maxlength: 200,
    },
    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'User must be provided'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Job', JobSchema);
