function catAndMouse(x,y,z) {

  let stepA = Math.abs(x - z);
  let stepB = Math.abs(y - z);

  if(stepA - stepB){
    return (stepA < stepB) ? "Cat A": "Cat B";
  }
  return "Mouse C";
}
