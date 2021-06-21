
// Array of links that will be updated as new assignments are completed.
const links = [
    {
      label: "Week 1 Index",
      url: "Week 1/index.html"
    },
    {
      label: "Week 1 Notes",
      url: "Week 1/notes.html"
    },
    {
      label: "Week 2 Notes",
      url: "Week 2/notes.html"
    },
    {
      label: "Week 3 Notes",
      url: "Week 3/notes.html"
    },
    {
      label: "Week 4 Notes",
      url: "Week 4/notes.html"
    },
    {
      label: "Week 4 TicTacToe",
      url: "Week 4/tic-tac-toe.html"
    },
    {
      label: "Week 5 Notes",
      url: "Week 5/notes.html"
    },
    {
      label: "Week 6 ToDo",
      url: "Week 6/ToDo/ToDo.html"
    },
    {
      label: "Week 7 notes",
      url: "Week 7/notes.html"
    },
    {
      label: "Week 8 notes",
      url: "Week 8/notes.html"
    },
    {
      label: "Week 9 notes",
      url: "Week 9/notes.html"
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