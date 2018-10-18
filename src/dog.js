class DogModel {

    constructor(dogData) {
        this.id = dogData.id 
        this.name = dogData.name
        this.breed = dogData.breed
        this.sex = dogData.sex
    }

    // Flow A: Step 6
    render () {
        const trEl = document.createElement('tr')
        trEl.innerHTML = `
            <td>${this.name}</td>
            <td>${this.breed}</td>
            <td>${this.sex}</td>
            <td><button id=${this.id}>Edit</button></td>
        `  
        this.dogEl = trEl
        return trEl
    }

    editDog (data) {
        this.name = data.name 
        this.breed = data.breed
        this.sex = data.sex
        this.dogEl.innerHTML = this.render()
    }


}