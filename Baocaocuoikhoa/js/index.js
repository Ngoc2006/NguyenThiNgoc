$(function() {
  //Simple filter controls
  $('.simplefilter li').click(function() {
    $('.simplefilter li').removeClass('active');
    $(this).addClass('active');
  });
  //Multifilter controls
  $('.multifilter li').click(function() {
    $(this).toggleClass('active');
  });
  //Shuffle control
  $('.shuffle-btn').click(function() {
    $('.sort-btn').removeClass('active');
  });
  //Sort controls
  $('.sort-btn').click(function() {
    $('.sort-btn').removeClass('active');
    $(this).addClass('active');
  });
});

$('.btn').click(function(){
  var error = false;
  if($('.name').val().trim()==""){
    $('.name').next().html("Chưa nhập tên");
    error = true;
  }else $('.name').next().html("");
  if($('.email').val().trim()==""){
    $('.email').next().html("Chưa nhập email");
    error = true;
  }else $('.email').next().html("");
  if($('.subject').val().trim()==""){
    $('.subject').next().html("Chưa nhập subject");
    error = true;
  }else $('.subject').next().html("");
  if($('.message').val().trim()==""){
    $('.message').next().html("Chưa nhập message");
    error = true;
  }else $('.message').next().html("");
  if ($('.name').val().trim()!="" && $('.email').val().trim()!="" && $('.subject').val().trim()!="" && $('.message').val().trim()!=""){
    alert('Thành công rồi !')
  }
});