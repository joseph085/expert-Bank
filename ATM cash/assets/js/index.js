 // Balansı və əməliyyatları saxlamaq üçün dəyişənlər
 var balance = 1000;
    
 // Balansı göstərən funksiya
 function showBalance() {
   document.getElementById("balance").value = balance;
 }

 // Çıxarış əməliyyatı
 function withdraw() {
   var amount = parseInt(document.getElementById("amount").value);
   if (amount > balance) {
     alert("Balansınızdan çıxarmaq istədiyiniz məbləğ balansınızdan böyük!");
   } else {
     balance -= amount;
     showBalance();
     alert(amount + " AZN çıxarıldı. Yeni balans: " + balance + " AZN");
   }
 }

 // Yatırma əməliyyatı
 function deposit() {
   var amount = parseInt(document.getElementById("amount").value);
   balance += amount;
   showBalance();
   alert(amount + " AZN yatırıldı. Yeni balans: " + balance + " AZN");
   
   function handleChange(input) {
  if (input.value < 0) input.value = 0;
  if (input.value > 8) input.value = 8;
}
 }

 // Balansı göstərmək üçün səhifə yükləndikdən sonra çağırır
 window.onload = function() {
   showBalance();
 };
 
