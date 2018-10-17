const db = require("../models");

// console.log(db);
module.exports = {
    getItems: function (req, res) {
        console.log("hello")
        db.Items
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
};