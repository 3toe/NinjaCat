$('img').click(function(){
   // store current image source in a var
   var newSource = $(this).attr('src');
   // Set the image source to the alternate source
   $(this).attr('src', $(this).attr('src2'));
   // Set previously store original source as new alternate source
   $(this).attr('src2', newSource);
})