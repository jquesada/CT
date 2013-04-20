<?php include "header.php"; ?>

  <!-- First Band (Slider) -->
  <!-- The Orbit slider is initialized at the bottom of the page by calling .orbit() on #slider -->
    
  <div class="row">
    <div class="twelve columns">
   
   <!-- ****** CHRIS, PUT VIDEO HERE ******* -->
  
<video id="video1" controls="controls" style="width:50%;margin:auto;display:block;">
  <source src="http://sulley.cah.ucf.edu/~ch149712/CaptionToob/videos/commercial_1.mp4" type="video/mp4">
  <source src="http://sulley.cah.ucf.edu/~ch149712/CaptionToob/videos/commercial_1.ogv" type="video/ogg">
  Your browser does not support HTML5 video.
</video>
	<input id="homeCaptionOn" onClick="homeCaptionBoxOn()" style="font-size:24px;cursor:pointer;text-align:center;display:block;margin:auto;margin-top:20px;" type="button" value="View Captions" />
    <input id="homeCaptionOff" onClick="homeCaptionBoxOff()" style="font-size:24px;cursor:pointer;text-align:center;display:none;margin:auto;margin-top:20px;" type="button" value="Turn Captions Off" />
	<div id="captionBox" style="display:none;margin-top:20px;width:100%;height:120px;border:1px solid;border-color:#A0A0A4;">
    	<div id="liveText" style="padding:15px;text-align:center;font-size:16px;">
        	<div id="lineOne" style="padding:15px;text-align:center;text-ident:20px;font-size:16px;display:block;"></div>
          </div>
          <input type="button" style="margin-bottom:0;" value="Text Red" onClick="changeRed()" />
          <input type="button" style="margin-bottom:0;"value="Text Black" onClick="changeBlack()" />
    </div>
      <hr />
    </div>
  </div>
  
  
  <!-- Three-up Content Blocks -->
  
  <div class="row">
  
    <div class="four columns">
      <img src="images/img1.jpg" alt="" />
      <h4><a href="#" title="" >Nexus 4 Battery Removal</a></h4>
      <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit.</p>
    </div>
    
    <div class="four columns">
      <img src="images/img2.jpg" alt="" />
      <h4><a href="#" title="" >Cruise Ship Catastrophe</a></h4>
      <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit.</p>
    </div>
    
    <div class="four columns">
      <img src="images/img3.jpg" alt="" />
      <h4><a href="#" title="" >News Anchor Farts On Camera</a></h4>
      <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit.</p>
    </div>
    
  </div>

  <hr />

  <div class="row">
  
    <div class="four columns">
      <h3>New Videos</h3>
      <ul>
        <li>
          <h4><a href="#" title="" >This is a content section.</a></h4>
          <img class="column" src="http://placehold.it/80x80&text=[img]" />
          <div class="column">
              <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit.</p>
              <a class= "button" href="" alt="" >More &gt; &gt;</a>
          </div>
        </li>
        <li>
          <h4><a href="#" title="" >This is a content section.</a></h4>
          <img class="column" src="http://placehold.it/80x80&text=[img]" />
          <div class="column">
              <p class="column">Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit.</p>
              <a class= "button" href="" alt="" >More &gt; &gt;</a>
          </div>
        </li>
      </ul>
    </div>
    
    <div class="four columns">
      <h3>Recent Comments</h3>
      <ul>
        <li>
          <h4><a href="#" title="" >This is a content section.</a></h4>
          <div class="right">
              <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit.</p>
              <a href="" alt="" >More &gt; &gt;</a>
          </div>
        </li>
        <li>
          <h4><a href="#" title="" >This is a content section.</a></h4>
          <div class="right">
              <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit.</p>
              <a href="" alt="" >More &gt; &gt;</a>
          </div>
        </li>
        <li>
          <h4><a href="#" title="" >This is a content section.</a></h4>
          <div class="right">
              <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit.</p>
              <a href="" alt="" >More &gt; &gt;</a>
          </div>
        </li>

      </ul>
    </div>
    
    <div class="four columns">
      <h3>Support</h3>
      <ul>
        <li>
          <a href="" alt="" >
            <img src="http://placehold.it/100x100&text=[img]" />
          </a>
        </li>
        <li>
          <a href="" alt="" >
            <img src="http://placehold.it/100x100&text=[img]" />
          </a>
        </li>
        <li>
          <a href="" alt="" >
            <img src="http://placehold.it/100x100&text=[img]" />
          </a>
        </li>
        <li>
          <a href="" alt="" >
            <img src="http://placehold.it/100x100&text=[img]" />
          </a>
        </li>
        <li>
          <a href="" alt="" >
            <img src="http://placehold.it/100x100&text=[img]" />
          </a>
        </li>
        <li>
          <a href="" alt="" >
            <img src="http://placehold.it/100x100&text=[img]" />
          </a>
        </li>

      </ul>
    </div>
    
  </div>

<?php include "footer.php"; ?>