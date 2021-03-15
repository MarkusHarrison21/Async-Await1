// function getRandomNumber(){
//     return new Promise((resolve) => {
//       setTimeout(() => {
//           const rand = Math.floor(Math.random() * 1000);
//           console.log(rand);
//           resolve(rand);
//       }, 500);
//     });
//   }



// async function get() {
//     let random = await getRandomNumber();
//     console.log('Your Random Number Is: ' + random);
// }
// get();

// ---------------------------------------------------------------------
async function city(cityName) {
    fetch(`https://geocode.xyz/${cityName}?json=1`)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  city('miami')

  async function city(cityName) {
    fetch(`https://geocode.xyz/${cityName}?json=1`)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  city('charlotte')

 
  
  

// ----------------------------------------------------------------------

