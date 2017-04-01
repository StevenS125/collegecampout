module.exports = function(sequelize, DataTypes) {
  var myCollege = sequelize.define("myCollege", {
    user_id: {type: DataTypes.STRING, 
            allowNull: false
    },
    college_id: {
        type: DataTypes.STRING, 
            allowNull: false
    }
},

 {timestamps: false,
    tableName: "myCollege",
      freezeTableName: true
});
  return myCollege;
};
