// 6. Communist Censorship
// Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], 
// replace every letter of the word Program with *, so the output would be 
// ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for
//  any word of your choice

function communist(arr, targetWord){
    let result = [];
    let stars = '';
    for (let i = 0; i <arr.length; i++){
        if (targetWord === arr[i]){
            for (let j=0; j < targetWord.length; j++){
                stars += '*'
            }
            result.push(stars)
                
            } else {
                result.push(arr[i])
            }
        }
    return result
}
let x = ['Man', 'I','Love','The','Matrix','Program']

console.log(communist(x, 'Program'))

