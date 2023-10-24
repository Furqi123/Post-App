var backgroundImage;
function post() {
  var title = document.getElementById('title');
  var description = document.getElementById('Description');
  if (title.value.trim() && description.value.trim()) {
    var post = document.getElementById('posts')
    post.innerHTML += `
<div class="card mb-4">
<div class="card-header">
  Post
</div>
<div style="background-image: url(${backgroundImage})"; class="card-body">
  <blockquote class="blockquote mb-0">
    <p>${title.value}</p>
    <footer class="blockquote-footer">${description.value}</footer>
  </blockquote>
</div>
</div>
`
    title.value = "";
    description.value = ""
  }
  else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please Enter Title & Description',

    })
  }
}
function selectImage(src) {
 backgroundImage = src;
  var bgImage = document.getElementsByClassName('bg-image')
  for(var i = 0; i < bgImage.length; i++){
    bgImage[i].className = "bg-image";
  }
  event.target.className += " images-list-selected"
}
