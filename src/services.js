import axios from "axios";
var exports = module.exports = {};
exports.saveJson = function(data,type){
// Server API Call
axios.post('http://localhost:3000/save', data) // here sending data to server 
.then(function (response) {
  alert('Chart Type: '+type+' Chart ,'+response.data.message);
})
.catch(function (error) {
  console.log(error);
});
}