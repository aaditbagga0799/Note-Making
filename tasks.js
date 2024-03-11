var xValues = ["to-do", "doing", "done"];
var yValues = [4, 0, 0];
var barColors = ["#a69ff3"];
new Chart("barChart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues,
            barThickness: 40,
            //   labels:task-count
        }]
    },
    
});
var xValues = ["to-do", "doing", "done"];
var yValues = [4, 0, 0];
var barColors = ["#a69ff3"];
new Chart("doughnutchart", {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
    },

});