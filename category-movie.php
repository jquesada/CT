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
          'title' => 'PC\'s Home Movie',
          'time' => '0:30',
          'description' => 'PC wants to show off his home movie. But It\'s not quite there. A commercial for Apple.',
          'link' => '/link/'
        ),
        //vid 2
        array(
          'title' => 'Vader Cheats',
          'time' => '0:31',
          'description' => 'Darth Vader uses the force to cheat in golf. Who would dare challenge him? A commercial for Spike Network.',
          'link' => '/link/'
        ),
        //vid 3
        array(
          'title' => 'Bud Light - Wassuup!',
          'time' => '1:02',
          'description' => 'The average afternoon for some guys and their favorite, refreshing drink. A commercial for Budweiser.',
          'link' => '/link/'
        )
        //vid 4
        array(
          'title' => 'Mazda - Improbable is Possible',
          'time' => '0:30',
          'description' => 'The Mazda CX-9 defies many stereotypes and becomes the best vehicle for an incredible world. A commercial for Mazda.',
          'link' => '/link/'
        )
        //vid 5
        array(
          'title' => 'M&M\'s Won\'t Do That',
          'time' => '0:30',
          'description' => 'Red M&M is haunted by the lengths he won\'t go for love. A Commercial for M&M\'s.',
          'link' => '/link/'
        )
        //vid 6
        array(
          'title' => 'Amy Poehler at Best Buy',
          'time' => '0:32',
          'description' => 'Amy Poehler\'s shopping at Best Buy and asks the really tough questions. A commercial for Best Buy.',
          'link' => '/link/'
        )
        //vid 7
        array(
          'title' => 'How PSY Does it',
          'time' => '0:30',
          'description' => 'Everyone loves pistachios! Music sensation PSY is no different, and enjoys his Gangnam Style. A Commercial for Wonderful Pistachios.',
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