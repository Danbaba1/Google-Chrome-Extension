var contents = $("#contents");
var contentsParent = contents.parent();
contents.remove();
contentsParent.prepend('<span>Get back to your coding dreams</span>');
$("span").addClass('beautText');
$("span").animate({left: '250px',
opacity: '0.5',
height: '150px',
width: '150px'},5000);
contentsParent.prepend('<img alt="webpage" src="https://m.media-amazon.com/images/I/81-AYXbCq4L._AC_UX500_.jpg"/>');

let count = 1;
let images = ['image-1.jpg', 'image-2.jpg', 'image-3.jpg'];

// function zeroCount() {
//   if (count === 0) {
//     console.log(count);
//   }
// }

//zeroCount();

$(document).ready(function() {
    $('#myBtn').on('click', function() {
      // zeroCount();
      if (count === images.length) {
        count = 0;
        $('div').css('background-image', `url(https://m.media-amazon.com/images/I/81-AYXbCq4L._AC_UX500_.jpg)`);
      }
      $('div').css('background-image', `url(images/${images[count]})`);
      console.log(images[count]);
      count += 1;
      console.log(count);
      // if (count > 0) {
       
      // }
      // $('div').addClass('pm-gallery-post-item-container').css('background-image', 'url(img/gallery/2nd-white-coat' + i + '.jpg)');
    });
  });