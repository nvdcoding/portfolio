const Project = require('../model/Project');

module.exports = {

  async index(req, res, next) {
    await Project.find({})
      .exec((err, projects) => {
        if(err) {
          return next();
        }
        return res.send(projects);
      });
  }

}