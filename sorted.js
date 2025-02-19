








function calculateVAT(price){
    
    if (typeof price !== "number" || price <0  ){

        return "Invalid";
    }
    
    let vat = price *(7.5/100);
    return vat;

    
}



function validContact (contact){
   
    if(typeof contact !== "string"){
       
        return "Invalid";
    }
    
    let digits = [];
    
    for(const digit of contact){
        digits.push(digit)   
    }
    
    if( digits.includes(' ') || 
        digits[0] !== '0' || 
        digits[1] !== '1' || 
        digits.length !== 11 ){
            
        let isFalse = false;
        return isFalse;
    }else{

        let isTrue = true;
        return isTrue;
    }
    
}




function  willSuccess( marks ) {

    if(!Array.isArray(marks)){

        return "Invalid";
    }
    
    let passMarks = [];
    
    for( const mark of marks){

        let passM = [];

        if(mark >= 50){
            passM.push(mark)
            
        }else{
            continue
        }
        let srtng1 = passM.toString();
        passMarks.push(srtng1)
        
        
    }

    let failMarks = [];

    for(const mark of marks){

        let failM = [];

        if(mark < 50){
            failM.push(mark)
            
        }else{
            continue
        }
        let srtng2 = failM.toString();
        failMarks.push(srtng2)
        
    }
    
    if(passMarks.length > failMarks.length){

        let isTrue = true;
        return isTrue;
    }else{

        let isFalse = false;
        return isFalse;
    }
    
}







function validProposal( person1 , person2){

    if( typeof person1 !== 'object' ||
        typeof person2 !== 'object'){
        return "Invalid";
    }

    
    
    if( person1.gender !== person2.gender && 
        Math.abs(person1.age - person2.age) <= 7){

        let isTrue = true;           
        return isTrue;
    }else{ 

        let isFalse = false;
        return isFalse;
    }

}






function  calculateSleepTime( times ) {

    for( const time of times){
        if (typeof time !== "number"){
            return "Invalid";
        }
    }

    let sum = 0;
    for( const time of times){
        sum += time;
    }
   
    let hour = Math.floor(sum / 3600);
    let minutes = Math.floor((sum % 3600) / 60);
    let second = Math.floor(sum % 60);

    const calculatedValue = {
        hour, 
        minutes, 
        second
    };
    
    
    return  calculatedValue;
}

