let xhr = new XMLHttpRequest()
xhr.open = ("POST",'',true)
xhr.setRequestHeader('content-type', 'application/json')

let myData = JSON.stringify({
    name : 'Chichi',
    country : 'Rwanda'
})
xhr.onload = function(){
    if(xhr.status >= 200 && xhr.status < 300){
        console.log('Success!', xhr.responseText)
    }
    else{
        console.log('Http error :', xhr.status)
    }
    xhr.onerror = function(){
        console.log('Network errror')
    }
}
xhr.send(myData);

