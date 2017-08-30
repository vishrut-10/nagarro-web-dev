var i = 1;

function setTimeoutSync(n, callback)
{
    setTimeout(function() {
        console.log("Count: " + i);

        if (i <= 10) {
            setTimeoutSync(n, increment);
        }

        callback();

    }, n);
}

var increment = function()
{
    i = i + 1;
}

setTimeoutSync(20, increment);
