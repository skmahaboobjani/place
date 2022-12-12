//  hof are a function which takes another function as an argument are called hof

// map
// filter
// reduce


// let arr= [1,2,3,4]
// let num=arr.map((x)=>
// {
//     return x*x
// })

// console.log(arr)
// console.log(num)


// let arr=[1,2,3,4]

// let num=arr.filter((x)=>
// {
//     if(x%2!=0)
//     {
//         return x
//     }
// })
// console.log(arr)
// console.log(num)


let arr=[1,2,3,4]

let numbers=arr.reduce((x,ele)=>
{

    // return x+ele
    if(x>ele)
    {
        return x
    }
    else{
        return x=ele
    }

})

console.log(numbers)


