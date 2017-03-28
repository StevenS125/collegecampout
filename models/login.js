module.exports = function(sequelize, DataTypes) {
  var Login = sequelize.define("Login", {
    name: {type: DataTypes.STRING, 
            allowNull: false
    },
    hashPw: {
        type: DataTypes.STRING, 
            allowNull: false
    }
},

 {timestamps: false,
    tableName: "login",
      freezeTableName: true
});
  return Login;
};


