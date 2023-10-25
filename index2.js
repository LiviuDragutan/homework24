const promise1 = new Promise((res, rej) => res('promise1')) 
const promise2 = new Promise((res, rej) => res('promise2')) 
const promise3 = new Promise((res, rej) => res('promise3')) 


Promise.all([
    promise1,
    promise2,
    promise3
])

.then ((mess) => {
    console.log(mess)
})