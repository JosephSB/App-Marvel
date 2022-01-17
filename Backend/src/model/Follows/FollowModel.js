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
      else resolve("Follow added");
    });
  });
};

FollowModel.removeFollow = (data) => {
  return new Promise((resolve, reject) => {
    FollowSchema.remove(data, (err) => {
      if (err) reject(err);
      else resolve("Follow removed");
    });
  });
};

module.exports = FollowModel;
