const restful = require('node-restful');
const mongoose = restful.mongoose;

const commissionedWorkImages = new mongoose.Schema({
      
        coverUrl: String,
        coverTitle: String,
        images : [{
                title: String,
                url: String
        }]

});

module.exports = restful.model('commissionedWorkImages', commissionedWorkImages);

