const QA = require('../models/QA');

// Register a new user
const qasave = async (req, res, next) => {
  const { userId, qadata } = req.body;

  try {
    qaData = JSON.stringify(qadata);
    const qa = new QA({ userId, qadata : qaData });
    await qa.save();
    res.json({ message: 'Data saved' });
  } catch (error) {
    next(error);
  }
};

// Login with an existing user
const qalist = async (req, res, next) => {
   const { userId } = req.body;

  try {
    const data = await QA.find({ userId });
    

    res.json({ data });
  } catch (error) {
    next(error);
  }
};

module.exports = { qasave, qalist };