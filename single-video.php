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
        $videoId = "video1";
        $title = "PC vs. Mac";
        $alt = "PC vs Mac";
        $sourceOne = "videos/commercial/commercial_1.mp4";
        $sourceTwo = "videos/commercial/commercial_1.ogv";
        $viewAll = "viewScriptCommecialOne()";
      }
      if ($getQuery=="commercial_2"){
        $videoId = "commercialTwo";
        $title = "Darth Vader Playing Golf";
        $alt = "Darth Vader Playing Golf";
        $sourceOne = "videos/commercial/commercial_2.mp4";
        $sourceTwo = "videos/commercial/commercial_2.ogv";
        $viewAll = "viewScriptCommecialTwo()";
      }
      if ($getQuery=="commercial_3"){
        $videoId = "commercialThree";
        $title = "Bud Light What's Up";
        $alt = "Bud Light What's Up";
        $sourceOne = "videos/commercial/commercial_3.mp4";
        $sourceTwo = "videos/commercial/commercial_3.ogv";
        $viewAll = "viewScriptCommecialThree()";
      }
      if ($getQuery=="commercial_4"){
        $videoId = "commercialFour";
        $title = "Mazda CX9";
        $alt = "Mazda CX9";
        $sourceOne = "videos/commercial/commercial_4.mp4";
        $sourceTwo = "videos/commercial/commercial_4.ogv";
        $viewAll = "viewScriptCommecialFour()";
      }
      if ($getQuery=="commercial_5"){
        $videoId = "commercialFive";
        $title = "M&M Candy";
        $alt = "M&M Candy";
        $sourceOne = "videos/commercial/commercial_5.mp4";
        $sourceTwo = "videos/commercial/commercial_5.ogv";
        $viewAll = "viewScriptCommecialFive()";
      }
      if ($getQuery=="commercial_6"){
        $videoId = "commercialSix";
        $title = "Best Buy";
        $alt = "Best Buy";
        $sourceOne = "videos/commercial/commercial_6.mp4";
        $sourceTwo = "videos/commercial/commercial_6.ogv";
        $viewAll = "viewScriptCommecialSix()";
      }
      if ($getQuery=="commercial_7"){
        $videoId = "commercialSeven";
        $title = "Psy Crackin Gangnam Style";
        $alt = "Psy Crackin Gangnam Style";
        $sourceOne = "videos/commercial/commercial_7.mp4";
        $sourceTwo = "videos/commercial/commercial_7.ogv";
        $viewAll = "viewScriptCommecialSeven()";
      }
      if ($getQuery=="comedy_1"){
        $videoId = "comedyOne";
        $title = "News Blooper";
        $alt = "News Blooper";
        $sourceOne = "videos/comedy/comedy_1.mp4";
        $sourceTwo = "videos/comedy/comedy_1.ogv";
        $viewAll = "viewScriptComedyOne()";
      }
      if ($getQuery=="comedy_2"){
        $videoId = "comedyTwo";
        $title = "Funny Miss South Carolina Response";
        $alt = "Funny Miss South Carolina Response";
        $sourceOne = "videos/comedy/comedy_2.mp4";
        $sourceTwo = "videos/comedy/comedy_2.ogv";
        $viewAll = "viewScriptComedyTwo()";
      }
      if ($getQuery=="animation_1"){
        $videoId = "animationOne";
        $title = "Finding Nemo";
        $alt = "Finding Nemo";
        $sourceOne = "videos/animation/animation_1.mp4";
        $sourceTwo = "videos/animation/animation_1.ogv";
        $viewAll = "viewScriptAnimationOne()";
      }
      if ($getQuery=="animation_2"){
        $videoId = "animationTwo";
        $title = "Wreck It Ralph";
        $alt = "Wreck It Ralph";
        $sourceOne = "videos/animation/animation_2.mp4";
        $sourceTwo = "videos/animation/animation_2.ogv";
        $viewAll = "viewScriptAnimationTwo()";
      }
      if ($getQuery=="animation_3"){
        $videoId = "animationThree";
        $title = "Spirited Away";
        $alt = "Spirited Away";
        $sourceOne = "videos/animation/animation_3.mp4";
        $sourceTwo = "videos/animation/animation_3.ogv";
        $viewAll = "viewScriptAnimationThree()";
      }
      if ($getQuery=="animation_4"){
        $videoId = "animationFour";
        $title = "Toy Story";
        $alt = "Toy Story";
        $sourceOne = "videos/animation/animation_4.mp4";
        $sourceTwo = "videos/animation/animation_4.ogv";
        $viewAll = "viewScriptAnimationFour()";
      }
      if ($getQuery=="movie_1"){
        $videoId = "movieOne";
        $title = "Godfather Scene";
        $alt = "Godfather Scene";
        $sourceOne = "videos/movie/movie_1.mp4";
        $sourceTwo = "videos/movie/movie_1.ogv";
        $viewAll = "viewScriptMovieOne()";
      }
      if ($getQuery=="movie_2"){
        $videoId = "movieTwo";
        $title = "Arnold Mr Freeze Quotes";
        $alt = "Arnold Mr Freeze Quotes";
        $sourceOne = "videos/movie/movie_2.mp4";
        $sourceTwo = "videos/movie/movie_2.ogv";
        $viewAll = "viewScriptMovieTwo()";
      }

    ?>

    <h1><?php echo $title; ?></h1>
    <hr/>

    <div class="post">
        <video id="<?php echo $videoId ?>" controls="controls" style="width:100%;margin:auto;display:block;">
          <source src="<?php echo $sourceOne ?>" type="video/mp4">
          <source src="<?php echo $sourceTwo ?>" type="video/ogg">
        Your browser does not support HTML5 video.
      </video>

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

  <div class="sidebar three columns">
    <?php include "sidebar.php"; ?>
  </div>

</div>


<?php include "footer.php"; ?>