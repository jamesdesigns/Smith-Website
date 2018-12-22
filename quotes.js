var target = document.getElementById("mathQuote");

var quotes = [
    '<span class="customQuote">&#8220;</span>For mathematics is after all an anthropological phenomenon.<span class="customQuote">&#8221;</span>  <br><span style="margin-left: 25%"><em>&#8212;  Ludwig Wittgenstein, Remarks on the Foundations of Mathematics</em></span>',
    '<span class="customQuote">&#8220;</span>By studying the process of geometric thought we may hope to arrive at what is most essential in the human mind.<span class="customQuote">&#8221;</span>  <br><span style="margin-left: 25%"><em>&#8212; Henry Poincare, Science and Method</em></span>'
];

function newQuote() {
    var i = (Math.random() * quotes.length) | 0;
    target.innerHTML = quotes[i];
}

newQuote();

// var myArray = [
//     '<span class="customQuote">&#8220;</span>For mathematics is after all an anthropological phenomenon.<span class="customQuote">&#8221;</span>  <br><span style="margin-left: 25%"><em>&#8212;  Ludwig Wittgenstein, Remarks on the Foundations of Mathematics</em></span>',
//     '<span class="customQuote">&#8220;</span>By studying the process of geometric thought we may hope to arrive at what is most essential in the human mind.<span class="customQuote">&#8221;</span>  <br><span style="margin-left: 25%"><em>&#8212; Henry Poincare, Science and Method</em></span>'
// ];

// var randomQuote = myArray[Math.floor(Math.random()*myArray.length)];

// document.createElement('blockquote').innerHTML = randomQuote;