function toggler(){ 
    document.getElementById('sidebar').classList.toggle('active');
}

/*$.ajax({
    method: 'GET',
    url: 'database/data.json',
    success: function(response) {
        document.getElementById("displayPageview").innerHTML = parseInt(response.reports[0].data.rows[0].metrics[0].values[0]).toLocaleString();
        document.getElementById("displayUser").innerHTML = parseInt(response.reports[0].data.rows[0].metrics[0].values[1]).toLocaleString();
        document.getElementById("displayTotalSession").innerHTML = parseInt(response.reports[0].data.rows[0].metrics[0].values[2]).toLocaleString();
        document.getElementById("displayAvgVisit").innerHTML = parseInt(response.reports[0].data.rows[0].metrics[0].values[3]);
    }
})*/
  

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(241, 135, 0)',
      borderColor: 'rgb(241, 135, 0)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config
);

const myChart3 = new Chart(
    document.getElementById('myChart3'),
    config
);

const myChart4 = new Chart(
    document.getElementById('myChart4'),
    config
);

const myChart5 = new Chart(
    document.getElementById('myChart5'),
    config
);