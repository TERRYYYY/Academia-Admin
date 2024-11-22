const ctx = document.getElementById('doughnut').getContext('2d');

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Academic', 'Non-academic', 'Administrator', 'Others'],
      datasets: [{
        label: 'Employees',
        data: [42, 12, 8, 6, 2000, 2500, 2600, 2450, 1950, 2300, 2900, 2500],
        borderWidth: 1,
        backgroundColor: [
          'rgba(41, 155, 99, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(120, 46, 139, 1)',
          
        ],
        borderColor: [
          'rgba(41, 155, 99, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(120, 46, 139, 1)',
        ]
      }]
    },
    options: {
      responsive: true
    }
  });