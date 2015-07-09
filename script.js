var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var main = function() {

  //adds new item on submit
  $('form').on('submit', function() {
    var text = $("#todo").val(), 
        html = template(text); 

    $('.list').append(html);
    $("#todo").val(""); 

    return false;  
  });

  //toggle star color. JS isn't being added to the added list items.
  //how to fix that? start the search at the parent list instead of the star icon!
  //Then use the added selector inside the on options. 
  $('.list').on('click', '.glyphicon-star', function(){
    $(this).toggleClass('active');
  });

  //remove the element
  $('.list').on('click', '.glyphicon-remove', function(){
    $(this).parent().remove(); 
  });
  
  
};

$(document).ready(main);