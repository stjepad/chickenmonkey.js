// numbers 1 through 100 in sequence*//
for (let i=1; i <=100; i++) {
//below takes the i and divides by 5. if it is divisible by 5 it will equal 0 and write chicken *//
    if (i % 5 === 0) 
   {console.log ("chicken");
    }
//below takes the i and divides by 7. if it is divisible by 7 it will equal 0 and write monkey//
   if (i % 7 === 0) 
   {console.log ("monkey");
    }
//below takes i and divides by 5 and then also by 7. if both match it will write chicken monkey//
   if (i % 5 === 0 && i % 7 === 0) 
   {console.log ("chickenmonkey");
    }
}