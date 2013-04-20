  ///////////Insert Captions and Timing Here

  function loadText (){

    /////MAIN HOME PAGE VIDEO

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

    //// COMMERCIAL 2 (COMMERICAL 1 IS MAIN HOME VIDEO)

    commericalTwo=document.getElementById("commericalTwo");
    var lineText = document.getElementById('lineOne');

    if (commericalTwo.currentTime<5)
  { 
    lineText.innerHTML = "<b>Vader:</b> (Breathing)";
  }
  if (commericalTwo.currentTime>5 && commericalTwo.currentTime<10)
  { 
    lineText.innerHTML = "<b>Vader:</b> (Breathing)";
    // var breakTag = document.createElement('br');
    // var nextLine = document.createTextNode('This is a new line');
    // lineText.appendChild(breakTag);
    // lineText.appendChild(nextLine);
  }
  if (commericalTwo.currentTime>10 && commericalTwo.currentTime<15)
  { 
    lineText.innerHTML = "<b>Vader:</b> (Breathing)";
  }
   if (commericalTwo.currentTime>15 && commericalTwo.currentTime<20)
  { 
    lineText.innerHTML = "<b>Golfer:</b> N..N..No.. no way!  I'm not playing you, this is ridiculous.  Every hole it's the same crap!";
  }
   if (commericalTwo.currentTime>20 && commericalTwo.currentTime<22)
  { 
    lineText.innerHTML = "<b>Golfer:</b> (Choking)";
  }
   if (commericalTwo.currentTime>22 && commericalTwo.currentTime<24)
  { 
    lineText.innerHTML = "<b>Golfer:</b> Hey don't I wouldn't.";
  }
   if (commericalTwo.currentTime>24 && commericalTwo.currentTime<30)
  { 
    lineText.innerHTML = "(Star Wars Theme).";
  }

  ////COMMERCIAL 3

    commericalThree=document.getElementById("commericalThree");
    var lineText = document.getElementById('lineOne');

    if (commericalThree.currentTime<3)
  { 
    lineText.innerHTML = "(Phone Rings)";
  }
  if (commericalThree.currentTime>3 && commericalThree.currentTime<5)
  { 
    lineText.innerHTML = "Hello?";
    // var breakTag = document.createElement('br');
    // var nextLine = document.createTextNode('This is a new line');
    // lineText.appendChild(breakTag);
    // lineText.appendChild(nextLine);
  }
  if (commericalThree.currentTime>6 && commericalThree.currentTime<7)
  { 
    lineText.innerHTML = "Yo.  What's up?";
  }
   if (commericalThree.currentTime>7 && commericalThree.currentTime<12)
  { 
    lineText.innerHTML = "Nothing b.  Watching the game, having a bud.  What's up with you?";
  }
   if (commericalThree.currentTime>12 && commericalThree.currentTime<16)
  { 
    lineText.innerHTML = "Nothing.  Watching the game, having a bud.";
  }
   if (commericalThree.currentTime>16 && commericalThree.currentTime<18)
  { 
    lineText.innerHTML = "True, true.";
  }
   if (commericalThree.currentTime>18 && commericalThree.currentTime<22)
  { 
    lineText.innerHTML = "What's upppp?!  What's uuuuuupppp?!";
  }
   if (commericalThree.currentTime>22 && commericalThree.currentTime<25)
  { 
    lineText.innerHTML = "Yo!  Yo!  Pick up the phone!";
  }
   if (commericalThree.currentTime>27 && commericalThree.currentTime<28)
  { 
    lineText.innerHTML = "Hello?";
  }
  if (commericalThree.currentTime>28 && commericalThree.currentTime<31)
  { 
    lineText.innerHTML = "What's uppppp??  What's uppppp?? Ahhhhhh";
  }
  if (commericalThree.currentTime>31 && commericalThree.currentTime<33)
  { 
    lineText.innerHTML = "Yo, where's Dukie?";
  }
  if (commericalThree.currentTime>33 && commericalThree.currentTime<35)
  { 
    lineText.innerHTML = "Yo Duke!";
  }
  if (commericalThree.currentTime>37 && commericalThree.currentTime<38)
  { 
    lineText.innerHTML = "Yo.";
  }
  if (commericalThree.currentTime>38 && commericalThree.currentTime<44)
  { 
    lineText.innerHTML = "What's uppppp?!??!  What's upppp?  Ahhhh Ahhhhh";
  }
  if (commericalThree.currentTime>44 && commericalThree.currentTime<45)
  { 
    lineText.innerHTML = "Hold on";
  }
  if (commericalThree.currentTime>45 && commericalThree.currentTime<46)
  { 
    lineText.innerHTML = "Hello?";
  }
  if (commericalThree.currentTime>46 && commericalThree.currentTime<51)
  { 
    lineText.innerHTML = "What's uppp???!  What'sssss uppp?!!  Ahhhh ahhhh Ahhhh ahhh!!";
  }
  if (commericalThree.currentTime>51 && commericalThree.currentTime<52)
  { 
    lineText.innerHTML = "(Hang Up Phones)";
  }
  if (commericalThree.currentTime>53 && commericalThree.currentTime<55)
  { 
    lineText.innerHTML = "So what's up b?";
  }
  if (commericalThree.currentTime>55 && commericalThree.currentTime<57)
  { 
    lineText.innerHTML = "Watching the game, having a bud";
  }
  if (commericalThree.currentTime>58 && commericalThree.currentTime<59)
  { 
    lineText.innerHTML = "True, true.";
  }

  /////COMMERCIAL FOUR

  commercialFour=document.getElementById("commercialFour");
    var lineText = document.getElementById('lineOne');

    if (commercialFour.currentTime<3)
  { 
    lineText.innerHTML = "<b>Announcer:</b> For an incredible world, you need an improbable vehicle   ";
  }
   
   if (commercialFour.currentTime>3.5 && commercialFour.currentTime<6)
  { 
    lineText.innerHTML = "So we engineered the new Mazda CX-9 to be both spacious...";
  } 
  
  if (commercialFour.currentTime>7.5 && commercialFour.currentTime<8)
  { 
    lineText.innerHTML = "..and agile.";
  } 
  
  if (commercialFour.currentTime>10 && commercialFour.currentTime<12)
  { 
    lineText.innerHTML = "We designed it to utilitarian";
  } 
  
 if (commercialFour.currentTime>12.75 && commercialFour.currentTime<13)
  { 
    lineText.innerHTML = "yet stylish. ";
  } 
  
  if (commercialFour.currentTime>15.5 && commercialFour.currentTime<16)
  { 
    lineText.innerHTML = "And we made the CX-9 sophisticated ";
  } 
  
  if (commercialFour.currentTime>18 && commercialFour.currentTime<19)
  { 
    lineText.innerHTML = "but kept it within reach.";
  } 
  
   if (commercialFour.currentTime>20&& commercialFour.currentTime<22)
  { 
    lineText.innerHTML = "The improbable is now possible.  ";
  } 
  if (commercialFour.currentTime>23 && commercialFour.currentTime<24)
  { 
    lineText.innerHTML = "Introducing the Mazda CX-9 ";
  } 
  if (commercialFour.currentTime>25 && commercialFour.currentTime<27)
  { 
    lineText.innerHTML = "Re-imagined for 2013";
  } 
  if (commercialFour.currentTime>27.75 && commercialFour.currentTime<28.75)
  { 
    lineText.innerHTML = "We build Mazdas ";
  } 
  if (commercialFour.currentTime>29 && commercialFour.currentTime<30)
  { 
    lineText.innerHTML = "What do you drive? ";
  } 

  ////COMMERCIAL FIVE

  commercialFive=document.getElementById("commercialFive");
    var lineText = document.getElementById('lineOne');

    if (commercialFive.currentTime<5.5)
  { 
    lineText.innerHTML = "<b>Red M&M:</b> And I would do anything for love  ";
  }
   
   if (commercialFive.currentTime>6 && commercialFive.currentTime<10)
  { 
    lineText.innerHTML = "Oh, I would do anything for love";
  } 
  
  if (commercialFive.currentTime>11 && commercialFive.currentTime<16)
  { 
    lineText.innerHTML = "I would do anything for love.......";
  } 
  
  if (commercialFive.currentTime>16.5 && commercialFive.currentTime<18.5)
  { 
    lineText.innerHTML = ".......but I won’t do that!";
  } 
  
 if (commercialFive.currentTime>19.5 && commercialFive.currentTime<20)
  { 
    lineText.innerHTML = "Or that!";
  } 
  
  if (commercialFive.currentTime>20 && commercialFive.currentTime<21)
  { 
    lineText.innerHTML = "Or this!";
  } 
  
  if (commercialFive.currentTime>21 && commercialFive.currentTime<22)
  { 
    lineText.innerHTML = "AH! No!";
  } 
  
   if (commercialFive.currentTime>22&& commercialFive.currentTime<23.5)
  { 
    lineText.innerHTML = "NOT THIS! DEFINITELY NOT THIS! ";
  } 
  if (commercialFive.currentTime>23.5 && commercialFive.currentTime<25.5)
  { 
    lineText.innerHTML = "*Crying*";
  } 
  if (commercialFive.currentTime>25.5 && commercialFive.currentTime<27)
  { 
    lineText.innerHTML = "It hurts, but I kinda like it! ";
  } 

  ////COMMERCIAL SIX

    commercialSix=document.getElementById("commercialSix");
    var lineText = document.getElementById('lineOne');

    if (commercialSix.currentTime>1 && commercialSix.currentTime<2.5)
  { 
    lineText.innerHTML = "<b>Best Buy Employee:</b> Hi, may I answer any questions? ";
  }
   
   if (commercialSix.currentTime>3.5 && commercialSix.currentTime<5.5)
  { 
    lineText.innerHTML = "<b>Amy Poehler:</b> What the heck’s the difference between all these phones?";
  } 
  
  if (commercialSix.currentTime>5.5 && commercialSix.currentTime<7)
  { 
    lineText.innerHTML = "What’s LTE? Is it contagious?";
  } 
  
  if (commercialSix.currentTime>7 && commercialSix.currentTime<8)
  { 
    lineText.innerHTML = "Which one fits my face?";
  } 
  
 if (commercialSix.currentTime>8 && commercialSix.currentTime<9)
  { 
    lineText.innerHTML = "Can I use a dongle with this? ";
  } 
  
  if (commercialSix.currentTime>9.5 && commercialSix.currentTime<11)
  { 
    lineText.innerHTML = "Does it make you uncomfortable when I use the word dongle? ";
  } 
  
  if (commercialSix.currentTime>11 && commercialSix.currentTime<12.5)
  { 
    lineText.innerHTML = "ARE THESE NOISE CANCELLING?!";
  } 
  
   if (commercialSix.currentTime>12.5 && commercialSix.currentTime<14)
  { 
    lineText.innerHTML = "So what makes a smart T.V so smart? ";
  } 
  if (commercialSix.currentTime>14 && commercialSix.currentTime<15)
  { 
    lineText.innerHTML = "You don’t make commission on anything?!  ";
  } 
  if (commercialSix.currentTime>15 && commercialSix.currentTime<16)
  { 
    lineText.innerHTML = "<b>Best Buy Employee:</b> Anything.";
  } 
  if (commercialSix.currentTime>16 && commercialSix.currentTime<17)
  { 
    lineText.innerHTML = "<b>Amy:</b> You wanna unbutton your shirt a little bit?  ";
  } 
  if (commercialSix.currentTime>17 && commercialSix.currentTime<18)
  { 
    lineText.innerHTML = "What’s the cloud? ";
  } 
  if (commercialSix.currentTime>18 && commercialSix.currentTime<18.5)
  { 
    lineText.innerHTML = "Where is the cloud? ";
  } 
  if (commercialSix.currentTime>19 && commercialSix.currentTime<20)
  { 
    lineText.innerHTML = "ARE WE IN THE CLOUD NOW?!  ";
  } 
  if (commercialSix.currentTime>20 && commercialSix.currentTime<22)
  { 
    lineText.innerHTML = "Will this one read 50 shades of grey to me in a sexy voice? ";
  } 
  if (commercialSix.currentTime>23 && commercialSix.currentTime<23.5)
  { 
    lineText.innerHTML = "<b>Best Buy Employee:</b> No ";
  } 
  if (commercialSix.currentTime>23.5 && commercialSix.currentTime<25)
  { 
    lineText.innerHTML = "<b>Amy:</b> Will you?";
  } 
  if (commercialSix.currentTime>25 && commercialSix.currentTime<27.75)
  { 
    lineText.innerHTML = "";
  } 
  if (commercialSix.currentTime>27.75 && commercialSix.currentTime<29)
  { 
    lineText.innerHTML = "THANK YOU, YOU'VE BEEN VERY HELPFUL!";
  } 
  if (commercialSix.currentTime>29.5 && commercialSix.currentTime<30.5)
  { 
    lineText.innerHTML = "WHAT?!?! ";
  } 
  if (commercialSix.currentTime>30.5 && commercialSix.currentTime<31)
  { 
    lineText.innerHTML = "<b>Best Buy Employee:</b> Nothing ";
  } 

  /////COMMERCIAL SEVEN

    commercialSeven=document.getElementById("commercialSeven");
    var lineText = document.getElementById('lineOne');

    if (commercialSeven.currentTime<2)
  { 
    lineText.innerHTML = "CRACKING GANGNAM STYLE!";
  }
   
   if (commercialSeven.currentTime>5 && commercialSeven.currentTime<6)
  { 
    lineText.innerHTML = "GANGNAM STYLE!";
  } 
  
  if (commercialSeven.currentTime>6 && commercialSeven.currentTime<7)
  { 
    lineText.innerHTML = "CRACK CRACK CRACK CRACK";
  } 
  
  if (commercialSeven.currentTime>8 && commercialSeven.currentTime<9)
  { 
    lineText.innerHTML = "CRACKING GANGNAM STYLE!";
  } 
  
  if (commercialSeven.currentTime>9 && commercialSeven.currentTime<13)
  { 
    lineText.innerHTML = "EYYYYYY, CRACK YOUR NUTS NOW!";
  } 
  
  if (commercialSeven.currentTime>13 && commercialSeven.currentTime<15)
  { 
    lineText.innerHTML = "CRACK CRACK CRACK CRACK";
  }
  
   if (commercialSeven.currentTime>15 && commercialSeven.currentTime<16)
  { 
    lineText.innerHTML = "PISTACHIOS!";
  } 
  
  if (commercialSeven.currentTime>17 && commercialSeven.currentTime<18)
  { 
    lineText.innerHTML = "CRACKING GANGNAM STYLE!";
  } 
  
  if (commercialSeven.currentTime>18 && commercialSeven.currentTime<20)
  { 
    lineText.innerHTML = "EY EY EY EY EY EY";
  } 
  
  if (commercialSeven.currentTime>20 && commercialSeven.currentTime<23)
  { 
    lineText.innerHTML = "EYYYYYY.....";
  } 
  
  if (commercialSeven.currentTime>21 && commercialSeven.currentTime<24)
  { 
    lineText.innerHTML = "<b>Announcer:</b> Psy does it and then we all go nuts!";
  } 
  
  if (commercialSeven.currentTime>25 && commercialSeven.currentTime<28)
  { 
    lineText.innerHTML = "Wonderful pistachios, get crackin’!";
  }

  ////MOVIE ONE

  movieOne=document.getElementById("movieOne");
    var lineText = document.getElementById('lineOne');

    if (movieOne.currentTime<5)
  { 
    lineText.innerHTML = "<b>Johnny Fontane:</b> A best seller-and the main character, it’s a guy just like me";
  }
  if (movieOne.currentTime>5 && movieOne.currentTime<8)
  { 
    lineText.innerHTML = "I....uhhh....wouldn’t even have to act, just be myself";
    var breakTag = document.createElement('br');
    var nextLine = document.createTextNode('This is a new line');
    lineText.appendChild(breakTag);
    lineText.appendChild(nextLine);
  }
  if (movieOne.currentTime>9 && movieOne.currentTime<13)
  { 
    lineText.innerHTML = "“Oh, Godfather, I don’t know what to do, I don’t know what to do”";
  }
   if (movieOne.currentTime>14 && movieOne.currentTime<15)
  { 
    lineText.innerHTML = "<b>Don Corleone:</b> “YOU CAN ACT LIKE A MAN!”  ";

  }
   if (movieOne.currentTime>16 && movieOne.currentTime<18)
  { 
    lineText.innerHTML = "<b>*SLAP*</b>";
      

  }
  if (movieOne.currentTime>16 && movieOne.currentTime<18)
  { 
    lineText.innerHTML = "<b>*SLAP*</b>";
      var breakTag = document.createElement('br');
    var nextLine = document.createTextNode( 'What\'s the matter with you?');
      lineText.appendChild(breakTag);
    lineText.appendChild(nextLine);

  }
   if (movieOne.currentTime>18 && movieOne.currentTime<22)
  { 
    lineText.innerHTML = "Is this how you turned out? A hollywood finocchio that...that cries like a woman?";
  }
   if (movieOne.currentTime>23.5 && movieOne.currentTime<25)
  { 
    lineText.innerHTML = "<b>[Mockingly]</b> What can I do? What can I do?";
  }
    if (movieOne.currentTime>26 && movieOne.currentTime<27)
  { 
    lineText.innerHTML = "<b>[Mockingly]</b> What can I do? What can I do?";
  var breakTag = document.createElement('br');
  var nextLine = document.createTextNode( '*Tom laughs');
  lineText.appendChild(breakTag);
    lineText.appendChild(nextLine);
  }
  if (movieOne.currentTime>27.5 && movieOne.currentTime<29)
  { 
    lineText.innerHTML = "What is that nonsense?";
  }

  if (movieOne.currentTime>29 && movieOne.currentTime<31)
  { 
    lineText.innerHTML = "Ridiculous....";
  }


  ////MOVIE TWO

   movieTwo=document.getElementById("movieTwo");
    var lineText = document.getElementById('lineOne');

    if (movieTwo.currentTime>2 && movieTwo.currentTime<4)
  { 
    lineText.innerHTML = "<b>Mr. Freeze:</b> Allow me to break the ice";
  }
   
   if (movieTwo.currentTime>4 && movieTwo.currentTime<6)
  { 
    lineText.innerHTML = "COLD FREEZE COLD";
  } 
  
  if (movieTwo.currentTime>6.5 && movieTwo.currentTime<9)
  { 
    lineText.innerHTML = "FREEZE COLD FROZEN ICE COOL CHILLED CHILLING WINTER ICE WINTERIZE!";
  } 
  
  if (movieTwo.currentTime>13 && movieTwo.currentTime<16.5)
  { 
    lineText.innerHTML = "CHILL COLD ICE CHILL COOL FREEZE CHILL";
  } 
  
 if (movieTwo.currentTime>16.5 && movieTwo.currentTime<19.5)
  { 
    lineText.innerHTML = "FREEZE WINTER ICE COLD COOL ICE FROST WINTER";
  } 
  
  if (movieTwo.currentTime>19.5 && movieTwo.currentTime<20.5)
  { 
    lineText.innerHTML = "ICE FREEZING ICE COOL";
  } 
  
  if (movieTwo.currentTime>21 && movieTwo.currentTime<26.5)
  { 
    lineText.innerHTML = "FREEZE FREEZE FREEZE FREEZE FREEZE FREEZE FREEZE FREEZE ";
  } 
  
   if (movieTwo.currentTime>26.5 && movieTwo.currentTime<30)
  { 
    lineText.innerHTML = "Let's kick some Ice! ";
  } 

  ////COMEDY ONE

    comedyOne=document.getElementById("comedyOne");
    var lineText = document.getElementById('lineOne');

    if (comedyOne.currentTime<3)
  { 
    lineText.innerHTML = "<b>Announcer:</b> Now, news 12 sports with Pat Murphy";
  }
   
   if (comedyOne.currentTime>3.5 && comedyOne.currentTime<6)
  { 
    lineText.innerHTML = "<b>Pat:</b> Great news regarding Bills tight end Kevin Everett";
  } 
  
  if (comedyOne.currentTime>6.5 && comedyOne.currentTime<9)
  { 
    lineText.innerHTML = "He moved his arms and legs today!";
  } 
  
  if (comedyOne.currentTime>10 && comedyOne.currentTime<11.5)
  { 
    lineText.innerHTML = "And doctor’s.......now believe....th-";
  } 
  
  if (comedyOne.currentTime>12 && comedyOne.currentTime<16)
  { 
    lineText.innerHTML = "That’s the wrong video, by the way. That is not the right video";
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