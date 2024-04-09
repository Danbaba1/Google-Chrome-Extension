var contents = $("#content");
var contentsParent = contents.parent();
contents.remove();
contentsParent.prepend('<span>Get back to your coding dreams</span>');
$("span").addClass('beautText');
$("span").animate({left: '250px',
opacity: '0.5',
height: '150px',
width: '150px'},5000);

let count = 1;
let images = ['https://m.media-amazon.com/images/I/81-AYXbCq4L._AC_UX500_.jpg', 'image-1.jpg', 'image-2.jpg', 'image-3.jpg'];

contentsParent.prepend(`
  <section>
    <div>
      <img id="image-cycle" class="img" alt="webpage" src="${images[0]}"/>
    </div>
    <button id="myBtn">Cycle through image</button>
  </section>
`);

// Using intervals to cycle through
// $(document).ready(function() {
//   function cycleThroughImages() {
//     $('#image-cycle').attr("src", `/images/${images[count]}`);
//     if (count >= images.length) {
//       count = 0;
//       $('#image-cycle').attr("src", `${images[count]}`);
//     }
//     count += 1;
//   }
//   setInterval(cycleThroughImages,1500);
// });

// Using button to cycle through
$(document).ready(function() {
  $('#myBtn').on('click', function() {
    $('#image-cycle').attr("src", `/images/${images[count]}`);
    if (count >= images.length) {
      count = 0;
      $('#image-cycle').attr("src", `${images[count]}`);
    }
    count += 1;
  });
});