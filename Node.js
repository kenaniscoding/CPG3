// Import Node.js core modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create web server
const server = http.createServer(function (req, res) {
    // Serve the index.html file for the root URL
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), function (err, data) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Internal Server Error');
                res.end();
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }
        });
    } else if (req.url === '/portfolio') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
<html lang="en">
<head>
  <title>Bootstrap 5 Website Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <style>
    .fakeimg {
      height: 200px;
      background: #dfdfdf;
    }
    .title-bg {
      background-color: #6f8469; /* Change to your desired color */
    }
    .nav-bg {
      background-color: #131313f4
    }
  </style>
</head>
            <body>
            <nav class="navbar navbar-expand-sm nav-bg navbar-dark">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" href="http://localhost:8081" id="profileLink">Profile</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-bs-toggle="dropdown">
          Professional
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="http://localhost:8000/portfolio">Portfolio</a>
          <a class="dropdown-item" href="http://localhost:8000/article1">Articles 1</a>
          <a class="dropdown-item" href="http://localhost:8000/article2">Articles 2</a>
          <a class="dropdown-item" href="http://localhost:8000/article3">Articles 3</a>
          <a class="dropdown-item" href="http://localhost:8000/article4">Articles 4</a>
          <a class="dropdown-item" href="http://localhost:3010">Articles 5</a>
          <a class="dropdown-item" href="http://localhost:8000/services">Services</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
                <h1 style="color:green;">Portfolio</h1>
                <a href="https://www.geeksforgeeks.org/web-technology/">
                Read Web Technology content
                </a>
