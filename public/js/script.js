// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event

document.addEventListener('DOMContentLoaded', function() {
  console.log("library-project[201~ JS imported successfully!");
  const elems = document.querySelectorAll('.sidenav');
  const instances = M.Sidenav.init(elems, options);
});

M.AutoInit();