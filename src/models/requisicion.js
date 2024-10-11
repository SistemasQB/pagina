import { DataTypes } from 'sequelize'
import db from "../config/db.js";

const Requisicion = db.define('requisiciones', {
    fecha_creacion:{
        type: DataTypes.DATE,
        allowNull: false
    },
    rentabilidad:{
        type: DataTypes.STRING,
        allowNull: false
    },
    responsable:{
        type: DataTypes.STRING,
        allowNull: false
    },
    proceso:{
        type: DataTypes.STRING,
        allowNull: false
    },
    departamento:{
        type: DataTypes.STRING,
        allowNull: false
    },
    asunto:{
        type: DataTypes.STRING,
        allowNull: false
    },
    orden_servicio:{
        type: DataTypes.STRING,
        allowNull: false
    },
    planta:{
        type: DataTypes.STRING,
        allowNull: false
    },
    region:{
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion:{
        type: DataTypes.STRING,
        allowNull: false
    },
    unidad:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precio_unitario:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    precio_total:{
        type: DataTypes.FLOAT,
        allowNull: false
    },
    fecha_requerida:{
        type: DataTypes.DATE,
        allowNull: false
    },
    total:{
        type: DataTypes.DOUBLE
    },
    situacion_actual:{
        type: DataTypes.STRING,
        allowNull: false
    },
    espectativa:{
        type: DataTypes.STRING,
        allowNull: false
    },
    comentarios:{
        type: DataTypes.STRING,
        allowNull: false
    },
    tarjeta:{
        type: DataTypes.STRING,
        allowNull: false
    },
    imagen:{
        type: DataTypes.STRING
    },
}
// ,{
//     hooks:{
//         beforeCreate: async function (usuario) {
//             const salt = await bcrypt.genSalt(10);
//             usuario.password = await bcrypt.hash( usuario.password, salt);
//         }
//     }
// }
)

export default Requisicion;