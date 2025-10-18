// Imposta la data di scadenza (Anno, Mese-1, Giorno, Ora, Minuto)
// Esempio: 22 Giugno 2027, 16:00:00. Ricorda: i mesi partono da 0 (Gennaio)
var countDownDate = new Date("Jun 22, 2027 16:00:00").getTime();

// Aggiorna il conto alla rovescia ogni 1 secondo
var x = setInterval(function() {

  // Ottieni la data e l'ora di oggi
  var now = new Date().getTime();

  // Trova la distanza tra adesso e la data di scadenza
  var distance = countDownDate - now;

  // Calcoli di tempo per giorni, ore, minuti e secondi
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output il risultato nell'elemento con id="countdown"
  document.getElementById("countdown").innerHTML = 
    days + "<span>giorni</span> " + 
    hours + "<span>ore</span> " + 
    minutes + "<span>minuti</span> " + 
    seconds + "<span>secondi</span> ";

  // Se il conto alla rovescia è finito, scrivi un testo
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "🎉 SI SONO SPOSATI! 🎉";
  }
}, 1000);
