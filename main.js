var theH2 = document.getElementById('txtComplete');

window.onload = function() {
    
    setTimeout( 
            function(){
              theH2.innerHTML = 'Images.'
            }
             
       ,1000)
       setTimeout( 
            function(){
              theH2.innerHTML = 'Video.'
            }
             
       ,2000)
       setTimeout(
           function() {
               theH2.innerHTML = 'Files.'
           }
       
        ,3000)
      
       
    setInterval( function() {
       setTimeout( 
            function(){
              theH2.innerHTML = 'Images.'
            }
             
       ,1000)
       setTimeout( 
            function(){
              theH2.innerHTML = 'Video.'
            }
             
       ,2000)
       setTimeout(
           function() {
               theH2.innerHTML = 'Files.'
           }
       
        ,3000)
        
    }, 3000)
};

