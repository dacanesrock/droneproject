module.exports = function(sequelize, DataTypes) {
  var Content = sequelize.define("Content", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    page_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    header: {
      type: DataTypes.STRING,
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT('long'),
      allowNull: false
    }
  });
  return Content;
};
