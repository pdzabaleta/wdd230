google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
var data = google.visualization.arrayToDataTable([
['Category', 'Amount'],
['Membership Registrations', 1200],
['Business Listings', 950],
['Events Organized', 780],
['Networking Meetings', 620],
['Training Workshops', 550],
['Community Outreach Programs', 480],
['Partnerships Established', 420],
['Job Placements', 360],
['Publications Released', 300],
['Volunteer Engagements', 250]
]);

  var options = {
    width: 400,
    legend: { position: 'none' },
    chart: {
      title: 'Top 10 Achievements by Category',
      subtitle: 'Ranked from most to Fewest' },

    
    bar: { groupWidth: "90%" }
  };

  var chart = new google.charts.Bar(document.getElementById('top_x_div'));
  // Convert the Classic options to Material options.
  chart.draw(data, google.charts.Bar.convertOptions(options));
};