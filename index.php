<?php include "header.php"; 

$viewAll = "viewScriptCommecialOne()";

?>

  <!-- First Band (Slider) -->
  <!-- The Orbit slider is initialized at the bottom of the page by calling .orbit() on #slider -->
   <div class="content">
  <div class="row">
    <div class="twelve columns">
   
   <!-- ****** CHRIS, PUT VIDEO HERE ******* -->
 <div id="index_video"> 
<video id="video1" controls="controls" style="width:100%;margin:auto;display:block;">
  <source src="http://sulley.cah.ucf.edu/~ch149712/CaptionToob/videos/commercial_1.mp4" type="video/mp4">
  <source src="http://sulley.cah.ucf.edu/~ch149712/CaptionToob/videos/commercial_1.ogv" type="video/ogg">
  Your browser does not support HTML5 video.
</video>
</div>
	 <input id="homeCaptionOn" onClick="homeCaptionBoxOn()" style="font-size:24px;cursor:pointer;text-align:center;display:block;margin:auto;margin-top:20px;" type="button" value="" />
        <input id="homeCaptionOff" onClick="homeCaptionBoxOff()" style="font-size:24px;cursor:pointer;text-align:center;display:none;margin:auto;margin-top:20px;" type="button" value="" />
        
        <div id="captionBox" style="display:none;margin-top:20px;width:100%;min-height:120px;height:auto;border:1px solid;border-color:#A0A0A4;">
          <div id="liveText" style="padding:15px;text-align:center;font-size:16px;">
              <div id="lineOne" style="padding:15px;text-align:center;text-ident:20px;font-size:16px;display:none;"></div>
                <div id="entireScript" style="padding:15px;text-align:left;text-ident:20px;font-size:16px;display:none;">
              </div>
          </div>
          <div style="position:absolute;bottom:0;left:1;">
          <input type="button" id="textred" style="margin-bottom:0;float:left;" value="" onClick="changeRed()" />
          <input type="button" id="textblack" style="margin-bottom:0;float:left;"value="" onClick="changeBlack()" />
          <input type="button" id="smtext" style="margin-bottom:0;float:left;"value="" onClick="" />
          <input type="button" id="mdtext" style="margin-bottom:0;float:left;"value="" onClick="" />
          <input type="button" id="lgtext" style="margin-bottom:0;float:left;"value="" onClick="" />
          <input type="button" id="changebackground" style="margin-bottom:0;float:left;"value="" onClick="" />
          <input type="button" id="entireScriptOn" style="margin-bottom:0;display:block;float:left;"value="View Entire Transcript" onClick="<?php echo $viewAll; ?>" />
          <input type="button" id="entireScriptOff" style="margin-bottom:0;display:none;float:left;"value="Close Entire Transcript" onClick="allScriptOff()" />
        </div>
      </div>
    </div>

  </div>
  
  
  <!-- Three-up Content Blocks -->
  
  <div class="row" style="padding-top:20px !important;">
       <hr />
    <div class="four columns">
      <img src="images/thumbs/movies/movie_1.png" alt="" />
      <h4><a href="single-video.php?video=movie_1" title="" >You can act like a man</a></h4>
      <p>The most intolerable offense of all is a man who is weak and out of control.</p>
    </div>
    
    <div class="four columns">
      <img src="images/thumbs/animation/animation_1.png" alt="" />
      <h4><a href="single-video.php?video=animation_1" title="" >Just keep swimming</a></h4>
      <p>Dory, the lovable and forgetful fish from Pixar's Finding Nemo offers some positive advice.</p>
    </div>
    
    <div class="four columns">
      <img src="images/thumbs/comedy/comedy_1.png" alt="" />
      <h4><a href="single-video.php?video=comedy_2" title="" >Miss USA Question</a></h4>
      <p>Miss South Carolina shines when it comes to answering simple questions. The south is proud.</p>
    </div>
    
  </div>

<div id="morestuff">
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
</div>
</div>

<?php include "footer.php"; ?>