const {Tasks} = require('../models');

module.exports.createTask = async (req, res, next) => {
    try {
      const { body } = req;
  
      const task = await Tasks.create(body);
  
      res.send({ data: task });
    } catch (error) {
      next(error);
    }
  };
  
  