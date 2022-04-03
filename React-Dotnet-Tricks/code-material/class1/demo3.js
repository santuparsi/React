// default parameters

// not using default parameter
// function say(message){
//     message = typeof message !== 'undefined'? message : 'default'
//     console.log(message);
// }

// uising default parameters
function say(message='default'){
    console.log(message)
}


say();
say(undefined);
say('Hello');