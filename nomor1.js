const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });

numArr = []

rl.question('angka ', (number) => {

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

  rl.close();
});
