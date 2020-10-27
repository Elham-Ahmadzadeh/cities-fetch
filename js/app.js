


let showMessage = document.querySelector('.showMessage'),
      id = document.querySelector('.search-Id').value,
      city = document.querySelector('.search-city').value,     
      population = document.querySelector('.search-population').value,


      //UPDATE CITIES
function updateCities() {

  fetch('https://avancera.app/cities/')
    .then(res => res.json())
    
    .then(result => {
      showMessage.textContent = ''
      for (let i = 0; i < result.length; i++) {

        let piId = document.createElement('p')
        // document.querySelector("#id").innerHTML = `${result[i].id}`
        showMessage.appendChild(piId)

        piId.innerHTML = `${result[i].id} ${result[i].name} ${result[i].population}`
      }
     
    })
}

updateCities()

  const urlParams = {
    id: id,
    name: city,
    population: population  
  }


  //POST CITIES
document.querySelector('#postBtn').addEventListener('click', postCities)

function postCities() {

  fetch('https://avancera.app/cities/', {
  
    body: JSON.stringify(urlParams),
    headers: {
      'Content-Type': 'application/json'
    }, method : 'POST'
  
  }) 
    .then(res => res.json())
    .then (() => {
    updateCities()
  
    })
    
}

//PUT API
 document.querySelector('#updateBtn').addEventListener('click',putApi)
  
function putApi() {

  fetch('https://avancera.app/cities/', {
    body: JSON.stringify(urlParams),
    headers: {
      'Content-Type': 'application/json'
    }, method: 'PUT'
    
  })
    .then(() =>    updateCities())
      
}


//DELETE API
document.querySelector('#deleteBtn').addEventListener('click', deleteApi)
 

function deleteApi() {

  fetch('https://avancera.app/cities/' + id, {
    method: 'DELETE'
      
  })
    .then(() =>   updateCities())  
} 
 