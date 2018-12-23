'use strict'

var scroll = new SmoothScroll('a[href*="#"]');

var ctx = document.getElementById("skillsChart");
var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Angular',
            'JavaScript',
            'jQuery',
            'MySQL',
            'Node.js',
            'Task Runners',
            'Python',
            'Django',
            'MongoDB',
            'C#',
            'SQLServer',
            'MVC5',
            'NetCore',
            'Git & GitHub'],
        datasets: [{
            label: 'Skills',
            borderColor: '#3385ff',
            pointBackgroundColor: '#3385ff',
            data: [75, 90, 60, 60, 50, 60, 50, 20, 30, 80, 70, 60, 60, 90]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: true,
        scale: {
            ticks: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

