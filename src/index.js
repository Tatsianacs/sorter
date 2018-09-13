function Sorter() {
    this.arr = [];
    this.length = 0;
    this.comparator = function sortNumber(a, b) {
        return a - b;
    }
    this.add = function(item) {
        this.arr.push(item);
        this.length++;
    }
    this.at = function(index){
        return this.arr[index];
    }
    this.toArray = function() {
        return this.arr.slice(0);
    }
    this.sort = function(arrIndexes) {
        var arrayToSort = [];
        var i;
        for (i = 0; i < arrIndexes.length; i++) {
            arrayToSort.push(this.arr[arrIndexes[i]]);
        }
        arrayToSort.sort(this.comparator);
        for (i = 0; i < arrIndexes.length; i++) {
            this.arr[arrIndexes[i]] = arrayToSort[i];
        }
    }
    this.setComparator = function(compareFunction) {
        this.comparator = compareFunction;
    }




}
module.exports = Sorter;