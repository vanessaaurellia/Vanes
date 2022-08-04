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
  
const ctx = document.getElementById('myChart').getContext('2d');
const ctx2 = document.getElementById('myChart2').getContext('2d');
const ctx3 = document.getElementById('myChart3').getContext('2d');
const ctx4 = document.getElementById('myChart4').getContext('2d');
const ctx5 = document.getElementById('myChart6').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
        ],
        datasets: [{
            label: 'Page view',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgb(241, 135, 0)',
            borderColor: 'rgb(241, 135, 0)'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
        ],
        datasets: [{
            label: 'Page view',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgb(241, 135, 0)',
            borderColor: 'rgb(241, 135, 0)'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
        ],
        datasets: [{
            label: 'Page view',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgb(241, 135, 0)',
            borderColor: 'rgb(241, 135, 0)'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const myChart4 = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
        ],
        datasets: [{
            label: 'Page view',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgb(241, 135, 0)',
            borderColor: 'rgb(241, 135, 0)'
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const myChart5 = new Chart(ctx5, {
    type: 'doughnut',
    data: {
        labels: [
            'January',
            'February',
            'March',
        ],
        datasets: [{
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(118, 183, 67, 1)',
                'rgba(249, 206, 48, 1)',
                'rgba(224, 79, 26, 1)'
            ],
            hoverOffset: 4
        }]
    }
});