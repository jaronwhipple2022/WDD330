
// Array of links that will be updated as new assignments are completed.
const links = [
    {
      label: "Week 1",
      url: "Week 1/index.html"
    },
    {
      label: "Week 1",
      url: "Week 1/notes.html"
    },
    {
      label: "Week 2",
      url: "Week 2/notes.html"
    },
    {
      label: "Week 3",
      url: "Week 3/notes.html"
    }
  ]

links.forEach(appendListItem);

function appendListItem(links) {
  document.getElementById("assignmentList").innerHTML += "<li>" + links.label + "<a href='" + links.url + "'> assignment</a></li>";
  };
/*
for(const [value,value] of links.entries()) {
  document.getElementById("assignmentList").innerHTML += "<li>" + value + " <a href=" + value + "></li>" + "<br>";
  };
*/
  //<li>Week 1:<a href="Week 1/index.html" target="_blank">Week 1</a></li>
//<li>Week 2:<a href="Week 2/index.html" target="_blank">Week 2 coming soon...</a></li>