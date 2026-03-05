number = 2
// console.log(typeof number)
numArr = []
function ceking(num){
    if (typeof number && number > 0 ){
    for (let i = 1; i <= number; i++) {
      numArr.push(i)
      console.log(numArr.join(" "))

    }
}
    else{
  console.log("Parameter Harus angka dan harus nomor positif")
  }

}

ceking(number)

