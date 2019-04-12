/* index.js */

"use strict";

  var msg =  "Hellow Javascript";
   // alert(msg);
   console.log(msg);

        var resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = "<p> This is from Javascript </p>";


    //Objects and Arrays



    //console.log(result.phoneNumber);


    // Arrays 

    var results = [{
        name: "jQuery",
        language: "Javascript",
        score: 4.5,
        showLog: function () {
            
        },
        owner: {
            login: " jhunlorenz",
            id: 2000108328 
        }
    }, {
        name: "jQuery UI",
        language: "Javascript",
        score: 3.5,
        showLog: function () {
            
        },
        owner: {
            login: " jhunlorenz",
            id: 2000108328 
        }
    }
];

// console.log(results.length);
// console.log(results[0].name);

//Looping an array 
// for (var x = 0; x < results.length; x++){
//     var result = results[x];
//     console.log(result.name);
// }

// for (var x = 0; x < results.length; x++){
//     var result = results[x];
//     if (result.score < 4) break;
//     console.log(result.name);
// }

// for (var x = 0; x < results.length; x++){
//     var result = results[x];
//     if (result.score > 4) continue;
//     console.log(result.name);
// }



    // results.push(result);
    // results.push({
    //     name: "dummy project"
    // });

    /*     var result = {
        name: "jQuery",
        language: "Javascript",
        score: 4.5,
        showLog: function () {
            
        },
        owner: {
            login: " jhunlorenz",
            id: 2000108328 
        }
    };

    result.phoneNumber = "123-456-7890" 
    */


     /*
        //showing what type of data it.
        console.log("msg is "+ typeof(msg));
        console.log("resultsDiv is "+ typeof(resultsDiv));

        var none;
        console.log("none is "+ typeof(none));

        var aNumber = 10;
        console.log("aNumber is "+ typeof(aNumber));

        var trueFalse = true;
        console.log("trueFalse is "+ typeof(trueFalse));

       // msgs = "this shouldn't work";

       if (none == undefined){
           console.log("none is undefined");
       }

       if (aNumber == 10){
           console.log("10 is 10");
       }

       if (aNumber === "10"){
        console.log("10 is 10");
    }

    /* function showMsg(msg){
        console.log("showMsg: " + msg);
    }  */

    /*

 // function and conditional 

    function showMsg(msg, more){
        if (more){
            console.log("showMsg+ " + msg + more);
        }else{
            console.log("showMsg+ " + msg);
        }
    }

    showMsg("some information");
    showMsg("more information", "and even more");


    // variable type function
    var showIt = function (msg) {
        console.log(msg);
    }

    showIt("Some message");
//callback example
    function showItThen(msg, callback){
        showIt(msg);
        callback();
    }
    
    showItThen("showItThen called", function(){
        console.log("callback called");
    })


    //scope lessons

    var inGlobal = true;

    function testMe() {
        console.log("testMe(): " + inGlobal);

        var someMsg = "some Message";
        console.log("testMe(); " + someMsg);

        showItThen("with Closure", function (){
        showIt("testMe With Closure(); " + someMsg);
        });

    }

    //this idea is not gonna work
    //console.log("global: " + someMsg);
    
    testMe();

    //Closures  are about with scopes lessons
*/
    
