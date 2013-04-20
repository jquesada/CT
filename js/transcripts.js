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

    commercialTwo=document.getElementById("commercialTwo");
    var lineText = document.getElementById('lineOne');

    if (commercialTwo.currentTime<5)
  { 
    lineText.innerHTML = "<b>Vader:</b> (Breathing)";
  }
  if (commercialTwo.currentTime>5 && commercialTwo.currentTime<10)
  { 
    lineText.innerHTML = "<b>Vader:</b> (Breathing)";
    // var breakTag = document.createElement('br');
    // var nextLine = document.createTextNode('This is a new line');
    // lineText.appendChild(breakTag);
    // lineText.appendChild(nextLine);
  }
  if (commercialTwo.currentTime>10 && commercialTwo.currentTime<15)
  { 
    lineText.innerHTML = "<b>Vader:</b> (Breathing)";
  }
   if (commercialTwo.currentTime>15 && commercialTwo.currentTime<20)
  { 
    lineText.innerHTML = "<b>Golfer:</b> N..N..No.. no way!  I'm not playing you, this is ridiculous.  Every hole it's the same crap!";
  }
   if (commercialTwo.currentTime>20 && commercialTwo.currentTime<22)
  { 
    lineText.innerHTML = "<b>Golfer:</b> (Choking)";
  }
   if (commercialTwo.currentTime>22 && commercialTwo.currentTime<24)
  { 
    lineText.innerHTML = "<b>Golfer:</b> Hey don't I wouldn't.";
  }
   if (commercialTwo.currentTime>24 && commercialTwo.currentTime<30)
  { 
    lineText.innerHTML = "(Star Wars Theme).";
  }

  ////COMMERCIAL 3

    commercialThree=document.getElementById("commercialThree");
    var lineText = document.getElementById('lineOne');

    if (commercialThree.currentTime<3)
  { 
    lineText.innerHTML = "(Phone Rings)";
  }
  if (commercialThree.currentTime>3 && commercialThree.currentTime<5)
  { 
    lineText.innerHTML = "Hello?";
    // var breakTag = document.createElement('br');
    // var nextLine = document.createTextNode('This is a new line');
    // lineText.appendChild(breakTag);
    // lineText.appendChild(nextLine);
  }
  if (commercialThree.currentTime>6 && commercialThree.currentTime<7)
  { 
    lineText.innerHTML = "Yo.  What's up?";
  }
   if (commercialThree.currentTime>7 && commercialThree.currentTime<12)
  { 
    lineText.innerHTML = "Nothing b.  Watching the game, having a bud.  What's up with you?";
  }
   if (commercialThree.currentTime>12 && commercialThree.currentTime<16)
  { 
    lineText.innerHTML = "Nothing.  Watching the game, having a bud.";
  }
   if (commercialThree.currentTime>16 && commercialThree.currentTime<18)
  { 
    lineText.innerHTML = "True, true.";
  }
   if (commercialThree.currentTime>18 && commercialThree.currentTime<22)
  { 
    lineText.innerHTML = "What's upppp?!  What's uuuuuupppp?!";
  }
   if (commercialThree.currentTime>22 && commercialThree.currentTime<25)
  { 
    lineText.innerHTML = "Yo!  Yo!  Pick up the phone!";
  }
   if (commercialThree.currentTime>27 && commercialThree.currentTime<28)
  { 
    lineText.innerHTML = "Hello?";
  }
  if (commercialThree.currentTime>28 && commercialThree.currentTime<31)
  { 
    lineText.innerHTML = "What's uppppp??  What's uppppp?? Ahhhhhh";
  }
  if (commercialThree.currentTime>31 && commercialThree.currentTime<33)
  { 
    lineText.innerHTML = "Yo, where's Dukie?";
  }
  if (commercialThree.currentTime>33 && commercialThree.currentTime<35)
  { 
    lineText.innerHTML = "Yo Duke!";
  }
  if (commercialThree.currentTime>37 && commercialThree.currentTime<38)
  { 
    lineText.innerHTML = "Yo.";
  }
  if (commercialThree.currentTime>38 && commercialThree.currentTime<44)
  { 
    lineText.innerHTML = "What's uppppp?!??!  What's upppp?  Ahhhh Ahhhhh";
  }
  if (commercialThree.currentTime>44 && commercialThree.currentTime<45)
  { 
    lineText.innerHTML = "Hold on";
  }
  if (commercialThree.currentTime>45 && commercialThree.currentTime<46)
  { 
    lineText.innerHTML = "Hello?";
  }
  if (commercialThree.currentTime>46 && commercialThree.currentTime<51)
  { 
    lineText.innerHTML = "What's uppp???!  What'sssss uppp?!!  Ahhhh ahhhh Ahhhh ahhh!!";
  }
  if (commercialThree.currentTime>51 && commercialThree.currentTime<52)
  { 
    lineText.innerHTML = "(Hang Up Phones)";
  }
  if (commercialThree.currentTime>53 && commercialThree.currentTime<55)
  { 
    lineText.innerHTML = "So what's up b?";
  }
  if (commercialThree.currentTime>55 && commercialThree.currentTime<57)
  { 
    lineText.innerHTML = "Watching the game, having a bud";
  }
  if (commercialThree.currentTime>58 && commercialThree.currentTime<59)
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

  ////COMEDY TWO

    comedyOne=document.getElementById("comedyTwo");
    var lineText = document.getElementById('lineOne');

    if (comedyTwo.currentTime<5)
  { 
    lineText.innerHTML = "<b>Announcer:</b> Recent polls have shown a fifth of Americans cannot locate the US on a world map  ";
  }
   
   if (comedyTwo.currentTime>5 && comedyTwo.currentTime<8)
  { 
    lineText.innerHTML = "Why do you think this is?";
  } 
  
  if (comedyTwo.currentTime>9 && comedyTwo.currentTime<11)
  { 
    lineText.innerHTML = "<b>South Carolina:</b> I personally believe";
  } 
  
  if (comedyTwo.currentTime>12 && comedyTwo.currentTime<14 )
  { 
    lineText.innerHTML = "that US Americans are unable to do so";
  } 
  
  if (comedyTwo.currentTime>15 && comedyTwo.currentTime<19)
  { 
    lineText.innerHTML = "because of soma people out there in our nation";
  } 
  if (comedyTwo.currentTime>19 && comedyTwo.currentTime<21)
  { 
    lineText.innerHTML = "that don't have maps and";
  } 
  if (comedyTwo.currentTime>21 && comedyTwo.currentTime<25)
  { 
    lineText.innerHTML = "I believe that our education like such as ";
  }
  if (comedyTwo.currentTime>25 && comedyTwo.currentTime<29)
  { 
    lineText.innerHTML = "South Africa and the Iraq, everywhere like such as and";
  }
  if (comedyTwo.currentTime>29 && comedyTwo.currentTime<33)
  { 
    lineText.innerHTML = "I believe that they should, our education over here";
  } 
  if (comedyTwo.currentTime>33 && comedyTwo.currentTime<36)
  { 
    lineText.innerHTML = "in the US should help the US";
  }
  if (comedyTwo.currentTime>36 && comedyTwo.currentTime<39)
  { 
    lineText.innerHTML = "and should help South Africa and should help";
  }
  if (comedyTwo.currentTime>36 && comedyTwo.currentTime<39)
  { 
    lineText.innerHTML = "the Iraq and the Asian countries";
  }
  if (comedyTwo.currentTime>40 && comedyTwo.currentTime<44)
  { 
    lineText.innerHTML = "so that we will be able to build up our future for our ch..";
  }
  if (comedyTwo.currentTime>45 && comedyTwo.currentTime<48)
  { 
    lineText.innerHTML = "<b>Host:</b> Thank you very much, South Carolina.";
  }

    ////ANIMATION ONE

  animationOne=document.getElementById("animationOne");

    var lineText = document.getElementById('lineOne');

    if (animationOne.currentTime>3 && animationOne.currentTime<6)
  { 
    lineText.innerHTML = "Hey mister grumpy gills...";
  }
  if (animationOne.currentTime>6 && animationOne.currentTime<8)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "Wouldn't you like to get to know what you gotta do?";
  }
  if (animationOne.currentTime>8 && animationOne.currentTime<9)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "I don't want to know what you've got to do.";
  }
   if (animationOne.currentTime>10 && animationOne.currentTime<12)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "Keep swimming, just keep swimming.";
  }
   if (animationOne.currentTime>12 && animationOne.currentTime<14)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "Keep swimming, swimming, swimming.";
  }
   if (animationOne.currentTime>14 && animationOne.currentTime<16)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "What do we do?  We swim, we swim, swim.";
  }
  if (animationOne.currentTime>17 && animationOne.currentTime<18)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "Dorey, no singing.";
  }
   if (animationOne.currentTime>18 && animationOne.currentTime<19)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "Ahaha ho ho";
  }
   if (animationOne.currentTime>19 && animationOne.currentTime<20)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "Dorey...";
  }
 if (animationOne.currentTime>20 && animationOne.currentTime<20.5)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "Love to swim, love to swim.";
  }
 if (animationOne.currentTime>20.5 && animationOne.currentTime<21)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "Dorey...";
  }
  if (animationOne.currentTime>21 && animationOne.currentTime<24)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "When you wantttttt to swim!";
  }
  if (animationOne.currentTime>24 && animationOne.currentTime<26)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "<b>Dorey:</b>Swimmm you want to be bo..<br /><b>Fish</b>See I'm going to get stuck now";
  }
  if (animationOne.currentTime>26 && animationOne.currentTime<29)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "with that song that's in my head!";
  }
  
     ////ANIMATION TWO

  animationTwo=document.getElementById("animationTwo");

    var lineText = document.getElementById('lineOne');

    if (animationTwo.currentTime>0 && animationTwo.currentTime<4)
  { 
    lineText.innerHTML = "The new Disney comedy, Wreck-It Ralph, invites you to get in the games!";
  }
  if (animationTwo.currentTime>4 && animationTwo.currentTime<6)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "With Jay Lynch and Jack Mcbreyor.";
  }
  if (animationTwo.currentTime>8 && animationTwo.currentTime<10)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "The games, it's about going for the gold.";
  }
   if (animationTwo.currentTime>10 && animationTwo.currentTime<12)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "But in our new movie, all it takes is a quarter.";
  }
   if (animationTwo.currentTime>13 && animationTwo.currentTime<15)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "Welcome to game central station...";
  }
   if (animationTwo.currentTime>15 && animationTwo.currentTime<18)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "Trains for all game destinations now boarding.";
  }
  if (animationTwo.currentTime>18 && animationTwo.currentTime<22)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "The world of video games comes together from the 8 bit block of Fix It Felix Junior";
  }
   if (animationTwo.currentTime>22 && animationTwo.currentTime<26)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "to the sweet tracks of sugar rush to the big battles of Hero's Duty.";
  }
   if (animationTwo.currentTime>26 && animationTwo.currentTime<27)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "<b>Character:</b> Incoming!";
  }
 if (animationTwo.currentTime>27 && animationTwo.currentTime<30)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "One guy named Wreck It Ralph will do anything to make his dreams come true.";
  }
 if (animationTwo.currentTime>30 && animationTwo.currentTime<33)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "<b>Character:</b> When did video games become so violent and scary?";
  }
  if (animationTwo.currentTime>34 && animationTwo.currentTime<36)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "You can see Wreck It Ralph in theaters November 2nd in 3d!";
  }
  if (animationTwo.currentTime>37 && animationTwo.currentTime<38)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "[Hit]";
  }
  if (animationTwo.currentTime>39 && animationTwo.currentTime<41)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "Ahh... 3d...Surreal!";
  }
  if (animationTwo.currentTime>42 && animationTwo.currentTime<43)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "Excuse us..";
  }
   if (animationTwo.currentTime>44 && animationTwo.currentTime<45)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "[Song]: I have a good feeling.";
  }

  ////ANIMATION THREE

  animationThree=document.getElementById("animationThree");

    var lineText = document.getElementById('lineOne');

    if (animationThree.currentTime<5)
  { 
    lineText.innerHTML = "";
  }
  if (animationThree.currentTime>7 && animationThree.currentTime<9)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "Walt Disney Studios presents a studio Ghibli film.";
  }
  if (animationThree.currentTime>10 && animationThree.currentTime<12)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "Honey, don’t take a short cut. You always get us lost.";
  }
   if (animationThree.currentTime>13 && animationThree.currentTime<15)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "From a master film maker, Hayao Miyazaki";
  }
   if (animationThree.currentTime>16 && animationThree.currentTime<17)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "[music]";
  }
   if (animationThree.currentTime>18 && animationThree.currentTime<19)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "What is it?";
  }
  if (animationThree.currentTime>19 && animationThree.currentTime<21)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "Come on, let’s go in. I wanna see what’s on the other side.";
  }
   if (animationThree.currentTime>22 && animationThree.currentTime<23)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "Where are you going?";
  }
   if (animationThree.currentTime>24 && animationThree.currentTime<25)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "You shouldn’t be here. Get out of here! NOW!";
  }
 if (animationThree.currentTime>26 && animationThree.currentTime<27)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "What?";
  }
 if (animationThree.currentTime>27 && animationThree.currentTime<29)
  { 
    lineText.innerHTML = "";
    lineText.innerHTML = "You gotta cross the river! Go, I’ll distract them!!";
  }
  if (animationThree.currentTime>30 && animationThree.currentTime<31)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "";
  }
  if (animationThree.currentTime>32 && animationThree.currentTime<33)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "Mommmmmmmmy!!";
  }
  if (animationThree.currentTime>34 && animationThree.currentTime<34)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "[running]";
  }
  if (animationThree.currentTime>35 && animationThree.currentTime<37)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "I’m dreaming, I’m dreaming!!";
  }
  if (animationThree.currentTime>38 && animationThree.currentTime<39)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "Don’t be afraid. I just wanna help you.";
  }
  if (animationThree.currentTime>40 && animationThree.currentTime<41)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "NO!";
  }
  if (animationThree.currentTime>42 && animationThree.currentTime<43)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "";
  }
  if (animationThree.currentTime>44 && animationThree.currentTime<46)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "In worlds seen and unseen";
  }
  if (animationThree.currentTime>47 && animationThree.currentTime<50)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "where spirits are transformed";
  }
  if (animationThree.currentTime>51 && animationThree.currentTime<53)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "and sorcerers rule…";
  }
  if (animationThree.currentTime>55 && animationThree.currentTime<57)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "Witch Baba controls you by stealing your name.";
  }
  if (animationThree.currentTime>58 && animationThree.currentTime<60)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "If you completely forget your name, you’ll never find your way home.";
  }
  if (animationThree.currentTime>61 && animationThree.currentTime<62)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "Your name belongs to me now.";
  }
  if (animationThree.currentTime>63 && animationThree.currentTime<68)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "One girl’s future depends on remembering one thing above all else.";
  }
  if (animationThree.currentTime>69 && animationThree.currentTime<71)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "I want you to know my real name. It’s Chihiro.";
  }
  if (animationThree.currentTime>73 && animationThree.currentTime<78)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "Experience a magical movie-phenomena embraced by all the world.";
  }
  if (animationThree.currentTime>79 && animationThree.currentTime<80)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "Haku!";
  }
  if (animationThree.currentTime>86 && animationThree.currentTime<88)
  { 
   　lineText.innerHTML = "";
    lineText.innerHTML = "Spirited Away";
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