module.exports = {
  
  mongooseToObject(mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },

  mongoosesToObject(mongooses) {
    return mongooses.map((mongoose) => mongoose.toObject());
  }
}