module.exports = function getZerosCount(number, base) {
  // your implementation
 let i = 2, j = 0, multiplier = [];
 do {
     if(base === 2){
         multiplier[0] = 2;
         break;
     }
     if ( base % i === 0){
         multiplier[j] = i;
         j++;
         base = base / i;
     } else {
         i++;
     }
 }
 while (i < base);

 multiplier[j] = i;

 let powmultiplier = [];
 for (let i = 0; i < multiplier.length; i++){
     let amount = 1;
     while (multiplier[i] === multiplier[i + 1]){
         multiplier.splice(i+1, 1);
         amount++;
     }
     powmultiplier[i] = amount;

 }

 let amountSimpleMultiplier = [];
 for (let i = 0; i<multiplier.length; i++) {

     let n = 1;
     let resPow = 0;
     let pow;

     do {
         pow = Math.floor(number / Math.pow(multiplier[i], n));

         n++;

         resPow += pow;

     } while (pow > 0);
     amountSimpleMultiplier.push(resPow);

 }

 let resmultiplier = [];
 let sub = [];
 for (let g = 0; g<multiplier.length; g++){
     sub[0] = amountSimpleMultiplier[g];
     sub[1] = powmultiplier[g];
     resmultiplier[g] = sub;
     sub = [];

 }



 resmultiplier.sort(function(a,b) {return  a[0] - b[0]});



 return Math.floor(resmultiplier[0][0]/resmultiplier[0][1]);
}

