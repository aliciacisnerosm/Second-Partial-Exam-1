const mongoose = require( 'mongoose' );
const uuid = require( 'uuid' );
const sportSchema = mongoose.Schema({
  id: {
    type: String
  },
  name: {
    type: String
  },
  num_players: {
    type: Number
  }
});
const collectionSports = mongoose.model('sports', sportSchema);

const Sports = {
  deleteSport: function(id){
    collectionSports.deleteOne({id: id}).then(response =>{
      return response;
    }).catch(err =>{
      return err;
    });
  }
}

module.exports = {
    Sports
};