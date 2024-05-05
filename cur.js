let currency=document.querySelectorAll(".currency")
let input_currency=document.getElementById("input_currency")
let output_currency=document.getElementById("output_currency")
const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then((data) => data.json())
  .then((data) => {
    const entries=Object.entries(data)
	// console.log(entries)
	for(i=0;i<entries.length;i++){
		currency[0].innerHTML+=`<option value="${entries[i][0]}">${entries[i][0]}</option>`
		currency[1].innerHTML+=`<option value="${entries[i][0]}">${entries[i][0]}</option>`
	}
  });

  function convert(){
    let input_currency_val = input_currency.value
    if (currency[0].value != currency[1].value){
        const host = 'api.frankfurter.app'
        fetch(`https://${host}/latest?amount=${input_currency_val}&from=${currency[0].value}&to=${currency[1].value}`)
            .then((val)=>val.json())
            .then((val)=>{
                output_currency.value = Object.values(val.rates)[0]
            })
    }
    else{
        alert('Please select two different currencies. ')
    }
  }