var contents = document.getElementById('contents');
var contentsParent = contents.parentElement;
contents.remove();
var span = document.createElement('span');
contentsParent.prepend("Get back to your coding dreams",span);
var spanElement = document.getElementsByTagName("span")[0];
spanElement.classList.add('beautText');
spanElement.animate({
  left: '250px',
  opacity: '0.5',
  height: '150px',
  width: '150px',
},5000);


let count = 1;
let images = ['https://m.media-amazon.com/images/I/81-AYXbCq4L._AC_UX500_.jpg', 'image-1.jpg', 'image-2.jpg', 'image-3.jpg'];

var section = document.createElement('section');
var div = document.createElement('div');
var img = document.createElement('img');
var button = document.createElement('button');

img.setAttribute('id','image-cycle');
img.classList.add('img');
img.setAttribute('src',`${images[0]}`);
div.append(img);
section.append(div);
button.setAttribute('id','myBtn')
button.append('Cycle through image');
section.append(button);
contentsParent.prepend(section);
  // <section>
  //   <div>
  //     <img id="image-cycle" class="img" alt="webpage" src="${images[0]}"/>
  //   </div>
  //   <button id="myBtn">Cycle through image</button>
  // </section>

// function cycleThroughImages(){
//   document.getElementById('image-cycle').setAttribute('src',`./images/${images[count]}`);
//   if(count >= images.length){
//     count = 0;
//     document.getElementById('image-cycle').setAttribute('src',`${images[count]}`);
//   }
//   count += 1;
// }
// setInterval(cycleThroughImages,1500);

document.getElementById('myBtn').onclick = function(){
  document.getElementById('image-cycle').setAttribute('src',`./images/${images[count]}`);
  if(count >= images.length){
    count = 0;
    document.getElementById('image-cycle').setAttribute('src',`${images[count]}`);
  }
  count += 1;
}
