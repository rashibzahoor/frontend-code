function getPostData(){
return new Promise((resolve, ) => {
    setTimeout(()=>{

resolve("data fetched sucessfully")
    },2000)
})

}

function getFetchData(){

    return new Promise((resolve, ) => {
        setTimeout(()=>{
    
    resolve("data fetched sucessfully in fetch data")
        },3000)
    })
    
}


async function getAfterData(){

try {
    console.log("fetched after data");
//     const post=await getPostData()
//   const fetch=await  getFetchData()
const[post,fetch]=await Promise.all([ getPostData(),getFetchData()])
  console.log(post);
  console.log(fetch);
  
    
} catch (error) {
    console.log("error fetched after data",error)
}
}
getAfterData()