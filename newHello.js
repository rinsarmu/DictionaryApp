const array = [3,3]
// const array = [2,3,4,5]
const target = 6;
// let target = 7

const findIndices =(target, arr)=>{
    let indices = []
    for(let i =0; i< arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(i!==j){
                if(arr[i] + arr[j] === target){
                    indices.push(i)
                    indices.push(j)
                    break
                }
            }
        }
        if(indices.length){
            break
        }
    }
    return indices;
}
console.log(findIndices(target, array))
