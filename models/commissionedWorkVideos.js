const restful = require('node-restful');
const mongoose = restful.mongoose;

const commissionedWorkVideos = new mongoose.Schema({
      
        title: String,
        sampleUrl: String,
        fullUrl:String
      
});

module.exports = restful.model('commissionedWorkVideos', commissionedWorkVideos);

