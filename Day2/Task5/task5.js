Array.prototype.myMap = function(callBack)
{
    let newArr = []

    for (let i=0; i<this.length; i++)
    {
        if(this.hasOwnProperty(i))
        {
            newArr.push(callBack(this[i], i, this))
        }
    }
    return newArr
}

let arr = [1, 4, 9, 16]

let mapped = arr.myMap(x => x*2)

console.log(mapped)