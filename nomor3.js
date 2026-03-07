function processNumber(array){
    const len = array.length;
    const arrayBaru = [];
    for (let i = 0; i < len; i++) {
        cekModulus = array[i] % 2;
        if (cekModulus === 1){
            arrayBaru.push(array[i]); 
        }
    }
    if (arrayBaru === []){
        console.log("Ouput : 1");
    } else{
        let hasil = 1;
        arrayBaru.forEach(num => {
            hasil *= num;
        });
        console.log(hasil);
    }

}

processNumber([2,3,5,8]);