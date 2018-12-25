'use strict'


/*
    Scroll Animation
*/

var scroll = new SmoothScroll('a[href^="#about"]');


/**
 * ChartsJs
 */

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
            'C#',
            'SQLServer',
            'NetCore',
            'Git & GitHub'],
        datasets: [{
            label: 'Skills',
            borderColor: '#3385ff',
            pointBackgroundColor: '#3385ff',
            data: [75, 90, 60, 60, 50, 60, 50, 80, 70, 70, 90]
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


/**
 * Timelinr
 */


$(function () {
    $().timelinr({
        orientation: 'vertical',
        issuesSpeed: 300,
        datesSpeed: 100,
        autoPlay: 'true',
        autoPlayDirection: 'forward'
    })
});