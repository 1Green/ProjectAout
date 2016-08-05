const restful = require('node-restful');
const mongoose = restful.mongoose;

const commissionedWorkVideos = new mongoose.Schema({
      
        title: String,
        url: String
      
});

module.exports = restful.model('commissionedWorkVideos', commissionedWorkVideos);

