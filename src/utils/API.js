import axios from "axios";
	
export default {

  getDogByBreed: function(breed) {
	return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },

}
