function myFetch(url){
    return new Promise((resolve,reject) => {
      let xhr = new XMLHttpRequest()
      xhr.open('Get',url,true)
      xhr.onreadystatechange = function(){
      if (xhr.status >= 200 && xhr.Status <= 300){
        resolve (xhr.responseText())
      }
        else{
          reject(`HTTP error! status:${xhr.status}`)
        }
      }
      xhr.send(); 
    })
    
  }
  myFetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => resolve(data))
    .catch(error => reject(error))