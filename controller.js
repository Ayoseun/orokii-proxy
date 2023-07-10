require('dotenv').config()




async function liveness(img) {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json', 
      'content-type': 'application/json',
    },
    body: JSON.stringify({
        tokenImage:img
    
    }),
  }
  var data
  await fetch('https://facephi.orokii.com/api/selphid/passive-liveness/evaluate/token', options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      data = response
    })
    .catch((err) => console.error(err))

  return data
}

async function faceDoc(facetemplateRaw,docImage) {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json', 
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      "documentTemplate":docImage,
      "faceTemplate1":facetemplateRaw
      }),
  }
  var data
  await fetch('https://facephi.orokii.com/api/selphid/authenticate-facial/document/face-template', options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      data = response
    })
    .catch((err) => console.error(err))

  return data
}


module.exports = {liveness,faceDoc}
