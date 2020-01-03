const ENDPOINT= 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/';

const handleApiFetch=(datosObjeto)=>{
    
    fetch(ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(datosObjeto),
    headers: {
      'content-type': 'application/json'
    },
  })
    .then(response => response.json())
    .then(res => console.log(res))
}


export {handleApiFetch}