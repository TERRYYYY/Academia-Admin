const ctx = document.getElementById('lineChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: '# of Votes',
        data: [2050, 1900, 1800, 2800, 2000, 2500, 2600, 2450, 1950, 2300, 2900, 2500],
        borderWidth: 1,
        backgroundColor: [
          'rgba(85, 85, 85, 1)',
        ],
        borderColor: [
          'rgba(41, 155, 99)',
        ]
      }]
    },
    options: {
      responsive: true
    }
  });