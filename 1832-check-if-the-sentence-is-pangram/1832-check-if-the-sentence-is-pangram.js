/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
 const alph = {
     a: true,
     b: true,
     c: true,
     d: true,
     e: true,
     f: true,
     g: true,
     h: true,
     i: true,
     j: true,
     k: true,
     l: true,
     m: true,
     n: true,
     o: true,
     p: true,
     q: true,
     r: true,
     s: true,
     t: true,
     u: true,
     v: true,
     w: true,
     x: true,
     y: true,
     z: true
 }  
 const arr = new Array(26)
 let idx = 0;
 while(arr.length && idx < sentence.length){
     if(alph[sentence[idx]]){
         delete alph[sentence[idx]]
         arr.length = arr.length - 1;
     }
     idx++;
 }
    
 return !arr.length;
};