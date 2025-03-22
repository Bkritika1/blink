//every 
//return true if every element of array gives true
//  for some function or else false
console.log([2,4,,6,8].every((el)=>el%2==0))


//some 
//return true if some function of array give true
//  for some function. else return false
    console.log([1,2,3,4].some((el)=>el%2==0));


//reduce 
// reducer across all elements of the array is a single value.
//example
   console.log([1,2,3,4].reduce((result,el)=>(result*el)));
//example
    var nums=[3,5,7,9]
    var totalSum=nums.reduce((res,el)=>{
        console.log(res);
        return res+el;
    })
    console.log(totalSum)

// findIndex() method of Array instances returns the index of the first element in an array 
// that satisfies the provided testing function.
//  If no elements satisfy the testing function, -1 is returned.
            const arr = [5, 12, 8, 130, 44];
            const isLargeNumber = (element) => element > 13;
            console.log(arr.findIndex(isLargeNumber));
// output: 3

// find() method, which returns the first element that satisfies 
// the testing function (rather than its index).
        const arry= [5, 12, 8, 130, 44];
        const found = arry.find((element) => element > 10);
        console.log(found);
        //  output: 12
        polyfillsss  of map, reduce, and the 