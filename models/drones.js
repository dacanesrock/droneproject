module.exports = function(sequelize, DataTypes) {
  var Drones = sequelize.define("Drones", {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   primaryKey: true,
    //   autoIncrement: true
    // },
    drone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: "0"
    },
    camera: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    camera_max: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 30]
      }
    },
    video: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    video_res: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 30]
      }
    },
    video_max: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 30]
      }
    },
    max_range: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 30]
      }
    },
    flight_time: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 30]
      }
    },
    gimbal: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
     gps: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    avoidance: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    headless: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    altitude: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    flips: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
   max_speed: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 30]
      }
    },
   weight: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 30]
      }
    },
    intelligent_flight: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
    // createdAt: {
    //   type: DataTypes.DATE,
    //   field: 'created_at',
    //   allowNull: false,
    //   defaultValue: 0
    // },
    // updatedAt: {
    //   type: DataTypes.DATE,
    //   field: 'updated_at',
    //   allowNull: false,
    //   defaultValue: 0
    // }
  });
  return Drones;
};
