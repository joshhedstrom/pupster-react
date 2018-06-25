import axios from "axios";
	
export default {

  getDogByBreed: breed => {
	return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
  },

  getRandomDog: ()=> {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  }


}
