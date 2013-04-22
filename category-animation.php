<?php include "header.php"; ?>

<div class="content row">

  <div class="main nine columns">
    <!-- CHANGE THIS ON EVERY CATEGORY PAGE -->
    <h1>Animation</h1>
    <p>Clips and trailers of popular animated movies and series.</p>
    <hr/>

    <?php

    /*----------------------------------------------------------------

    BELOW HERE, ENTER TITLES, VIDEO TIMES, AND VIDEO DESCRIPTIONS

    ------------------------------------------------------------------------*/

    $query = "?video=";
    $vid_meta = array(
       // array('A TITLE','LENGTH OF MOVIE ie: 3:38','VIDEO DESCRIPTION', 'LINK'),

        //vid 1
        array(
          'title' => 'Just Keep Swimming',
          'time' => '0:29',
          'description' => 'Dory, the lovable and forgetful fish from Pixar\'s Finding Nemo offers some positive advice.',
          'query' => 'animation_1'
        ),
        //vid 2
        array(
          'title' => 'Wreck-It-Ralph Trailer',
          'time' => '0:46',
          'description' => 'A new animated, family-friendly film, presented by Pixar.',
          'query' => 'animation_2'
        ),
        //vid 3
        array(
          'title' => 'Spirited Away Trailer',
          'time' => '1:34',
          'description' => 'In the middle of her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and monsters; where humans are changed into animals; and a bathhouse for these creatures.',
          'query' => 'animation_3'
        ),
        //vid 4
        array(
          'title' => 'Rex Saves the Party',
          'time' => '0:38',
          'description' => 'A short featuring Rex from the Toy Story series.',
          'query' => 'animation_4'
        ),
      );

     /*---------------------------------------------------------------------

    DONT TOUCH ANYTHING ELSE

    ------------------------------------------------------------------------*/

    //LOOPS THROUGH THE IMAGES IN OUR FOLDER AND MAKES A POST FOR EACH
      $imagesDir = 'images/thumbs/animation/';
      $images = glob($imagesDir . '*.{jpg,jpeg,png,gif}', GLOB_BRACE);
      $count = 0;

      foreach($images as $image) : ?>

        <div class="post">
          <div class="five column">
            <a href="single-video.php<?php echo $query.$vid_meta[$count]['query']; ?>" class="" title="<?php echo $vid_meta[$count]['title']; ?>" >
              <img class="" src="<?php echo $image; ?>" alt="<?php echo $vid_meta[$count]['title']; ?>" />
            </a>
            <a href="single-video.php<?php echo $query.$vid_meta[$count]['query']; ?>" class="gallery button radius column" title="watch" >Watch</a>
          </div>
          <div class="seven column">
            <a href="single-video.php<?php echo $query.$vid_meta[$count]['query']; ?>" class="" title="<?php echo $vid_titles[$count]['title']; ?>" >
              <h2><?php echo $vid_meta[$count]['title']; ?></h2>
            </a>
            <p><?php echo $vid_meta[$count]['time']; ?></p>
            <p><?php echo $vid_meta[$count]['description']; ?></p>
          </div>
        </div>

      <hr />
      
      <?php $count++; endforeach; ?>

  </div>

  <div class="sidebar three columns">
    <?php include "sidebar.php"; ?>
  </div>

</div>


<?php include "footer.php"; ?>