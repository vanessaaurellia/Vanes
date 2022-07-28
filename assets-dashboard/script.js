function toggler(){ 
    document.getElementById('sidebar').classList.toggle('active');
}

// Replace with your view ID.
var VIEW_ID = '266884203';

// Query the API and print the results to the page.
// function queryReports() {
//   gapi.client.request({
//     path: '/v4/reports:batchGet',
//     root: 'https://analyticsreporting.googleapis.com/',
//     method: 'POST',
//     body: {
//       reportRequests: [
//         {
//           viewId: VIEW_ID,
//           dateRanges: [
//             {
//               startDate: '7daysAgo',
//               endDate: 'today'
//             }
//           ],
//           metrics: [
//             {
//               expression: 'ga:sessions'
//             }
//           ]
//         }
//       ]
//     }
//   }).then(displayResults, console.error.bind(console));
// }

function displayResults(response) {
  var formattedJson = JSON.stringify(response.result, null, 2);
  document.getElementById('query-output').value = formattedJson;
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