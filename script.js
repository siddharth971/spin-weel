const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");


//object that stores of minimum and maximum angle of a value

const roValue = [
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

let colorCodes = ['#2b0c44', '#500f5f', '#580746', '#210436', '#2d084e', '#340436'];

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
                font: { size: 24 }

            }
        }
    }
});

//display value button

const valueGenerater = (angeValue) => {
    for (let i of roValue) {
        //if the angle value is between min and max then display it 
        if (angeValue >= i.maxDegree && angeValue <= i.maxDegree) {
            finalValue.innerHTML = `<p>Value: ${i.value}</p>`;
            spinBtn.disabled = false;
            break;
        }
    }
}


//spinner count 
let count = 0;

//100 rotation result for animation and last rotation result


let resultValue = 101;
//Start spinning
spinBtn.addEventListener("click", () => {
    spinBtn.disabled = true;
    //empty final value
})
