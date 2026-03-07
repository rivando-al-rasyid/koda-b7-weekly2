const fetchData = (status) => {
    return new Promise((resolve, reject) => {
        if (status) {
            setTimeout(() => {
                resolve("Data berhasil disimpan");
            }, 3000);
        } else {
            reject("Gagal mengambil data");
        }
    });
};
// memberi status fetchData apakah berhasil/gagal
fetchData(true)
    .then(result => console.log(result))//menunjukan ouput untuk yang berhasil
    .catch(error => console.error(error));//menunjukan ouput untuk yang gagal


(async () => {
    try {
        const result = await fetchData(true);// mendapat data apabila berhasil / true
        console.log(result); // menampilkan result /hasil
    } catch (error)  { // catch menangkap error untuk di tampilkan apabila terjadi error / gagal
        console.error(error);
    }
})();

async () => {

};