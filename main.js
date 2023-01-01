//Ex0.1
// let studant = {
//     name: 'roy',
//     age:23,
//     grade: 10,
//     classes: ['chimstery','geograpy','pysics']
// }
// console.log(studant.name);

// //Ex0.2
// let book = {
//     title: 'my book',
//     author: 'Nathan',
//     year: '1995',
//     genre: 'Horor',
//     publisher: 'Hartez',
//     pages: 2003,
//     isbh: 'dsfgs',
// }

// book.rating = 200;
// console.log(book.rating);

// //Ex0.3
// const car = {
//     make: "Tesla",
//      model: "Model S",
//      year: 2020,
//      color: "Red",
//      features: ["Autopilot", "Ludicrous Mode", "Supercharging"]
//    };
//    console.log(car.model);

   //Ex0.4
const store = {
    name: 'my store',
    location: 'jerusalem',
    categories: ['grocheries','cars','electricty'],
    products: [
        {name:'tv',price:400,quantity:5},
        {name:'BMW',price:600,quantity:7},
        {name:'appels',price:20,quantity:2}
    ]
}
function totalPrice(productName = '') {
    for(let i = 0;i<store.products.length;i++){
        if(store.products[i].name === productName) {
return store.products[i].price*store.products[i].quantity
        }
    }
   
}
console.log(totalPrice('BMW'))

//Ex1.1
const person = {
    age:20,
    height:180,
    weight:80,
}
function makeList() {
    console.log(Object.values(person));
}
makeList();

//Ex1.2
const person1 = {
    age:20,
    height:180,
    weight:80,
}
function objLength() {
   let size = Object.keys(person1).length
   console.log(size);
}
objLength();

//Ex1.3
let client = "Betty";
const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "35$",
    other : {
        paid : false,
        meansOfPayment : ["cash", "creditCard"]
    }
}

function displayGroceries() {
    console.log(groceries.fruits);
}
displayGroceries();

function cloneGroceries() {
    let user = client;
    let shopping = groceries;
    console.log(user);
    console.log(shopping);
}
cloneGroceries();

//Ex2
let booksList = [
    book1 = {title:'hey',author:'hillel',alredyRead:false},
    book2 = {title:'Earth',author:'roy',alredyRead:true},
    book3 = {title:'apple',author:'jon',alredyRead:false}
]
function logMyBook () {
    for(let i = 0;i<booksList.length;i++) {
        let title = booksList[i].title;
        let author = booksList[i].author;
        let alredyRead = booksList[i].alredyRead;
        if(alredyRead==true) {
            console.log(`You already read the ${title} by ${author}`)
        }
        else {
            console.log(`You still need to to read the ${title} by ${author}`)
        }
    }
}
logMyBook();

//Ex3
const myPenguin = {
    name: 'jontanh',
    origin: 'alska',
    author: 'hillel',
    canFly: false,
    size: 40,
}
    console.log('hello, i am'+' ' + myPenguin.name +'my size is' +' ' + myPenguin.size);
//Ex3.3
myPenguin.canFly = false;
//Ex3.4
myPenguin.chirp = function() {
    console.log("CHIRP CHIRP! Is this what penguins sound like?")
}
//Ex3.5?????

//Ex3.6????

//Ex3.7
myPenguin.name = 'Penguin McPenguinFace';
console.log('hello, i am'+' ' + myPenguin.name +'my size is' +' ' + myPenguin.size);
myPenguin.fly = function() {
    if(myPenguin.canFly == true) {
        console.log('i can fly!');
    }
    else {
        console.log('No flying for me!');
    }
}
myPenguin.fly();

//Ex3.11
myPenguin.canFly = true;

//Ex3.12
myPenguin.fly();

for(let key in myPenguin) {
    console.log(key);
}


for (const key in myPenguin) {

    console.log(`${key}: ${myPenguin[key]}`);
}

//Ex4.1
myPenguin.favoriteFoods = ['apples','ornges','cheese'];

//Ex4.2
console.log(myPenguin.favoriteFoods[1]);

//Ex4.3
let firstFavFood = myPenguin.favoriteFoods[0];

//Ex4.4 
myPenguin.favoriteFoods.push('milk');

//Ex4.5
console.log(myPenguin.favoriteFoods.length);

//Ex4.6
myPenguin.favoriteFoods[myPenguin.favoriteFoods.length-1] = 'pineapple'

//Ex4.7
let lastFavFood = myPenguin.favoriteFoods[myPenguin.favoriteFoods.length-1];
console.log(lastFavFood);

//Ex4.8
for(let i = 0;i<myPenguin.favoriteFoods.length;i++) {
    console.log(myPenguin.favoriteFoods[i]);
}

