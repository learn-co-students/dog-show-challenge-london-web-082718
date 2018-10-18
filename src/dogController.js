class DogController {

    // Flow A: Step 3
    static addDogs(dogs) {
        // debugger
        dogs.forEach(dog => this.addDog(dog))
    }

    // Flow A: Step 4
    static addDog(dogData) {
        const dog = new DogModel(dogData)
        this.dogs.push(dog)
        this.renderDog(dog)
    }   

    // Flow A: Step 5
    static renderDog(dog) {
        let dogEl = dog.render()
        this.tableEl.append(dogEl)
        // Add event listener
        const dogEditButton =  document.getElementById(`${dog.id}`) 
        dogEditButton.addEventListener('click', (e) => {
            editNameInput.value = `${dog.name}`
            editBreedInput.value = `${dog.breed}`
            editSexInput.value = `${dog.sex}`
            hiddenInput.id = `${dog.id}`
        })
    }

}

DogController.dogs = []
DogController.tableEl = document.getElementById('table-body')
