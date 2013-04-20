  ///////////Insert Captions and Timing Here

  function loadText (){

    myVid=document.getElementById("video1");
    var lineText = document.getElementById('lineOne');

    if (myVid.currentTime<5)
    { 
      lineText.innerHTML = "<b>Mac:</b> Hello, I'm a Mac.  <b>PC:</b> And I'm a PC.  You know I just finished a home movie.";
    }
    if (myVid.currentTime>5 && myVid.currentTime<10)
    { 
      lineText.innerHTML = "<b>Mac:</b> You know that's so funny, I just finished my own home movie.  I did on iMovie it was really easy.  <b>PC:</b> Well I doubt it's as excellent as mine but";
      var breakTag = document.createElement('br');
      var nextLine = document.createTextNode('This is a new line');
      lineText.appendChild(breakTag);
      lineText.appendChild(nextLine);
    }
    if (myVid.currentTime>10 && myVid.currentTime<15)
    { 
      lineText.innerHTML = "I'd be happy to take a look.  <b>Mac:</b> Yeah that would be great, roll it.  <b>Mac Movie:</b> Hi, I'm a Mac movie.";
    }
     if (myVid.currentTime>15 && myVid.currentTime<20)
    { 
      lineText.innerHTML = "<b>Mac:</b> That looks really professional right?  <b>PC:</b> Well, great.  Bye.";
    }
     if (myVid.currentTime>20 && myVid.currentTime<25)
    { 
      lineText.innerHTML = "<b>Mac:</b> W..w..w..wait what about your excuse?  <b>PC:</b> Uhh.  <b>Mac Movie:</b> Please?  <b>PC:</b> Well okay, sure.";
    }
     if (myVid.currentTime>25 && myVid.currentTime<30)
    { 
      lineText.innerHTML = "<b>PC Movie:</b> What's up?  PC home movie.  <b>PC:</b> Work in progress.";
    }
  }


/////////////////////-------Constantly Checking Video Times
//this line checks to make sure there are no video elements on the page
if($('video').get().length > 0) { 
    for (var x=0;x<10000;x++){
        setInterval(function(){
      loadText();
    },300);
  }
}

//}