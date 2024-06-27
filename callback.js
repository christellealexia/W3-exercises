function fetching(url, callback){
    setTimeout(() => {
      const data = {name :"John", age : 30};
      callback(data)
    },2000)
  }
  function displayInfo(data){
    console.log(`Name: ${data.name}, Age: ${data.age}`)
  }
  
  fetching("https://api.example.com/data", displayInfo);