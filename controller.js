const axios= require('axios');



const liveness = async (img) => {
  var  responseData;
  try {
    await axios({
      method: "post",
      url: `https://facephi.orokii.com/api/selphid/passive-liveness/evaluate/token`,
      data: {
        "tokenImage":img
      },
     
  }).then((response) => {
     responseData = response.data;
    console.log(responseData)
    return responseData;
  })
  } catch (error) {
    console.log(error)
  }
  return responseData;
}


const faceDoc = async (image1,faceTemplate1) => {

  var  responseData;
  try {
    await axios({
      method: "post",
      url: 'https://facephi.orokii.com/api/selphid/authenticate-facial/image/template',
      data: {
        "image1": image1,
        "faceTemplate1":faceTemplate1
      },
     
  }).then((response) => {
     responseData = response.data;
    console.log(responseData)
    return responseData;
  })
  } catch (error) {
    console.log(error)
  }
  return responseData;
};

module.exports= { liveness, faceDoc };
