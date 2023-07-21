
document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('.parallax');
  let instances = M.Parallax.init(elems, {
    // specify options here
  });
});

  
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
    fullWidth: true,
    indicators: true,
    dist: 0,
  });
});
        


let instance = M.Carousel.init({
  fullWidth: true
});
        


M.AutoInit();