import axios from "axios";

 const instance = axios.create ({


    baseURL:"https://streaming-api-project.herokuapp.com/",

});



export default instance ; 