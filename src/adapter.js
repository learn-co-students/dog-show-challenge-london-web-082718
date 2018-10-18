 
 class API {

    // Flow A: Step 1
    static getDogs() {
        return fetch("http://localhost:3000/dogs")
        .then(resp => resp.json())
    }

    static updateDog(data) {
        return fetch(`http://localhost:3000/dogs/${data.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: data.name,
                breed: data.breed,
                sex: data.sex
            })
        }).then(resp => resp.json())                   
    }

 }













// const getDogs = () =>
//     fetch("http://localhost:3000/dogs")
//         .then(resp => resp.json())

// // PATCH
// const updateDog = (data) => 
// fetch(`http://localhost:3000/dogs/${data.id}`, {
//     method: 'PATCH',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         name: data.name,
//         breed: data.breed,
//         sex: data.sex
//     })
//     }).then(resp => resp.json())        
