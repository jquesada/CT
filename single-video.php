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

      $getQuery = $_GET['video'];

      if ($getQuery=="commercial_1"){
        $videoId = "commercialOne";
        $sourceOne = "videos/commercial/commercial_1.mp4";
        $sourceTwo = "videos/commercial/commercial_1.ogv";
      }
      if ($getQuery=="commercial_2"){
        $videoId = "commercialTwo";
        $sourceOne = "videos/commercial/commercial_2.mp4";
        $sourceTwo = "videos/commercial/commercial_2.ogv";
      }
      if ($getQuery=="commercial_3"){
        $videoId = "commercialThree";
        $sourceOne = "videos/commercial/commercial_3.mp4";
        $sourceTwo = "videos/commercial/commercial_3.ogv";
      }
      if ($getQuery=="commercial_4"){
        $videoId = "commercialFour";
        $sourceOne = "videos/commercial/commercial_4.mp4";
        $sourceTwo = "videos/commercial/commercial_4.ogv";
      }
      if ($getQuery=="commercial_5"){
        $videoId = "commercialFive";
        $sourceOne = "videos/commercial/commercial_5.mp4";
        $sourceTwo = "videos/commercial/commercial_5.ogv";
      }
      if ($getQuery=="commercial_6"){
        $videoId = "commercialSix";
        $sourceOne = "videos/commercial/commercial_6.mp4";
        $sourceTwo = "videos/commercial/commercial_6.ogv";
      }
      if ($getQuery=="commercial_7"){
        $videoId = "commercialSeven";
        $sourceOne = "videos/commercial/commercial_7.mp4";
        $sourceTwo = "videos/commercial/commercial_7.ogv";
      }
      if ($getQuery=="comedy_1"){
        $videoId = "comedyOne";
        $sourceOne = "videos/comedy/comedy_1.mp4";
        $sourceTwo = "videos/comedy/comedy_1.ogv";
      }
      if ($getQuery=="comedy_2"){
        $videoId = "comedyTwo";
        $sourceOne = "videos/comedy/comedy_2.mp4";
        $sourceTwo = "videos/comedy/comedy_2.ogv";
      }
      if ($getQuery=="animation_1"){
        $videoId = "animationOne";
        $sourceOne = "videos/animation/animation_1.mp4";
        $sourceTwo = "videos/animation/animation_1.ogv";
      }
      if ($getQuery=="animation_2"){
        $videoId = "animationTwo";
        $sourceOne = "videos/animation/animation_2.mp4";
        $sourceTwo = "videos/animation/animation_2.ogv";
      }
      if ($getQuery=="animation_3"){
        $videoId = "animationThree";
        $sourceOne = "videos/animation/animation_3.mp4";
        $sourceTwo = "videos/animation/animation_3.ogv";
      }
      if ($getQuery=="animation_4"){
        $videoId = "animationFour";
        $sourceOne = "videos/animation/animation_4.mp4";
        $sourceTwo = "videos/animation/animation_4.ogv";
      }
      if ($getQuery=="movie_1"){
        $videoId = "movieOne";
        $sourceOne = "videos/movie/movie_1.mp4";
        $sourceTwo = "videos/movie/movie_1.ogv";
      }
      if ($getQuery=="movie_2"){
        $videoId = "movieTwo";
        $sourceOne = "videos/movie/movie_2.mp4";
        $sourceTwo = "videos/movie/movie_2.ogv";
      }

    ?>

    <h1>Movie Title</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae aliquet augue.</p>
    <hr/>

    <div class="post">
      <video id="<?php echo $videoId ?>" controls="controls" width="800" style="width:50%;margin:auto;display:block;">
        <source src="<?php echo $sourceOne ?>" type="video/mp4">
        <source src="<?php echo $sourceTwo ?>" type="video/ogg">
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