
function Search(word){
    low = 0;
    high = 194205;
    var res = BinarySearch(Dict, word, low, high);
    return res;
}

function BinarySearch(arr, x, low, high){
    while(low <= high){
        var mid = Math.floor(low + (high - low)/2);
        if(x == arr[mid]){
            return 1;
        }
        else if(x > arr[mid]){
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }
    return 0;
}