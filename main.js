var ready=callback=>{"loading"!=document.readyState?callback():document.addEventListener("DOMContentLoaded",callback)};const form=document.getElementById("cardForm"),cardName=document.getElementById("userName"),cardNumber=document.getElementById("cardNumber"),cardMonth=document.getElementById("month"),cardYear=document.getElementById("year"),cardCVC=document.getElementById("cvc"),errorName=document.getElementById("errorName"),errorCard=document.getElementById("errorCard"),errorDate=document.getElementById("errorDate"),errorCVC=document.getElementById("errorCvc"),spanNumber=document.getElementById("spanNumber"),spanName=document.getElementById("spanName"),spanMonth=document.getElementById("spanMonth"),spanYear=document.getElementById("spanYear"),spanCVC=document.getElementById("spanCVC");let isValidCardName=!1,isValidCardNumber=!1,isValidCardMonth=!1,isValidCardYear=!1,isValidCardCVC=!1;const submit=document.getElementById("submit");function validate(){isValidCardName&&isValidCardNumber&&isValidCardMonth&&isValidCardYear&&isValidCardCVC&&(document.getElementById("modal").classList.remove("hidden"),document.getElementById("cardForm").classList.add("hidden"))}function reset(){document.getElementById("modal").classList.add("hidden"),document.getElementById("cardForm").classList.remove("hidden"),cardName.value="",cardNumber.value="",cardMonth.value="",cardYear.value="",cardCVC.value="",isValidCardName=!1,isValidCardNumber=!1,isValidCardMonth=!1,isValidCardYear=!1,isValidCardCVC=!1,spanName.innerHTML="JANE APPLESSED",spanNumber.innerHTML="0000 0000 0000 0000",spanYear.innerHTML="000",spanMonth.innerHTML="00",spanCVC.innerHTML="000"}submit.addEventListener("click",validate),ready((()=>{new Cleave("#cardNumber",{creditCard:!0,delimiter:" ",numericOnly:!0,blocks:[4,4,4,4]}),new Cleave("#month",{date:!0,datePattern:["m"],numericOnly:!0}),new Cleave("#year",{date:!0,datePattern:["y"],numericOnly:!0}),new Cleave("#cvc",{numericOnly:!0,blocks:[3]}),["focus","keyup","keypress"].forEach((evt=>{cardName.addEventListener(evt,(()=>{if(null==cardName.value||cardName.value.trim().length<=0||!/^[A-Z ]+$/i.test(cardName.value))return cardName.classList.add("border-red"),cardName.innerHTML="Name must not be empty",errorName.classList.remove("error"),void(isValidCardName=!1);cardName.classList.remove("border-red"),errorName.classList.add("error"),spanName.innerHTML=cardName.value,isValidCardName=!0})),cardNumber.addEventListener(evt,(()=>{if(null==cardNumber.value||cardNumber.value.trim().length<=0)return cardNumber.classList.add("border-red"),errorCard.classList.remove("error"),void(isValidCardNumber=!1);cardNumber.classList.remove("border-red"),errorCard.classList.add("error"),isValidCardNumber=!0,spanNumber.innerHTML=cardNumber.value})),cardMonth.addEventListener(evt,(()=>{if(null==cardMonth.value||cardMonth.value.trim().length<=1)return spanMonth.innerHTML="00",cardMonth.classList.add("border-red"),errorDate.classList.remove("error"),void(isValidCardMonth=!1);date=cardMonth.value,spanMonth.innerHTML=date,cardMonth.classList.remove("border-red"),errorCard.classList.add("error"),isValidCardMonth=!0})),cardYear.addEventListener(evt,(()=>{if(null==cardYear.value||cardYear.value.trim().length<=1)return spanYear.innerHTML="00",cardYear.classList.add("border-red"),errorDate.classList.remove("error"),void(isValidCardYear=!1);date=cardYear.value,spanYear.innerHTML=date,cardYear.classList.remove("border-red"),errorDate.classList.add("error"),isValidCardYear=!0})),cardCVC.addEventListener(evt,(()=>(spanCVC.innerHTML=cardCVC.value,null==cardCVC.value||cardCVC.value.trim().length<=0?(cardCVC.classList.add("border-red"),errorCVC.innerHTML="Can't be blank",errorCVC.classList.remove("error"),spanCVC.innerHTML="000",void(isValidCardCVC=!1)):cardCVC.value.trim().length<=2?(errorCVC.innerHTML="CVC must be 3 digits",errorCVC.classList.remove("error"),void(isValidCardCVC=!1)):3==cardCVC.value.trim().length?(cardCVC.classList.remove("border-red"),errorCVC.classList.add("error"),errorCVC.innerHTML="",void(isValidCardCVC=!0)):void 0)))}))}));