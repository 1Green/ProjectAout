const restful = require('node-restful');
const mongoose = restful.mongoose;

const commissionedWorkImages = new mongoose.Schema({
      
        title: String,
        url: String
      
});

module.exports = restful.model('commissionedWorkImages', commissionedWorkImages);

