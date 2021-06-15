const db = require('../database');

module.exports = {

  getProblem: (id, callback) => {
    const query = `SELECT * FROM problem WHERE id = ${id}`;
    db.query(query, (err, data) => {
      if (err) {
        console.log('error in models/toyProblems.getProblem')
        throw err;
      } else {
        callback(err, data);
      }
    });
  }
}