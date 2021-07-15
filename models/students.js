module.exports = (sequelize, DataTypes)=> {

    const students = sequelize.define('students', {
      // Model attributes are defined here
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
      },
      desgination: {
        type: DataTypes.STRING
      },
      empId: {
        type: DataTypes.INTEGER
      }
    }, {
      classMethods: {
  
          },
      // Other model options go here
      sequelize,
      modelName: 'students',
      freezeTableName: true
    });
  
    return students;
  }