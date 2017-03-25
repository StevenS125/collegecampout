module.exports = function(sequelize, DataTypes) {
  var College = sequelize.define("College", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    College: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    City: {
      type: DataTypes.STRING,
    },
    State: {
      type: DataTypes.STRING,
    },
    Webstie: {
      type: DataTypes.STRING,
    },
    Tuition_In: {
      type: DataTypes.INTEGER,
    },
    Tuition_Out: {
        type: DataTypes.INTEGER
    },
    Admission: {
        type: DataTypes.FLOAT
    },
    Latitude: {
        type: DataTypes.FLOAT
    },
    local: {
        type: DataTypes.INTEGER
    },
    Longitude: {
        type: DataTypes.FLOAT
    },
    SatAvg: {
        type: DataTypes.FLOAT
    },
    Agriculture: {
        type: DataTypes.FLOAT
    },
    NaturalSci: {
        type: DataTypes.FLOAT
    },
    Architecture: {
        type: DataTypes.FLOAT
    },
    Cultural: {
        type: DataTypes.FLOAT
    },
    Communications: {
        type: DataTypes.FLOAT
    },
    ComTech: {
        type: DataTypes.FLOAT
    },
    Cooking: {
        type: DataTypes.FLOAT
    },
    Education: {
        type: DataTypes.FLOAT
    },
    TechnicalEngineering: {
        type: DataTypes.FLOAT
    },
    ForeignLanguages: {
        type: DataTypes.FLOAT
    },
    FamilyScience: {
        type: DataTypes.FLOAT
    },
    Legal: {
        type: DataTypes.FLOAT
    },
    English: {
        type: DataTypes.FLOAT
    },
    LiberalArts: {
        type: DataTypes.FLOAT
    },
    LibraryScience: {
        type: DataTypes.FLOAT
    },
    Biology: {
        type: DataTypes.FLOAT
    },
    Math: {
        type: DataTypes.FLOAT
    },
    MilitaryTech: {
        type: DataTypes.FLOAT
    },
    Multi: {
        type: DataTypes.FLOAT
    },
    ParksRecreation: {
        type: DataTypes.FLOAT
    },
    Philosophy: {
        type: DataTypes.FLOAT
    },
    Theology: {
        type: DataTypes.FLOAT
    },
    PhysicalScience: {
        type: DataTypes.FLOAT
    },
    ScienceTechnologies: {
        type: DataTypes.FLOAT
    },
    Pyschology: {
        type: DataTypes.FLOAT
    },
    CriminalJustice: {
        type: DataTypes.FLOAT
    },
    PublicAdministration: {
        type: DataTypes.FLOAT
    },
    SocialSciences: {
        type: DataTypes.FLOAT
    },
    Mechanic: {
        type: DataTypes.FLOAT
    },
    PrecisionProduction: {
        type: DataTypes.FLOAT
    },
    Transportation: {
        type: DataTypes.FLOAT
    },
    Art: {
        type: DataTypes.FLOAT
    },
    Medical: {
        type: DataTypes.FLOAT
    },
    Business: {
        type: DataTypes.FLOAT
    },
    History: {
        type: DataTypes.FLOAT
    }
  },{timestamps: false,
      tableName: "colleges",
      freezeTableName: true
  });
  return College;
};


