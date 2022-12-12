// let and var const are used to declare the variables in javascript

// let is a block scope
// var is a function scope
// const is a block scope


function mabu()
{
    let x=10
  var m=5
    if(x>2)
    {
        let y=20
        console.log(y)
        console.log("yes")
        console.log(m)
    }
    else{
        console.log("no")
    }
}
mabu()


let a=10
a=20
console.log(a)