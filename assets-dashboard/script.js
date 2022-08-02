function toggler(){ 
    document.getElementById('sidebar').classList.toggle('active');
}

var client;
var access_token;

function initClient() {
    client = google.accounts.oauth2.initTokenClient({
    client_id: '439070870397-pulp9ogpins8l40jjl2ub2sakk4c1jm9.apps.googleusercontent.com',
    scope: 'https://www.googleapis.com/auth/analytics.readonly',
    callback: (tokenResponse) => {
        access_token = tokenResponse.access_token;
        console.log(tokenResponse)
    },
    });
}

function getToken() {
    client.requestAccessToken();
}

function loadReports(token) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://analyticsreporting.googleapis.com/v4/reports:batchGet');
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.setRequestHeader('Authorization', 'Bearer ' + token);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.responseText);
            console.log(xhr.responseText);
            const reportsDone = JSON.stringify(xhr.responseText.result, null, 2);
            console.log(reportsDone);
            document.getElementById("displayPageview").innerHTML = reportsDone;
        }
    }
    xhr.send(JSON.stringify({
    reportRequests: [
        {
        viewId: '266884203',
        dateRanges: [
            {
            startDate: '7daysAgo',
            endDate: 'today'
            }
        ],
        metrics: [
            {
                expression: 'ga:pageviews'
            }
        ]
        }
    ]
    }));
}

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