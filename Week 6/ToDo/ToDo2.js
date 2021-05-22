var myApp = new function () {
    // An array of JSON objects with values.
    this.arrPack = [{ 'Mark': '', 'task#': '', 'task': ''}]
    this.col = [];

this.createTable = function () {
    for (var i = 0; i < this.arrPack.length; i++) {
        for (var key in this.arrPack[i]) {
            if (this.col.indexOf(key) === -1) {
                this.col.push(key);
            }
        }
    }
}
}
//https://www.encodedna.com/javascript/dynamically-add-checkbox-to-a-table-cell-using-javascript.htm