//Ex5.1
const gunter = {
    name: "Gunter",
    origin: "Adventure Time",
    canFly: false,
    sayHello: function () {
      console.log("QUACK!!!");
    },
  };
  
  const ramon = {
    name: "Ramón",
    origin: "Happy Feet",
    canFly: false,
    sayHello: function () {
      console.log("Estoy encantado de conocerle.");
    },
  };
  
  const fred = {
    name: "Fred",
    origin: "Sitting Ducks",
    canFly: false,
    sayHello: function () {
      console.log("Hi there!");
    },
  };

  let penguines = [gunter,ramon,fred];
  
  //Ex5.2
  console.log(penguines[0]);

  //Ex5.3
  let secondPenguin = penguines[1];

  //Ex5.4
  console.log(penguines[penguines.length-1].name);

  //Ex5.5
  penguines.push(myPenguin);
  console.log(penguines[penguines.length-1].name);

  //Ex5.6
  console.log(penguines.length);

  //Ex5.7
  penguines[0].canFly = true;

  //Ex5.8
  penguines[0].sayHello();

  //Ex5.9
  for(let i = 0;i<penguines.length;i++) {
    console.log(penguines[i].name);
  }

  //Ex5.10
//   for(let i = 0;i<penguines.length;i++) {
//     penguines[i].sayHello()
//   }

//Ex5.11

// for(let i = 0;i<penguines.length;i++) {
//     penguines[i].numberOfFeet = 2;
// }

// //Ex5.12
// for(let i = 0;i<penguines.length;i++) {
//     if(penguines[i].canFly === true) {
//         console.log(`${penguines[i].name} can fly!!`)
//     }
// }

// //Ex6
// const store1 = {
//     name:'the A store',
//     location: 'Tel-aviv',
//     categories: ['food','electricty','animals'],
//     products: [
//         tv = {name:'sumsung',price:500,quantity:40},
//         cars = {name:'opel',price:300,quantity:40},
//         lemon = {name:'yellowLime',price:500,quantity:40}
//     ]
// }
// function totalProductPrice(product) {
//     let resualt =  store1.products.find(p => p === product).price * store1.products.find(p => p === product).quantity;
//     return resualt;
//  }
 
//  console.log(totalProductPrice(cars))


//Ex7
const school = {
    name: 'pola',
    location: 'jerusalem',
    students: [
        student1 = {name:'guy',age:20,grade:4,classes:['math','geograpy','biolagy']},
        student2 = {name:'roy',age:14,grade:6,classes:['gym','pysics','biolagy']},
        student3 = {name:'dan',age:32,grade:7,classes:['math','geograpy','bible']}
    ],
       teachers: [
        teacher1 = {name:'robert',age:40,grade:5,classes:['math','analistics']},
        teacher2 = {name:'jon',age:40,grade:5,classes:['math','gym','bible']},
        teacher3 = {name:'tomer',age:40,grade:5,classes:['geograpy','biolagy']}
       ]
}
function checkTheSchool(studentName, teacherName) {
    let studentClasses = school.students.find(s => s.name === studentName).classes;
    let teacherClasses = school.teachers.find(t => t.name === teacherName).classes;
    let flag = false;
    for(let i = 0; i < studentClasses.length; i++) {
      for(let j = 0; j < teacherClasses.length; j++) {
          if(studentClasses[i] === teacherClasses[j]) {
              flag = true;
              break;
          }
      }
    }
    return flag;
  }
  
  console.log(checkTheSchool('roy', 'robert'));

//Ex8
// const library = {
//     name: "Springfield Public Library",
//     location: "Springfield",
//     books: [
//       {
//         title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         year: 1925,
//         genre: "Novel",
//         publisher: "Charles Scribner's Sons",
//         pages: 180,
//         isbn: "978-0-7432-6555-2",
//       },
//       {
//         title: "To Kill a Mockingbird",
//         author: "Harper Lee",
//         year: 1960,
//         genre: "Novel",
//         publisher: "J.B. Lippincott & Co.",
//         pages: 281,
//         isbn: "978-0-044-93349-2",
//       },
//       {
//         title: "The Catcher in the Rye",
//         author: "J.D. Salinger",
//         year: 1951,
//         genre: "Novel",
//         publisher: "Little, Brown and Company",
//         pages: 214,
//         isbn: "978-0-316-76953-3",
//       },
//       {
//         title: "Pride and Prejudice",
//         author: "Jane Austen",
//         year: 1813,
//         genre: "Horor",
//         publisher: "T. Egerton",
//         pages: 279,
//         isbn: "978-0-141-19031-4",
//       },
//     ],
//   };
//   function titleOfTheGenre( myGenre = '') {
//     let resualt = [];
//         for(let i = 0;i<library.books.length;i++) {
//         if(myGenre===library.books[i].genre) {
//             resualt.push(library.books[i].title);
//         }
       
//     }
//     return resualt;
//   }
// console.log(titleOfTheGenre('Novel'));