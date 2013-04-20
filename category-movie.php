<?php include "header.php"; ?>

<div class="content row">

  <div class="main nine columns">
    <!-- CHANGE THIS ON EVERY CATEGORY PAGE -->
    <h1>Movies</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae aliquet augue.</p>
    <hr/>

    <?php

    /*----------------------------------------------------------------

    BELOW HERE, ENTER TITLES, VIDEO TIMES, AND VIDEO DESCRIPTIONS

    ------------------------------------------------------------------------*/

    $vid_meta = array(
       // array('A TITLE','LENGTH OF MOVIE ie: 3:38','VIDEO DESCRIPTION', 'LINK'),

        //vid 1
        array(
          'title' => 'A Title',
          'time' => '3:38',
          'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae aliquet augue. Integer ut diam augue. Maecenas ac tortor sem. ',
          'link' => '/link/'
        ),
        //vid 2
        array(
          'title' => 'More Title',
          'time' => '2:44',
          'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae aliquet augue. Integer ut diam augue. Maecenas ac tortor sem. ',
          'link' => '/link/'
        ),
        //vid 3
        array(
          'title' => 'Yup, A Title',
          'time' => '4:20',
          'description' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae aliquet augue. Integer ut diam augue. Maecenas ac tortor sem. ',
          'link' => '/link/'
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
            <a href="<?php echo $vid_meta[$count]['link']; ?>" class="" title="<?php echo $vid_meta[$count]['title']; ?>" >
              <img class="" src="<?php echo $image; ?>" alt="<?php echo $vid_meta[$count]['title']; ?>" />
            </a>
            <a href="<?php echo $vid_meta[$count]['link']; ?>" class="gallery button radius column" title="watch" >Watch</a>
          </div>
          <div class="seven column">
            <a href="<?php echo $vid_meta[$count]['link']; ?>" class="" title="<?php echo $vid_titles[$count]['title']; ?>" >
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