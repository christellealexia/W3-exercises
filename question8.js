// Create a function called fetchusertodos
//Use promise.all to fetch 
// I need results of each input individually
// I will add a key of todos in each  object of user 

function fetchUserTodos(){
let users = fetch('https://jsonplaceholder.typicode.com/users') 
users.then(response => {
    if(!response.ok){

    throw new Error (`HTTp error! : ${response.status}`)
    } else{
        return response.json()
    }
})
let todos = fetch('https://jsonplaceholder.typicode.com/todos') 
todos.then(response => {
    if(!response.ok){

    throw new Error (`HTTp error! : ${response.status}`)
    } else{
        return response.json()
    }
})
 let userTodos = Promise.all([users,todos]);
 return userTodos;
}
fetchUserTodos()
.then(data => console.log(data)) 
.catch(error => console.log(error))
    
