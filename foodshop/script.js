
	let fruits = [];
	let addToCardButtons = document.getElementsByClassName('add-to-card')
	for (var i = 0; i < addToCardButtons.length; i++) {
	 addToCardButtons[i].addEventListener('click',addToCrd)
	}


	function addToCrd(event) {
		let count = document.getElementById('count')
		count.innerHTML = Number(count.innerHTML) + 1;

		let id = event.target.parentNode.id;
		let name = event.target.parentNode.getElementsByTagName('h3')[0].innerText; 
		let price = event.target.parentNode.getElementsByTagName('p')[0].innerText; 
		price = price.match(/\d+/)[0];
		let exsistFruit = fruits.find(item => item.id === Number(id));

		if (exsistFruit){
			++exsistFruit.amount;
		} else {

			let fruit = {
				id: Number(id),
				name: name,
				price: Number(price),
				amount: 1
			}

			fruits.push(fruit);
		}
		console.log(fruits);
	}

		//-----------------------clear card--------------------------
	var clearCard = document.getElementById('clearcard');
	clearcard.addEventListener('click',clean);

	function clean(event){
		let count = document.getElementById('count');
		count.innerHTML = '0';

		fruits = [];	
	}

		//------------------------------show card----------------------------
	let showCardButton = document.getElementById('show-card');
	showCardButton.addEventListener('click',showCard);

	function showCard(event){
		let rows = '';
		for (var i = 0; i < fruits.length; i++) {
			rows += '<tr>'+
				'<td>' + fruits[i].name + '</td>' +
				'<td>' + fruits[i].price + '</td>' +
				'<td><input id = "' + fruits[i].id + '" class="fruit-amount" type="number" min="0" value="'
				+ fruits[i].amount + '"/>' + '</td>' +
				'<td>= &#36;<span>'+ fruits[i].price * fruits[i].amount + '</span></td>' + '</tr>';	

		}

		let basket = document.getElementById('basket');
		basket.innerHTML = rows;

			//--------------------------------add input listener----------------------
		let fruitAmountInput = document.getElementsByClassName('fruit-amount');

		for (var i = 0; i < fruitAmountInput.length; i++) {
			fruitAmountInput[i].addEventListener('input',priceByFruit);


		}
			//---------------------------t0tal price------------------------
			totalPrice();
	}

	function priceByFruit(event) {
		let amount = event.target.value;
		let fruitId = event.target.id;
		let fruit = fruits.find(item => item.id === Number(fruitId)); // new amount - sting
		if(fruit){
			fruit.amount = amount
		}
		let fruitPrice = event.target.parentNode.parentNode; //input -> td -> tr

		fruitPrice.getElementsByTagName('span')[0].innerText =fruit.amount*fruit.price;

			//---------------------------t0tal price------------------------
		totalPrice();
	}
	function  totalPrice() {
		let totalPrice = document.getElementById('total-card');
	    let total = 0;
	    for (let i = 0; i < fruits.length; i++) {
			total += fruits[i].amount*fruits[i].price;
		}
	    totalPrice.innerText = total;
	}
		

