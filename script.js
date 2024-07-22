const { plugins } = require("chart.js");

const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");

const finalValue = document.getElementById("final-value");


//object that stores of minimum and maximum angle of a value

const retationValue = [
    { minDegree: 0, maxDegree: 30, value: 2 },
    { minDegree: 31, maxDegree: 90, value: 1 },
    { minDegree: 91, maxDegree: 150, value: 6 },
    { minDegree: 151, maxDegree: 210, value: 5 },
    { minDegree: 211, maxDegree: 270, value: 4 },
    { minDegree: 271, maxDegree: 330, value: 3 },
    { minDegree: 331, maxDegree: 360, value: 2 },
];

//size of each peace

const data = [16, 16, 16, 16, 16, 16];


//background color for each piace

let colorCodes = ['#FF5733', '#33FF57', '#5733FF', '#FFFF33', '#33FFFF', '#FF33FF'];

//create chart 

let myChart = new Chart(wheel, {
    //plugins for displaying text on pie chart
    plugins: [ChartDataLabels],
    //chart type pie
    type: "pie",
    data: {
        labels: [1, 2, 3, 4, 5, 6],
        datasets: [
            {
                backgroundColor: colorCodes,
                data: data,
            },
        ],
    },
    options: {
        //responsive chart
        responsive: true,
        animation: { duration: 0 },
        plugins: {
            //hide tooltip and legend
            tooltip: false,
            legend: {
                display: false,
            },
            //display labels inside pie chart
            datalabels: {
                color: "white",
                formatter: (_, context) =>
                    context.chart.data.labels[context.dataIndex],
                font: { size: 24 },

            }
        }
    }
});