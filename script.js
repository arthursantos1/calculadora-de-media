function calcularMedia() {
  var notaPrimeiroBimestre = parseFloat(
    document.getElementById("primeirobimestre").value
  );
  var notaSegundoBimestre = parseFloat(
    document.getElementById("segundobimestre").value
  );
  var notaTerceiroBimestre = parseFloat(
    document.getElementById("terceirobimestre").value
  );
  var notaQuartoBimestre = parseFloat(
    document.getElementById("quartobimestre").value
  );
  var notaMediaFinal =
    (notaPrimeiroBimestre +
      notaSegundoBimestre +
      notaTerceiroBimestre +
      notaQuartoBimestre) /
    4;

  var notaFixada = notaMediaFinal.toFixed(1);
  var resultado = document.getElementById("resultado");

  if (notaFixada >= 5) {
    resultado.innerHTML = notaFixada + " Parabéns você foi aprovado!!";
  } else resultado.innerHTML = notaFixada + " Você está reprovado!!";
}