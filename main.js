let fullAddress;

const resturant = {
    name: 'hillel',
    address: 'Ben-Yehoda 30',
    city: 'Tel-aviv',
    state: 'Israel',
    zipcode: '354633'
}
resturant.hight = 200;
fullAddress = `${resturant.address},${resturant.city},${resturant.state},${resturant.zipcode},${resturant.hight}`;


console.log(fullAddress);
