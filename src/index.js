const editFormEl = document.getElementById('dog-form')
const editNameInput = document.getElementById('dog-name')
const editBreedInput = document.getElementById('dog-breed')
const editSexInput = document.getElementById('dog-sex')
let hiddenInput = document.getElementById('hidden-field')

// Flow A: Step 2
API.getDogs()
    .then(dogs => DogController.addDogs(dogs))

editFormEl.addEventListener('submit', (e) => {
    event.preventDefault()
    
    const dog = {
        id: hiddenInput.id,
        name: editNameInput.value,
        breed: editBreedInput.value,
        sex: editSexInput.value
    }

    while (DogController.tableEl.firstChild) {
        DogController.tableEl.removeChild(DogController.tableEl.firstChild)
    }

    API.updateDog(dog) 
        .then(API.getDogs)
        .then(dogs => DogController.addDogs(dogs))
 
    e.target.reset()    

})










// const tableEl = document.getElementById('table-body')
// const editFormEl = document.getElementById('dog-form')
// const editNameInput = document.getElementById('dog-name')
// const editBreedInput = document.getElementById('dog-breed')
// const editSexInput = document.getElementById('dog-sex')
// let hiddenInput = document.getElementById('hidden-field')


// // Render All 
// const renderAllDogs = dogs => {
//     dogs.forEach(renderDog)
// }


// // Parse JSON to Render All
// getDogs()
//     .then(renderAllDogs)

// // Render one
// const renderDog = dog => {
//     const rowEl = document.createElement('tr')
//     rowEl.className = 'dog-row'
//     rowEl.innerHTML = `
//         <td>${dog.name}</td>
//         <td>${dog.breed}</td>
//         <td>${dog.sex}</td>
//         <td><button id=${dog.id}>Edit</button></td>
//     `
//     tableEl.append(rowEl)

//     document.getElementById(`${dog.id}`).addEventListener('click', (e) => {
//         editNameInput.value = `${dog.name}`
//         editBreedInput.value = `${dog.breed}`
//         editSexInput.value = `${dog.sex}`
//         hiddenInput.id = `${dog.id}`
//     })

// }

// editFormEl.addEventListener('submit', (e) => {
//     event.preventDefault()
    
//     const dog = {
//         id: hiddenInput.id,
//         name: editNameInput.value,
//         breed: editBreedInput.value,
//         sex: editSexInput.value
//     }
    
//     while (tableEl.firstChild) {
//         tableEl.removeChild(tableEl.firstChild)
//     }
    
//     updateDog(dog) 
//         .then(getDogs)
//         .then(renderAllDogs) 

//     e.target.reset()    

// })

