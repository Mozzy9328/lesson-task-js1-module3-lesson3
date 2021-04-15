// Q1

const greet = (name = "James") => {return `Hello ${name}!`}

console.log(greet("Mustafa"));



  
const add = (a, b) => {
    return a + b;
  }

  console.log(add(5,3));


// Q2

//async function getCatFacts() {
   // try {
     // const response = await fetch("https://cat-fact.herokuapp.com/facts");
      //const results = await response.json();
      //console.log(results.length);
    //} catch (error) {
     // console.log(error);
   // }
 // }

  const url = "https://cat-fact.herokuapp.com/facts"

  fetch(url)
  .then(response => {response.json()})
  .then(results => {console.log(results.length)})
  .catch(error => {console.log(error)})