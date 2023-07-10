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

const faceDoc = async (facetemplateRaw, docImage) => {

  var  responseData;
  try {
    await axios({
      method: "post",
      url: 'https://facephi.orokii.com/api/selphid/authenticate-facial/document/face-template',
      data: {
        "documentTemplate":docImage,
        "faceTemplate1":facetemplateRaw
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
