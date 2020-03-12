import { builtinModules } from 'module';

const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');


// const Page = db.define('pages', {
//   title: Sequelize.STRING, //shorter strings (< 256 chars)
//   slug: Sequelize.STRING,
//   content: Sequelize.TEXT,
//   status: Sequelize.BOOLEAN
// });

// const User = db.define('users', {
//   name: Sequelize.STRING,
//   email: Sequelize.STRING,
// });

const Page = db.define('page', {
  title: {
    type: Sequelize.STRING
  },
  slug: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
});


module.exports = { Page, User}
module.exports = {db};
