<<<<<<< HEAD
import React from 'react'
import axios from 'axios';
async function Tata() {
    
const options = {
  method: 'GET',
  url: 'https://coingecko.p.rapidapi.com/simple/price',
  params: {
    ids: '<REQUIRED>',
    vs_currencies: '<REQUIRED>'
  },
  headers: {
    'X-RapidAPI-Key': 'da108ce94amsh0ca073e855553cdp11e644jsn06ae4e3399ad',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

  return (
    <>
      <h3>uop</h3>
    </>
  )
}

export default Tata
=======
import React from 'react'
import axios from 'axios';
async function Tata() {
    
const options = {
  method: 'GET',
  url: 'https://coingecko.p.rapidapi.com/simple/price',
  params: {
    ids: '<REQUIRED>',
    vs_currencies: '<REQUIRED>'
  },
  headers: {
    'X-RapidAPI-Key': 'da108ce94amsh0ca073e855553cdp11e644jsn06ae4e3399ad',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

  return (
    <>
      <h3>uop</h3>
    </>
  )
}

export default Tata
>>>>>>> b3f96a0ef6476e5841931a470a6ee9d672ff2eac
