


// function calculateVAT(price){
    
//     if (typeof price !== "number" || price <0  ){
//         return "Invalid";
//     }
    
//     let vat = price *(7.5/100);
//     return vat;

    
// }

// let vat = calculateVAT(999);
// console.log(vat);









// function validContact (contact){
   
//     if(typeof contact !== "string"){
//         return "invalide";
//     }
    
//     let digits = [];
    
//     for(const digit of contact){
//         digits.push(digit)   
//     }
    
//     if( digits.includes(' ') || 
//         digits[0] !== '0' || 
//         digits[1] !== '1' || 
//         digits.length !== 11 ){
            
//         return "false"
//     }else{ 
//         return "true"
//     }
    
// }

// const result = validContact("01819234567");
// console.log(result)








// function  willSuccess( marks ) {

//     if(!Array.isArray(marks)){
//         return 'invalid'
//     }
    
//     let passMarks = [];
    
//     for( const mark of marks){

//         let passM = [];

//         if(mark >= 50){
//             passM.push(mark)
            
//         }else{
//             continue
//         }
//         let srtng1 = passM.toString();
//         passMarks.push(srtng1)
        
        
//     }

//     let failMarks = [];

//     for(const mark of marks){

//         let failM = [];

//         if(mark < 50){
//             failM.push(mark)
            
//         }else{
//             continue
//         }
//         let srtng2 = failM.toString();
//         failMarks.push(srtng2)
        
//     }
    
//     if(passMarks.length > failMarks.length){
//         return "true"
//     }else{
//         return 'false'
//     }
    
// }

// const result = willSuccess([48, 48, 50, 50, 100])
// console.log(result)











