module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {type: DataTypes.STRING, 
            allowNull: false
    },
    password: {type: DataTypes.STRING, 
                allowNull: false
    },
    admin: {type: DataTypes.BOOLEAN,
        allowNull: false} 
    
  }, {timestamps: false,
    tableName: "users",
      freezeTableName: true
});
  return User;
};


