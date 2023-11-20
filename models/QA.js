const mongoose = require('mongoose');

const qaSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },
    qadata: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

const QA = mongoose.model('QA', qaSchema);

module.exports = QA;