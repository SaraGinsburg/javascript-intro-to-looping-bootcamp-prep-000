function forLoop(array){

for (var i=0;i<25;i++){
  if (i!==1){
    array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)

  } else {
    array.push("I am 1 strange loop.")
  }
}
return array;
}


function whileLoop(n){

  while(n>0){
    console.log(n)
      n--
  }
  return "done"
}

function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array.pop()
  } while (maybeTrue() && array.length>0);
  return array;
}
