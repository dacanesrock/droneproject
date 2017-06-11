module.exports = function(sequelize, DataTypes) {
  var drones = sequelize.define("drones", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    drone_name: {
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
      allowNull: false,
      defaultValue: false
    },
    video_res: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 30]
      }
    },
    video_fps: {
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
      allowNull: false,
      defaultValue: false
    },
     gps: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
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
    },
    picture_small: {
      type: DataTypes.STRING,
      allowNull: false
    },
    picture_large: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return drones;
};
