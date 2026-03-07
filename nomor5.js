const getDataFromServer = (status, callback) => {
    if (status) {
        setTimeout(() => {
            const products = [
                'Product 1',
                'Product 2',
                'Product 3'
            ];
            callback(products, null);
        }, 3000);
    } else {
        const err = new Error('Failed to fetch data');
        callback(null, err);
    }
};
const dataProces = (data, error) => {
    try {
        if (error) {
            throw error;
        }
        console.log('Data berhasil diterima:', data);
    } catch (error) {
        console.error('Terjadi kesalahan:', error);

    }
};

console.log('Mengambil data...');
getDataFromServer(true, dataProces);
