document.addEventListener("DOMContentLoaded", () => {
  const table = document.querySelector("#table-body");
  const dogForm = document.querySelector("#dog-form");
  

  const editBtn = document.querySelector('.edit_dog');

  fetch("http://localhost:3000/dogs")
    .then(resp => resp.json())
    .then(dogs => renderDogs(dogs));

  function renderDogs(dogs) {
    dogs.forEach(dog => {
        const tableRow = document.createElement('tr')
        tableRow.innerHTML = 
        

       `
            
            
            <td>${dog.name}</td>
             <td>${dog.breed}</td>
              <td>${dog.sex}</td> 
              <td class="edit_dog" id="${dog.id}"> Edit Dog</td>
              </tr>
              `
              
      table.appendChild(tableRow);
    });
}

  document.addEventListener("click", (e) => {
    if (e.target.className == 'edit_dog'){
      const id = e.target.id
      fetch(`http://localhost:3000/dogs/${id}`)
      .then(resp => resp.json())
      .then(dog => editDog(dog));

   } })
  
   function editDog(dog){
     dogForm.name.value = dog.name
     dogForm.breed.value = dog.breed
     dogForm.sex.value = dog.sex
     id = dog.id
     updateDog(id)

   }

   function updateDog(id){
     document.addEventListener('submit', e => {

    fetch(`http://localhost:3000/dogs/${id}`, {
      'method': 'PATCH',
      'headers': {'Content-Type' : 'application/json'},
      'body' : JSON.stringify ({
        "name":`${dogForm.name.value}`,
         "breed":`${dogForm.breed.value}`,
         "sex":`${dogForm.sex.value}`
      })
    } )
    .then(resp => resp.json())
    .then(dog => renderDogs(dog))

   })
  }
})
