

var itemList = [];

function createItems() {
        i += 1
        var table = document.getElementById("myTable");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        var check = document.createElement('input');
        check.setAttribute('type', 'checkbox');
        cell1.appendChild(check);
        cell2.innerHTML = i;
        cell3.innerHTML = document.getElementById("itemName").value;
        counter += 1
    }

function deleteItem() {
  document.getElementById("myTable").deleteRow(-1);
}