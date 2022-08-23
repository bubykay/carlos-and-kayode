function findDigit(num){
  const arrNum = num.split('')
  let divitime = ''
  arrNum.map(n=>{
    if(Number(num) % Number(n)===0){
      divitime += '1'
    }
  })
  return divitime
}
