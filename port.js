

function home(){
      $(".front").slideDown('slow');
      $(".skills").slideUp('slow');
      $(".projects").slideUp('slow');
      $(".blogs").slideUp('slow');
      $(".contact").slideUp('slow');
      $("#home").removeClass("fa-circle-thin").addClass("fa-circle");
      $("#skills").addClass("fa-circle-thin").removeClass("fa-circle");
      $("#projects").addClass("fa-circle-thin").removeClass("fa-circle");
      $("#blogs").addClass("fa-circle-thin").removeClass("fa-circle");
      $("#contact").addClass("fa-circle-thin").removeClass("fa-circle");
      $(".front-btn").addClass("active-class");
      $(".skills-btn").removeClass("active-class");
      $(".projects-btn").removeClass("active-class");
      $(".contact-btn").removeClass("active-class");
      $(".blogs-btn").removeClass("active-class");
}
function skills(){
      $(".skills").slideDown('slow');
      $(".front").slideUp('slow');
      $(".projects").slideUp('slow');
      $(".blogs").slideUp('slow');
      $(".contact").slideUp('slow');
      $("#skills").removeClass("fa-circle-thin").addClass("fa-circle");
      $("#home").addClass("fa-circle-thin").removeClass("fa-circle");
      $("#projects").addClass("fa-circle-thin").removeClass("fa-circle");
      $("#blogs").addClass("fa-circle-thin").removeClass("fa-circle");
      $("#contact").addClass("fa-circle-thin").removeClass("fa-circle");
      $(".skills-btn").addClass("active-class");
      $(".front-btn").removeClass("active-class");
      $(".projects-btn").removeClass("active-class");
      $(".contact-btn").removeClass("active-class");
      $(".blogs-btn").removeClass("active-class");
}
function projects(){
      $(".projects").slideDown('slow');
      $(".front").slideUp('slow');
      $(".skills").slideUp('slow');
      $(".blogs").slideUp('slow');
      $(".contact").slideUp('slow');
      $("#projects").removeClass("fa-circle-thin").addClass("fa-circle");
      $("#skills").addClass("fa-circle-thin").removeClass("fa-circle");
      $("#home").addClass("fa-circle-thin").removeClass("fa-circle");
      $("#blogs").addClass("fa-circle-thin").removeClass("fa-circle");
      $("#contact").addClass("fa-circle-thin").removeClass("fa-circle");
      $(".projects-btn").addClass("active-class");
      $(".front-btn").removeClass("active-class");
      $(".skills-btn").removeClass("active-class");
      $(".contact-btn").removeClass("active-class");
      $(".blogs-btn").removeClass("active-class");

}
function contact(){
      $(".contact").slideDown('slow');
      $(".front").slideUp('slow');
      $(".skills").slideUp('slow');
      $(".projects").slideUp('slow');
      $(".blogs").slideUp('slow');
      $("#contact").removeClass("fa-circle-thin").addClass("fa-circle");
      $("#skills").addClass("fa-circle-thin").removeClass("fa-circle");
      $("#projects").addClass("fa-circle-thin").removeClass("fa-circle");
      $("#home").addClass("fa-circle-thin").removeClass("fa-circle");
      $("#blogs").addClass("fa-circle-thin").removeClass("fa-circle");
      $(".contact-btn").addClass("active-class");
      $(".front-btn").removeClass("active-class");
      $(".skills-btn").removeClass("active-class");
      $(".projects-btn").removeClass("active-class");
      $(".blogs-btn").removeClass("active-class");
}
function blogs(){
      $(".blogs").slideDown('slow');
      $(".front").slideUp('slow');
      $(".skills").slideUp('slow');
      $(".projects").slideUp('slow');
      $(".contact").slideUp('slow');
      $("#blogs").removeClass("fa-circle-thin").addClass("fa-circle");
      $("#skills").addClass("fa-circle-thin").removeClass("fa-circle");
      $("#projects").addClass("fa-circle-thin").removeClass("fa-circle");
      $("#home").addClass("fa-circle-thin").removeClass("fa-circle");
      $("#contact").addClass("fa-circle-thin").removeClass("fa-circle");
      $(".blogs-btn").addClass("active-class");
      $(".front-btn").removeClass("active-class");
      $(".skills-btn").removeClass("active-class");
      $(".projects-btn").removeClass("active-class");
      $(".contact-btn").removeClass("active-class");
}
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
      
});