<div class="mt-5 p-4 bg-dark text-white text-center">
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam sunt nesciunt repudiandae excepturi error commodi minus veritatis reiciendis officia aut! Id laborum iusto voluptatem amet quae fugiat soluta aperiam debitis!</p>
</div>
            </body></html>`);
        res.end();
    } else if (req.url === '/article1') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
<html lang="en">
<head>
  <title>Bootstrap 5 Website Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <style>
    .fakeimg {
      height: 200px;
      background: #dfdfdf;
    }
    .title-bg {
      background-color: #6f8469; /* Change to your desired color */
    }
    .nav-bg {
      background-color: #131313f4
    }
    .video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    max-width: 100%;
    background: #000;
  }
  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
  </style>
</head>
            <body>
            <nav class="navbar navbar-expand-sm nav-bg navbar-dark">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" href="http://localhost:8081" id="profileLink">Profile</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-bs-toggle="dropdown">
          Professional
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="http://localhost:8000/portfolio">Portfolio</a>
          <a class="dropdown-item" href="http://localhost:8000/article1">Articles 1</a>
          <a class="dropdown-item" href="http://localhost:8000/article2">Articles 2</a>
          <a class="dropdown-item" href="http://localhost:8000/article3">Articles 3</a>
          <a class="dropdown-item" href="http://localhost:8000/article4">Articles 4</a>
          <a class="dropdown-item" href="http://localhost:3010">Articles 5</a>
          <a class="dropdown-item" href="http://localhost:8000/services">Services</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
<div class="p-5 title-bg text-white text-center">
  <h1>Kenan Banal</h1>
  <p>Hello! I'm Kenan Banal, a 2024 Undergraduate Student at De La Salle University, Manila, Philippines</p>
</div>
<div class="container mt-5" id="contentContainer">
<div class="row">
      <div class="col-sm-4">
      <h2>ARTICLE 1</h2>
      <h5>Title description, Dec 7, 2020</h5>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Quidem dolorem rem maiores ullam. 
      Non nesciunt porro et, 
      ipsa, quam a quo nam maxime 
      nihil consequatur deleniti natus, reprehenderit corrupti fugit.</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Quidem dolorem rem maiores ullam. 
      Non nesciunt porro et, 
      ipsa, quam a quo nam maxime 
      nihil consequatur deleniti natus, reprehenderit corrupti fugit.</p>
      </div>
       <div class="col-sm-8">.
       
      <div class="video-container">
  <iframe src="https://www.youtube.com/embed/Tx1XIm6q4r4?si=9dYGya9qseW0DdFS" frameborder="0" allowfullscreen></iframe>
</div>
       
       </div>
      </div>
</div>

<div class="mt-5 p-4 bg-dark text-white text-center">
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam sunt nesciunt repudiandae excepturi error commodi minus veritatis reiciendis officia aut! Id laborum iusto voluptatem amet quae fugiat soluta aperiam debitis!</p>
</div>

            </body></html>`);
        res.end();
    } 
    else if (req.url === '/article2') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(`
          <html lang="en">
<head>
  <title>Bootstrap 5 Website Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script type="text/javascript">
      // Load the Google Charts library
      google.charts.load('current', { packages: ['corechart'] });

      // Callback to draw the charts once the Google Charts library is loaded
      google.charts.setOnLoadCallback(drawCharts);

      function drawCharts() {
        // Fetch the data using AJAX
        $.getJSON('data.json', function (data) {
          drawBarChart(data.barChart);
          drawPieChart(data.pieChart);
          drawLineChart(data.lineChart);
        });
      }

      function drawBarChart(data) {
        var dataTable = google.visualization.arrayToDataTable(data);
        var options = {
          title: 'Bar Chart Example',
          hAxis: { title: 'Year' },
          vAxis: { title: 'Sales' },
        };
        var chart = new google.visualization.ColumnChart(document.getElementById('bar_chart'));
        chart.draw(dataTable, options);
      }

      function drawPieChart(data) {
        var dataTable = google.visualization.arrayToDataTable(data);
        var options = {
          title: 'Pie Chart Example',
        };
        var chart = new google.visualization.PieChart(document.getElementById('pie_chart'));
        chart.draw(dataTable, options);
      }

      function drawLineChart(data) {
        var dataTable = google.visualization.arrayToDataTable(data);
        var options = {
          title: 'Line Chart Example',
          hAxis: { title: 'Year' },
          vAxis: { title: 'Sales' },
        };
        var chart = new google.visualization.LineChart(document.getElementById('line_chart'));
        chart.draw(dataTable, options);
      }
    </script>
  <style>
    .fakeimg {
      height: 200px;
      background: #dfdfdf;
    }
    .title-bg {
      background-color: #6f8469; /* Change to your desired color */
    }
    .nav-bg {
      background-color: #131313f4
    }
  </style>
</head>
            <body>
            <nav class="navbar navbar-expand-sm nav-bg navbar-dark">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" href="http://localhost:8081" id="profileLink">Profile</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-bs-toggle="dropdown">
          Professional
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="http://localhost:8000/portfolio">Portfolio</a>
          <a class="dropdown-item" href="http://localhost:8000/article1">Articles 1</a>
          <a class="dropdown-item" href="http://localhost:8000/article2">Articles 2</a>
          <a class="dropdown-item" href="http://localhost:8000/article3">Articles 3</a>
          <a class="dropdown-item" href="http://localhost:8000/article4">Articles 4</a>
          <a class="dropdown-item" href="http://localhost:3010">Articles 5</a>
          <a class="dropdown-item" href="http://localhost:8000/services">Services</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
<div class="p-5 title-bg text-white text-center">
  <h1>Kenan Banal</h1>
  <p>Hello! I'm Kenan Banal, a 2024 Undergraduate Student at De La Salle University, Manila, Philippines</p>
</div>
<div class="container mt-5" id="contentContainer">
<div class="row">
      <div class="col-sm-4">
      <h2>ARTICLE 2</h2>
      <h5>Title description, Dec 7, 2020</h5>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Quidem dolorem rem maiores ullam. 
      Non nesciunt porro et, 
      ipsa, quam a quo nam maxime 
      nihil consequatur deleniti natus, reprehenderit corrupti fugit.</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Quidem dolorem rem maiores ullam. 
      Non nesciunt porro et, 
      ipsa, quam a quo nam maxime 
      nihil consequatur deleniti natus, reprehenderit corrupti fugit.</p>
      </div>
       <div class="col-sm-8">.
       
       <div id="bar_chart" style="width: 900px; height: 500px;"></div>
       
       </div>
      </div>
</div>

<div class="mt-5 p-4 bg-dark text-white text-center">
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam sunt nesciunt repudiandae excepturi error commodi minus veritatis reiciendis officia aut! Id laborum iusto voluptatem amet quae fugiat soluta aperiam debitis!</p>
</div>

<script>
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

// Set Data
const data = google.visualization.arrayToDataTable([
  ['Contry', 'Mhl'],
  ['Italy',55],
  ['France',49],
  ['Spain',44],
  ['USA',24],
  ['Argentina',15]
]);

// Set Options
const options = {
  title:'World Wide Wine Production'
};

// Draw
const chart = new google.visualization.BarChart(document.getElementById('myChart'));
chart.draw(data, options);

}
</script>
            </body></html>`);
    res.end();
} 
else if (req.url === '/article3') {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`
                <html lang="en">
<head>
  <title>Bootstrap 5 Website Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://www.gstatic.com/charts/loader.js"></script>
  <style>
    .fakeimg {
      height: 200px;
      background: #dfdfdf;
    }
    .title-bg {
      background-color: #6f8469; /* Change to your desired color */
    }
    .nav-bg {
      background-color: #131313f4
    }
  </style>
</head>
            <body>
            <nav class="navbar navbar-expand-sm nav-bg navbar-dark">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" href="http://localhost:8081" id="profileLink">Profile</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-bs-toggle="dropdown">
          Professional
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="http://localhost:8000/portfolio">Portfolio</a>
          <a class="dropdown-item" href="http://localhost:8000/article1">Articles 1</a>
          <a class="dropdown-item" href="http://localhost:8000/article2">Articles 2</a>
          <a class="dropdown-item" href="http://localhost:8000/article3">Articles 3</a>
          <a class="dropdown-item" href="http://localhost:8000/article4">Articles 4</a>
          <a class="dropdown-item" href="http://localhost:3010">Articles 5</a>
          <a class="dropdown-item" href="http://localhost:8000/services">Services</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
<div class="p-5 title-bg text-white text-center">
  <h1>Kenan Banal</h1>
  <p>Hello! I'm Kenan Banal, a 2024 Undergraduate Student at De La Salle University, Manila, Philippines</p>
</div>
<div class="container mt-5" id="contentContainer">
<div class="row">
      <div class="col-sm-4">
      <h2>ARTICLE 3</h2>
      <h5>Title description, Dec 7, 2020</h5>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Quidem dolorem rem maiores ullam. 
      Non nesciunt porro et, 
      ipsa, quam a quo nam maxime 
      nihil consequatur deleniti natus, reprehenderit corrupti fugit.</p>
      <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Quidem dolorem rem maiores ullam. 
      Non nesciunt porro et, 
      ipsa, quam a quo nam maxime 
      nihil consequatur deleniti natus, reprehenderit corrupti fugit.</p>
      </div>
       <div class="col-sm-8">.
       
       <div id="bar_chart" style="width: 9px; height: 5px;"></div>
       
       </div>
      </div>
</div>

<div class="mt-5 p-4 bg-dark text-white text-center">
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam sunt nesciunt repudiandae excepturi error commodi minus veritatis reiciendis officia aut! Id laborum iusto voluptatem amet quae fugiat soluta aperiam debitis!</p>
</div>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script type="text/javascript">
      // Load the Google Charts library
      google.charts.load('current', { packages: ['corechart'] });

      // Callback to draw the charts once the Google Charts library is loaded
      google.charts.setOnLoadCallback(drawCharts);

      function drawCharts() {
        // Fetch the data using AJAX
        $.getJSON('data.json', function (data) {
          drawBarChart(data.barChart);
          drawPieChart(data.pieChart);
          drawLineChart(data.lineChart);
        });
      }

      function drawBarChart(data) {
        var dataTable = google.visualization.arrayToDataTable(data);
        var options = {
          title: 'Bar Chart Example',
          hAxis: { title: 'Year' },
          vAxis: { title: 'Sales' },
        };
        var chart = new google.visualization.ColumnChart(document.getElementById('bar_chart'));
        chart.draw(dataTable, options);
      }

      function drawPieChart(data) {
        var dataTable = google.visualization.arrayToDataTable(data);
        var options = {
          title: 'Pie Chart Example',
        };
        var chart = new google.visualization.PieChart(document.getElementById('pie_chart'));
        chart.draw(dataTable, options);
      }

      function drawLineChart(data) {
        var dataTable = google.visualization.arrayToDataTable(data);
        var options = {
          title: 'Line Chart Example',
          hAxis: { title: 'Year' },
          vAxis: { title: 'Sales' },
        };
        var chart = new google.visualization.LineChart(document.getElementById('line_chart'));
        chart.draw(dataTable, options);
      }
    </script>
            </body></html>`);
  res.end();
} 
    
    else if (req.url === '/services') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
