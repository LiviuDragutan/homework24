// let prom = new Promise ((resolve, reject) => {
//     let i = 7 + 8
//     if(i === 16) {
//         resolve('nicejob')
//     } else {
//         reject('should never touch a computer')
//     }
// })

// prom.then ((message) => {
//     console.log('You know that you ' + message)
// }).catch((message) => {
//     console.log('Yes you ' + message)
// }). finally(() => {
//     console.log('NO way')
// })



const userFootbal = false
const userBasket = true

function identifyPlayer()   {
    return new Promise ((resolve, reject) => {

        if (userFootbal) {
            reject({
                name: 'Messi',
                message: 'Right foot'
            })
        } else if (userBasket) {
            reject({
                name: 'Kobe',
                message: 'Left hand'
            })
        } else {
            resolve('in the world')
        }
    }) 
}

identifyPlayer()
.then(message => console.log('Are the best ' + message))
.catch(error => console.log(`${error.name}: ${error.message}`))
.finally(() => console.log('Yep'))

