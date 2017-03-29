// Place your FizzBuzz code here. 

// Count the numbers 1 to 20 and use JS to find numbers divisible by 3, 5 or both.
 for (i=1; i<= 20; i++){
 
    //Check for each number:
   
      // See if the number is divisible by 3:
        if (i % 3 === 0) {
         
            // If so also check if the number is divisble by 5:
        if (i % 5 === 0) { 
             
            // If divisible by 3 and 5 then write 'FizzBuzz'
            console.log('FizzBuzz'); 
            
            // If only divisible by 3 then write 'Fizz'
        } else {
            console.log('Fizz');
        }
   }  
     
      // See if the number is divisble by 5:       
        else if ( i % 5 ===0) {
            
            // If so write 'Buzz'
            console.log('Buzz');
       }
    
      // If number isn't divisble by 3 or 5 then write number
       else {
            console.log(i);
       }
  
 }
