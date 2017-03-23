module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("College", {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    
  });
  return User;
};


