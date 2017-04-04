$(function () {
  var ctx = document.getElementById("myChart-inst").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["vocal：27%", "Guitar：27%", "Bass：19%", "Drumms：17%", "Key & Synth：10%"],
      datasets: [{
        backgroundColor: [
          "#2ecc71",
          "#3498db",
          "#95a5a6",
          "#9b59b6",
          "#f1c40f",
          "#e74c3c",
          "#34495e"
        ],
        data: [27, 27, 19, 17, 10]
      }]
    }
});
var ctx = document.getElementById("myChart-fm").getContext('2d');
var myChart = new Chart(ctx, {
type: 'pie',
data: {
  labels: ["Girls", "Boys"],
  datasets: [{
    backgroundColor: [
      "#e74c3c",
      "#3498db",
    ],
    data: [42,58 ]
  }]
}
});
});
