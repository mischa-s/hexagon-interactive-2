$(document).ready(function() {
    $('.modal').hide();
    
    $('.closeModal').click(function() {
       $('.modal').fadeOut(300); 
        $('body').css('overflow','scroll');
    });
    
    $('.tooltip i').click(function() {
       $(this).parent().removeClass('active');
        $('.clickable').attr('class','clickable');
    });
    
    $('#yellow').on('click', function(event) {
       $('.tooltip').removeClass('active');
        $('.clickable').attr('class','clickable');
        $('.tooltip.yellow').addClass('active');
        $(this).attr('class','clickable active');
        event.stopPropagation();
    });
    
    $('#orange').on('click', function(event) {
       $('.tooltip').removeClass('active');
        $('.clickable').attr('class','clickable');
        $('.tooltip.orange').addClass('active');
        $(this).attr('class','clickable active');
        event.stopPropagation();
    });
    
    $('#red').on('click', function(event) {
       $('.tooltip').removeClass('active');
        $('.clickable').attr('class','clickable');
        $('.tooltip.red').addClass('active');
        $(this).attr('class','clickable active');
        event.stopPropagation();
    });
    
    $('#purple').on('click', function(event) {
       $('.tooltip').removeClass('active');
        $('.clickable').attr('class','clickable');
        $('.tooltip.purple').addClass('active');
        $(this).attr('class','clickable active');
        event.stopPropagation();
    });
    
    $('#green').on('click', function(event) {
       $('.tooltip').removeClass('active');
        $('.clickable').attr('class','clickable');
        $('.tooltip.green').addClass('active');
        $(this).attr('class','clickable active');
        event.stopPropagation();
    });
    
    $('#blue').on('click', function(event) {
       $('.tooltip').removeClass('active');
        $('.clickable').attr('class','clickable');
        $('.tooltip.blue').addClass('active');
        $(this).attr('class','clickable active');
        event.stopPropagation();
    });
    
    $('.tooltip').on('click', function(event) {
        event.stopPropagation();
    });

    $(document).on('click', function(event) {
        $('.tooltip').removeClass('active');
        $('.clickable').attr('class','clickable');
    });
    
    $('.yellow-button').click(function() {
       $('#modal1').fadeIn(300);
        $('.tooltip.yellow').removeClass('active');
        $('body').css('overflow','hidden');
        
        $('.yellow').animate({scrollTop : 0},300);
		return false;
    });
    
    $('.orange-button').click(function() {
       $('#modal2').fadeIn(300);
        $('.tooltip.orange').removeClass('active');
        $('body').css('overflow','hidden');
        
        $('.orange').animate({scrollTop : 0},300);
		return false;
    });
    
    $('.red-button').click(function() {
       $('#modal3').fadeIn(300);
        $('.tooltip.red').removeClass('active');
        $('body').css('overflow','hidden');
        
        $('.red').animate({scrollTop : 0},300);
		return false;
    });
    
    $('.purple-button').click(function() {
       $('#modal4').fadeIn(300);
        $('.tooltip.purple').removeClass('active');
        $('body').css('overflow','hidden');
        
        $('.purple').animate({scrollTop : 0},300);
		return false;
    });
    
    $('.green-button').click(function() {
       $('#modal5').fadeIn(300);
        $('.tooltip.green').removeClass('active');
        $('body').css('overflow','hidden');
        
        $('.green').animate({scrollTop : 0},300);
		return false;
    });
    
    $('.blue-button').click(function() {
       $('#modal6').fadeIn(300);
        $('.tooltip.blue').removeClass('active');
        $('body').css('overflow','hidden');
        
        $('.blue').animate({scrollTop : 0},300);
		return false;
    });
    
    
        
});