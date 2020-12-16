$(document).ready(main);
var flag=true;

function main(){
  $('.bt-menu').click(function(){
    if(flag){$('#barra').animate({left:'0'});}
    else{$('#barra').animate({left:'-100%'});}
    flag=!flag;
  });
}

