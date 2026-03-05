numArr = []
function buatRentang(num1 , num2){

    for (let i = num1; i <= num2; i++) {
      numArr.push(i)
    }
    console.log(numArr.join(", "))

  }

buatRentang(2,5)