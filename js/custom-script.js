$(document).ready(function(){
  // Project Information/Descriptions
  $(".proj").hover(function(){
    $("img", this).fadeToggle(500);
    $(".proj-description", this).fadeToggle(500);
  });
});
