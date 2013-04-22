<?php include "header.php"; ?>

<div class="content row">

  <div class="main nine columns">
    <!-- CHANGE THIS ON EVERY CATEGORY PAGE -->
    <h1>Movies</h1>
    <p>A collection of great scenes from movies and quote mashups.</p>
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
          'title' => 'You Can Act Like A Man',
          'time' => '0:33',
          'description' => 'The most intolerable offense of all is a man who is weak and out of control.',
          'query' => 'movie_1'
        ),
        //vid 2
        array(
          'title' => 'Freeze!',
          'time' => '0:30',
          'description' => 'A mashup of Arnold Schwarzenegger\'s greatest quotes from Batman & Robin.',
          'query' => 'movie_2'
        )

      );

     /*---------------------------------------------------------------------

    DONT TOUCH ANYTHING ELSE

    ------------------------------------------------------------------------*/

    //LOOPS THROUGH THE IMAGES IN OUR FOLDER AND MAKES A POST FOR EACH
      $imagesDir = 'images/thumbs/movies/';
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