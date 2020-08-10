
/*let first = ["Gerard", "Robert", "Angelina"];
let last = ["Butler", "Downey", "Jolie"];
/*
let a = new Array(); 
for (let i = 0; i < first.length ; i++) {
  a[i] = new Array()
  for (let j = 0; j < last.length; j++) {
    a[i][j] = '[' + i + ', ' + j + ']'
  }
}

console.log(`${a}`);

/*let intertwined = first.map(function (x, i) { 
   // return [x, last[i]] 
   return { categories: x, catid: last[i] }
});

console.log(`${intertwined}`);
//function intertwine() {}

let frequencies = [];
let applicationName = [];
*/  
/*let matrixified = [];
function matrixify( source, count )
{
  
    let tmp;
    // iterate through the source array
    for( let i = 0; i < source.length; i++ )
    {
        // use modulous to make sure you have the correct length.
        if( i % count == 0 )
        {
            // if tmp exists, push it to the return array
            if( tmp && tmp.length ) matrixified.push(tmp);
            // reset the temporary array
            tmp = [];
        }
        // add the current source value to the temp array.
        tmp.push(source[i])
    }
    // return the result
    return matrixified;
}

console.log(`${matrixified}`);