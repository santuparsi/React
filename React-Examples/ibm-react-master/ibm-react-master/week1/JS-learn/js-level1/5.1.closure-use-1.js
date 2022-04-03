

// demo : counter-module




const counter=(function init() {
    
    var count = 0;  // private

    // public    
    function doCount() {
        count++;
    }
    function getCount() {
        return count;
    }

    return {
        do: doCount,
        get: getCount
    };


})();

