'use strict'

window.onload = function() {
    document.getElementById("loading-mask").style.display = "none";
}

/**
 * I18N
 */

let languages = Array.from(document.getElementsByClassName('language'));
let xhttp = new XMLHttpRequest();
let langDocument = {};

languages.forEach(function (value, index) {
    languages[index].addEventListener('click', function () {
        switchLanguage(this.dataset.lang);
    });
});
xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        langDocument = JSON.parse(this.responseText);
        processLangDocument();
    }
};
function switchLanguage(language) {
    xhttp.open("GET", "assets/i18n/" + language + ".json", true);
    xhttp.overrideMimeType("application/json");
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();
}
function processLangDocument() {
    let tags = document.querySelectorAll('span,img,a,label,li,option,h1,h2,h3,h4,h5,h6,p,b');
    Array.from(tags).forEach(function (value, index) {
        let key = value.dataset.langkey;
        if (langDocument[key]) value.innerText = langDocument[key];
    });
}

/*
    Scroll Animation
*/

let scroll = new SmoothScroll('a[href^="#about"]');


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
        autoPlayDirection: 'forward',
        autoPlayPause: 1000 * 6
    })
});