// const guessTheOutPut =() => {
//     setTimeout(() => console.log("timeout"), 100);
  
//     setTimeout(() => console.log("apuuuuu"), 0);
  
//     setTimeout(() => console.log("hahha"), 0);
  
//     setTimeout(() => console.log("yaaaaa"));
  
//     setImmediate(() => console.log("immediate"));
  
//     Promise.resolve().then(() => console.log("promise"));
  
//     console.log('where do i fall')
//   }
//   console.log(guessTheOutPut());

// console.log('test')

// const calc =() => {
//   for(var i = 1; i <= 11; i++){
//     setTimeout(() => {
//        console.log(i)
//      }, 1000)
//   }
// }
setImmediate(() => {
  console.log('Immediate');
});

setTimeout(() => {
  console.log('Timeout');
}, 0);

console.log('Log');