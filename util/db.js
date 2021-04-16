const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("learn", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;

// The A.hasOne(B) One-To-One relationship exists between A and B,  foreign key in  (B).
// The A.belongsTo(B) One-To-One relationship exists between A and B,  foreign key in  (A).
// The A.hasMany(B) One-To-Many relationship exists between A and B,  foreign key in  (B).
// The A.belongsToMany(B, { through: 'C' }) Many-To-Many relationship 
// exists between A and B, using table C as junction table, which will have the
// foreign keys (aId and bId, for example). Sequelize will automatically create 
// this model C (unless it already exists) and define the appropriate foreign keys on it.
// Note: In the examples above for belongsToMany, a string ('C') 
// was passed to the through option. In this case, Sequelize automatically generates
//  a model with this name. However, you can also pass a model directly, if you have already
//   defined it.