<html lang="en">
<head>
  <title>Bootstrap 5 Website Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <style>
    .fakeimg {
      height: 200px;
      background: #dfdfdf;
    }
    .title-bg {
      background-color: #6f8469; /* Change to your desired color */
    }
    .nav-bg {
      background-color: #131313f4
    }
  </style>
</head>
            <body>
            <nav class="navbar navbar-expand-sm nav-bg navbar-dark">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" href="http://localhost:8000" id="profileLink">Profile</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-bs-toggle="dropdown">
          Professional
        </a>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="http://localhost:8000/portfolio">Portfolio</a>
          <a class="dropdown-item" href="http://localhost:8000/article1">Articles 1</a>
          <a class="dropdown-item" href="http://localhost:8000/article2">Articles 2</a>
          <a class="dropdown-item" href="http://localhost:8000/article3">Articles 3</a>
          <a class="dropdown-item" href="http://localhost:8000/article4">Articles 4</a>
          <a class="dropdown-item" href="http://localhost:3010">Articles 5</a>
          <a class="dropdown-item" href="http://localhost:8000/services">Services</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
                <h1 style="color:green;">Services</h1>
                <a href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/">
                Read Algorithm analysis and Design Content
                </a>
<div class="mt-5 p-4 bg-dark text-white text-center">
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam sunt nesciunt repudiandae excepturi error commodi minus veritatis reiciendis officia aut! Id laborum iusto voluptatem amet quae fugiat soluta aperiam debitis!</p>
</div>
            </body></html>`);
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Invalid Request!');
        res.end();
    }
});

// Server object listens on port 8000
server.listen(8000, () => console.log('Server running on port 8000'));
