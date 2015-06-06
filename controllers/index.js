'use strict';


var IndexModel = require('../models/index');
var indexTemplate = require('marko').load(require.resolve('../public/templates/index.marko'));

module.exports = function (router) {

    var model = new IndexModel();


    router.get('/', function (req, res) {

      indexTemplate.render(model,res);

    });

};
