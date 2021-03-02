const mongoose = require('mongoose');

module.exports = {
  connect: async () => {
    try {
      await mongoose.connect('mongodb://localhost:27017/portfolio', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log("connect successfully");
    } catch (error) {
      console.log(error);
    }
  }
}