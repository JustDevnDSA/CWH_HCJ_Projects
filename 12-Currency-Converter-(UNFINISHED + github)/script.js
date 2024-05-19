console.log('CONVERT.KRLO WORKING FINE');

let quantity = document.getElementById('quantity').value
let from_currency = document.getElementById('from-currency').value
let to_currency = document.getElementById('to-currency').value



const currencyConvert = async (quantity,from_currency,to_currency) => {
  try {
    const url =
      `https://currency-converter241.p.rapidapi.com/convert?amount=${quantity}&from=${from_currency}&to=${to_currency}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "YOUR_API_KEY",
        "X-RapidAPI-Host": "YOUR_API_HOST",
      },
    };

    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    showw.innerHTML = result.total;
  } catch (error) {
    console.error(error);
  }
};
const cvt = document.getElementById('cvt')
cvt.addEventListener('click',(e)=>{
  e.preventDefault()
  // currencyConvert(quantity.value,'from-currency.value','to-currency.value');
  currencyConvert('10','USD','INR');
  // showw.innerText = 'Hi'
})
