const FollowSchema = require("./FollowSchema");

const FollowModel = () => {};

FollowModel.FindFollows = (data) => {
  return new Promise((resolve, reject) => {
    FollowSchema.find(data).exec((err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

FollowModel.saveFollow = (data) => {
  return new Promise((resolve, reject) => {
    FollowSchema.create(data, (err) => {
      if (err) reject(err);
      else resolve(true);
    });
  });
};

FollowModel.removeFollow = (data) => {
  return new Promise((resolve, reject) => {
    FollowSchema.remove(data, (err) => {
      if (err) reject(err);
      else resolve(true);
    });
  });
};

module.exports = FollowModel;
