require('dotenv').config();
const axios = require('axios');

async function liveness(img) {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
    data: {
      tokenImage: img,
    },
  };

  try {
    const response = await axios.post('https://facephi.orokii.com/api/selphid/passive-liveness/evaluate/token', options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      console.error(error.response.data);
      return error.response.data.message
    } else {
      console.error(error);
      return error
    }
  }
}

async function faceDoc(facetemplateRaw, docImage) {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
    data: {
      documentTemplate: docImage,
      faceTemplate1: facetemplateRaw,
    },
  };

  try {
    const response = await axios.post('https://facephi.orokii.com/api/selphid/authenticate-facial/document/face-template', options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data) {
      console.error(error.response.data);
      return error.response.data.message
    } else {
      console.error(error);
     return error
    }
  }
}

module.exports = { liveness, faceDoc };
