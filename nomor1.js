numArr =[]
function triangle(num){
    if (typeof num && num > 0 ){
    for (let i = 1; i <= num; i++) {
      numArr.push(i)
      console.log(numArr.join(" "))

    }
    }
    else{
    console.log("Parameter Harus angka dan harus nomor positif")
  }
}

  triangle(2)

