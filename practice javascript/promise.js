function fetchData() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let sucess = false
            if (sucess) {
                resolve("Data Fatched sucess")

            } else {
                reject("error fetched sucessfully")
            }

        },3000)

    })


}
fetchData()
.then((data)=>{
    console.log(data);
    

})

.catch((error)=>{
console.log(error);

})
