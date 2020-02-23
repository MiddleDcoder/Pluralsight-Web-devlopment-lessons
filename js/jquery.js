/* separated javascript implemented with jquery */

    // The ready function is there to say give me your code that you want execute once the document is ready.

    $(document).ready(function () {



// var resultlist = jQuery("#resultlist");
// resultlist.text("this is from jQuery");

//but you can try $ dollar sign for shorter calling the jquery object

//innerHTML is for javascript
// html or text is for jQuery

//Test Jquery
var testClick = $("#testDiv");
testClick.html("This is a Clicked Test");

var toggleAnchorTest = $(".clickMe");
toggleAnchorTest.on("click", function(){
    testClick.toggle(500);

    if(toggleAnchorTest.text() == "Click Me") toggleAnchorTest.text("Clicked Anchor Test");
    else toggleAnchorTest.text("Click Me");

});



var resultlist = $("#resultlist");
resultlist.text("this is from jQuery");

var toggleButton = $("#toggleButton");
toggleButton.on("click", function () {
resultlist.toggle(500);

if (toggleButton.text() == "Hide") toggleButton.text("Show");
else toggleButton.text("Hide");

});


// for navigation
// var listItems = $("header nav li").text("Testing jQuery");
// var listItems = $("header nav li").css("font-weight", "bold");
var listItems = $("header nav li");
listItems.css("font-weight", "bold");

// $("header nav li:first").css("font-size", "18px");

listItems.filter(":first").css("font-size", "18px");
  

//jQuery working with forms
$("#gitHubSearchForm").on("submit", function (){

var searchPhrase = $("#searchPhrase").val();
var useStars = $("#useStars").val();
var langChoice = $("#langChoice").val();

if(searchPhrase){

    resultlist.text("Performing search...");

var gitHubSearch = "https://api.github.com/search/repositories?q=" + encondeURIComponent(searchPhrase);
// searchPhrase;
// encondeURIComponent(searchPhrase);
if(langChoice != "ALL" ){
    gitHubSearch += "+language:" + encondeURIComponent(langChoice);
    // gitHubSearch += "+language:" + langChoice;
}

if(useStars){
    gitHubSearch += "&sort=starts";
}

var gitHubSearch = "https://api.github.com/search/repositories?q=jquery+language:javascript&sort=starts";


$.get(gitHubSearch, function (r){
  console.log(r.items.length);
   displayResults(r.items);
});

                }

    return false;

});



//Networking with jQuery
// for offline
/*var gitHubSearch = "http://127.0.0.1:5500/js/repositories.json"; */

// var githubSearch = "https://api.github.com/search/repositories?q=jquery+language:javascript$sort=starts";


// $.get(githubSearch, function (r){
//   console.log(r.items.length)
//    displayResults(r.items);
// });

// //promise sysntax this is for lower version of jQuery try to study what function to use in new jQuery
// $.get(githubSearch)
//     .success(function (r) {
//     // console.log(r.items.length)
//        displayResults(r.items);
//      })
//      .fail(function (err){
//          console.log("Failed to query Github");
//      })
//      .done(function (){

//      });



//Modifying the Document

// var results = [{
//     name: "jQuery",
//     language: "Javascript",
//     score: 4.5,
//     showLog: function () {
        
//     },
//     owner: {
//         login: " jhunlorenz",
//         id: 2000108328 
//     }
// }, {
//     name: "jQuery UI",
//     language: "Javascript",
//     score: 3.5,
//     showLog: function () {
        
//     },
//     owner: {
//         login: " jhunlorenz",
//         id: 2000108328 
//     }
// }
// ];

function displayResults(results){



//for removing content
resultlist.empty();


$.each(results, function (i, item){

    var newResults = $("<div class='result'>" +
    "<div class='title'>" + item.name + "</div>" +
    "<div>Language: " + item.language + "</div>" +
    "<div>Owner: " + item.owner.login + "</div>" +
    "</div>");

    newResults.hover(function (){
//make it darker
        $(this).css("background-color", "lightgray");
    }, function (){
//reverse it
        $(this).css("background-color", "transparent");
    });

    resultlist.append(newResults);

});

                                }


                                        });