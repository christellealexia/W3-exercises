let timeDuration = (t) => {
    return new Promise ((resolve,reject) => {
setTimeout(() => {
    if(t === 2000){
        reject('Time is not right')
    }
    else {
        resolve(`${t} is the best time`)
    }
},t)
})
}
let durations = [1000,2000,3000]
promises = durations.map(duration => {
    return timeDuration(duration).catch(e => e)
})
Promise.all(promises)
.then(data => console.log(data ))
.catch(error => console.log(error))