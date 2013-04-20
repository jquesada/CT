<?php include "header.php"; ?>

<div class="content row">

  <div class="main nine columns">

    <?php 
      /* ---------------------------------------------------------
      DYNAMIC VIDEO GRABBER 
      grabs video based on query, keeps there from being duplicate pages
      ----------------------------------------------------------- */
    ?>

    <?php 
      /*$video = $_GET['video']; 
      $cat = $_GET['cat'];*/
    ?>

    <h1>Movie Title</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae aliquet augue.</p>
    <hr/>

    <div class="post">
      <video id="video1" controls="controls" style="width:50%;margin:auto;display:block;">
        <source src="videos/commercial/commercial_1.mp4" type="video/mp4">
        <source src="videos/commercial/commercial_1.ogv" type="video/ogg">
        Your browser does not support HTML5 video.
      </video>

        <input id="homeCaptionOn" onClick="homeCaptionBoxOn()" style="font-size:24px;cursor:pointer;text-align:center;display:block;margin:auto;margin-top:20px;" type="button" value="View Captions" />
        <input id="homeCaptionOff" onClick="homeCaptionBoxOff()" style="font-size:24px;cursor:pointer;text-align:center;display:none;margin:auto;margin-top:20px;" type="button" value="Turn Captions Off" />
        
        <div id="captionBox" style="display:none;margin-top:20px;width:100%;height:120px;border:1px solid;border-color:#A0A0A4;">
          <div id="liveText" style="padding:15px;text-align:center;font-size:16px;">
              <div id="lineOne" style="padding:15px;text-align:center;text-ident:20px;font-size:16px;display:block;">
              </div>
          </div>
          <input type="button" style="margin-bottom:0;" value="Text Red" onClick="changeRed()" />
          <input type="button" style="margin-bottom:0;"value="Text Black" onClick="changeBlack()" />
        </div>
      <hr />
    </div>

  </div>

  <div class="sidebar three columns">
    <?php include "sidebar.php"; ?>
  </div>

</div>


<?php include "footer.php"; ?>