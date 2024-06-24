function myFetch(url){
    return new Promise((resolve,reject) => {
      let xhr = new XMLHttpRequest()
      xhr.open('Get',url,true)
      xhr.onreadystatechange = function(){
      if (xhr.readyState === 4 && xhr.Status === 200){
        return response.json()
      }
        else{
          throw new Error(`HTTP error! status:${response.status}`)
        }
      }
      xhr.send(); 
    })
    .then(data => resolve(data))
    .catch(error => reject(error))
  }
  myFetch('https://jsonplaceholder.typicode.com/todos/1')
  