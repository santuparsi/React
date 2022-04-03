// Reset parameters
// Note: rest parameters must appear at the end of the argument list

// ...args

function foo(a,b,...args){

}

foo(1,2, 'A', 'B','C')

function foo(a,...args, b){   // errr

}