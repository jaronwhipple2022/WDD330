
// Array of links that will be updated as new assignments are completed.
const links = [
    {
      label: "Week 1",
      url: "week1/index.html"
    },
    {
      label: "Week 1",
      url: "week1/index.html"
    }
  ]

links.forEach(appendListItem);

function appendListItem(label, url) {
  document.getElementById("assignmentList").innerHTML += "<li>" + label + " <a href=" + url + "></li>" + "<br>";
  };

  //<li>Week 1:<a href="Week 1/index.html" target="_blank">Week 1</a></li>
//<li>Week 2:<a href="Week 2/index.html" target="_blank">Week 2 coming soon...</a></li>