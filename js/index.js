/* index.js */

"use strict";

  var msg =  "Hellow Javascript";
   // alert(msg);
   console.log(msg);

        var resultsDiv = document.getElementById("results");
        resultsDiv.innerHTML = "<p> This is from Javascript </p>";

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
    }

    //this idea is not gonna work
    //console.log("global: " + someMsg);
    
    testMe();