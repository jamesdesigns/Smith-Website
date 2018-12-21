(function() {
    "use strict";

    var el = document.getElementById("myQuote");

    var quotes = [
        ["Stay Hungry, Stay Foolish.", "Steve Jobs"],
        ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
        ["Argue with idoits, and you become an idiot.", "Oscar Wilde"]
    ];

    function rand(xs) {
        return xs.slice(0).sort(function(){
            return .5 - Math.random();
        });
    }
    function quote(q) {
        return "<p>&ldquo;" + q[0] +"&rdquo; &emdash; <em>" + q[1] +"</em></p>";
    }
    el.innerHTML = rand(myQuote).map(quote).join('');
})