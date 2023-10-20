var ready = (callback) => {
	if (document.readyState != "loading") callback();
	else document.addEventListener("DOMContentLoaded", callback);
}

const form = document.getElementById('cardForm');

// inputs

const cardName = document.getElementById('userName');
const cardNumber = document.getElementById('cardNumber');
const cardMonth = document.getElementById('month');
const cardYear = document.getElementById('year');
const cardCVC = document.getElementById('cvc');

// error messages 

const errorName = document.getElementById('errorName');
const errorCard = document.getElementById('errorCard');
const errorDate = document.getElementById('errorDate');
const errorCVC = document.getElementById('errorCvc');

// spans

const spanNumber = document.getElementById('spanNumber')
const spanName = document.getElementById('spanName')
const spanMonth = document.getElementById('spanMonth')
const spanYear = document.getElementById('spanYear')
const spanCVC = document.getElementById('spanCVC')

let isValidCardName = false;
let isValidCardNumber = false;
let isValidCardMonth = false;
let isValidCardYear = false;
let isValidCardCVC = false;

const submit = document.getElementById('submit');
submit.addEventListener('click', validate);

ready(() => {

	const events = ['focus', 'keyup', 'keypress'];

	new Cleave('#cardNumber', {
		creditCard: true,
		delimiter: ' ',
		numericOnly: true,
		blocks: [4, 4, 4, 4]
	});

	new Cleave('#month', {
		date: true,
		datePattern: ['m'],
		numericOnly: true,
	});

	new Cleave('#year', {
		date: true,
		datePattern: ['y'],
		numericOnly: true,
	});

	new Cleave('#cvc', {
		numericOnly: true,
		blocks: [3],
	});

	events.forEach((evt) => {

		// validation - card name

		cardName.addEventListener(evt, () => {

			if (cardName.value == undefined || cardName.value.trim().length <= 0 || !/^[A-Z ]+$/i.test(cardName.value)) {
				cardName.classList.add('border-red');
				cardName.innerHTML = "Name must not be empty";
				errorName.classList.remove('error');
				isValidCardName = false;
				return;
			}

			cardName.classList.remove('border-red');
			errorName.classList.add('error');
			spanName.innerHTML = cardName.value;
			isValidCardName = true;
		});

		// validation - card number

		cardNumber.addEventListener(evt, () => {
			if (cardNumber.value == undefined || cardNumber.value.trim().length <= 0) {
				cardNumber.classList.add('border-red');
				errorCard.classList.remove('error');
				isValidCardNumber = false;
				return;
			}

			cardNumber.classList.remove('border-red');
			errorCard.classList.add('error');
			isValidCardNumber = true;
			spanNumber.innerHTML = cardNumber.value;
			return;

		});

		// validation - month

		cardMonth.addEventListener(evt, () => {
			if (cardMonth.value == undefined || cardMonth.value.trim().length <= 1) {
				spanMonth.innerHTML = '00';
				cardMonth.classList.add('border-red');
				errorDate.classList.remove('error');
				isValidCardMonth = false;
				return;
			}
			date = cardMonth.value;
			spanMonth.innerHTML = date;
			cardMonth.classList.remove('border-red');
			errorCard.classList.add('error');
			isValidCardMonth = true;

			return;
		});

		// validation - year

		cardYear.addEventListener(evt, () => {
			if (cardYear.value == undefined || cardYear.value.trim().length <= 1) {
				spanYear.innerHTML = '00';
				cardYear.classList.add('border-red');
				errorDate.classList.remove('error');
				isValidCardYear = false;
				return;
			}
			date = cardYear.value;
			spanYear.innerHTML = date;
			cardYear.classList.remove('border-red');
			errorDate.classList.add('error');
			isValidCardYear = true;

			return;
		});

		// validation - cvc

		cardCVC.addEventListener(evt, () => {

			spanCVC.innerHTML = cardCVC.value;

			if (cardCVC.value == undefined || cardCVC.value.trim().length <= 0) {
				cardCVC.classList.add('border-red');
				errorCVC.innerHTML = "Can't be blank";
				errorCVC.classList.remove('error');
				spanCVC.innerHTML = '000';
				isValidCardCVC = false;
				return;
			}
			if (cardCVC.value.trim().length <= 2) {
				errorCVC.innerHTML = "CVC must be 3 digits";
				errorCVC.classList.remove('error');
				isValidCardCVC = false;
				return;
			}
			if (cardCVC.value.trim().length == 3) {
				cardCVC.classList.remove('border-red');
				errorCVC.classList.add('error');
				errorCVC.innerHTML = '';
				isValidCardCVC = true;
				return;
			}
		});
	});
});

function validate() {

	if (
		isValidCardName &&
		isValidCardNumber &&
		isValidCardMonth &&
		isValidCardYear &&
		isValidCardCVC
	) {
		// hide form, show modal
		document.getElementById('modal').classList.remove('hidden');
		document.getElementById('cardForm').classList.add('hidden');
	}
}

//reset form 

function reset() {
	document.getElementById('modal').classList.add('hidden');
	document.getElementById('cardForm').classList.remove('hidden');

	cardName.value = ""
	cardNumber.value = ""
	cardMonth.value = ""
	cardYear.value = ""
	cardCVC.value = ""


	isValidCardName = false
	isValidCardNumber = false
	isValidCardMonth = false
	isValidCardYear = false
	isValidCardCVC = false

	spanName.innerHTML = "JANE APPLESSED"
	spanNumber.innerHTML = "0000 0000 0000 0000"
	spanYear.innerHTML = "000"
	spanMonth.innerHTML = "00"
	spanCVC.innerHTML = "000"
}


