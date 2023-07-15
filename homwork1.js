

// 1. Given an array of numbers. Write a function to separate odd and even numbers in
// different arrays.
function separate(num){
    let odd = [];
    let even = [];
    
    for(let i=0;i < num.length;i++){
      if(num[i]%2===0){
        even.push(num[i]);
        
      }else {
        odd.push(num[i]);
      }
        
    }
    let res =[odd,even];
    return res;
  }
   console.log(separate([4,8,5,6,2]));


  // 2. Write a function that calculates sum, difference, multiplication and division between
  // given array elements depending on passed operation symbol. Write appropriate function
  // for each operation.
 
function calculatesOperSimb (arr,symb){
    if(symb === "*"){
     return multiplyNumeric(arr)
    }else 
      if(symb === "+"){
        return sumNumeric(arr)
       }else 
        if(symb==="-"){
         return differenceNumeric(arr)
        }else
       return divisionNumeric(arr)
  }
  console.log(calculatesOperSimb([3,5,4,"sss",NaN],"/"));

  function sumNumeric(arr){
    let sum = 0;
    for (let i=0; i<arr.length ;i++){
      if (typeof arr[i] ==="number" &&  !isNaN(arr[i])){
         sum+= arr[i];
      }
    }
    return sum;
  }
  
  function differenceNumeric(arr){
    let Newarr =[];
    for (let i=0;i<arr.length;i++ ){ 
      if (typeof arr[i] ==="number" && !isNaN(arr[i])){
        Newarr.push(arr[i])
      }
    }
     let diff =Newarr[0];
   for(let i=1;i<Newarr.length;i++){
     diff-=Newarr[i]
   }
   return diff
  }
  function multiplyNumeric(arr){
    let Newarr =[] ;
    for (let i=0;i<arr.length;i++ ){ 
      if (typeof arr[i] ==="number" && !isNaN(arr[i])){
          Newarr.push(arr[i])
        }
      }
        let multiply =Newarr[0];
        for(let i=1;i<Newarr.length;i++){
         multiply*=Newarr[i]
        }
     return multiply
   }

   function divisionNumeric(arr){
    let Newarr =[];
    for (let i=0;i<arr.length;i++ ){ 
      if (typeof arr[i] ==="number" && !isNaN(arr[i])){
        Newarr.push(arr[i])
      }
    }
     let division =Newarr[0];
   for(let i=1;i<Newarr.length;i++){
    division/=Newarr[i]
   }
   return division
  }


  
  // 3. Write a function which receives two strings and removes appearances of the second
  // string from the first one.

  function removeString (str1,str2){
    let  newStr = str1.split(str2).join("")
    return newStr;
  }
  let str1="Yes, London. You know: fish, chips, cup 'o tea, bad food, worse weather";
  let str2 ="o";
  console.log(removeString(str1,str2));

//   4. Given an object. Invert it (keys become values and values become keys). If there is
// more than key for that given value create an array.
  
 function inverse (obj){
  let resObj ={};
  
  for(let key in obj){
    resObj[obj[key]]=resObj[obj[key]] || [];
    resObj[obj[key]].push(key);
  }
  return resObj
 } 
 let firstobj ={
  a:"1",
  b:"2",
  c:"2",
 }
 console.log(inverse(firstobj));


//  5. Given two objects. Write a function that performs shallow compare.
 
function shallowCompare (obj1,obj2){
  if( obj1.length!==obj2.length){
    return false
  }
  for(let key in obj1){
   if( obj2.hasOwnProperty(obj1[key])){
    return true
   }    
    return false
  }
    
}
let let1 ={
  a:"1",
  b:"2",
  c:"3"

}
let let2 ={
  a:"1",
  b:"2",
  c:"3"
}
 console.log(shallowCompare(let1,let2));
 
 
  
    
 function returnLongString(str){
   let res = [];
   let longStr = [];
   for(let i=0;i<str.length;i++){
     if(isSrtincludsChar(longStr,str[i])){
        
       if(longStr.length>res.length){
        res=longStr;
         longStr =[]
         }else{
          longStr=[];
        }
         
      }else{
          longStr.push(str[i] );
        }
     
    }
    return res
  }
  console.log(returnLongString("aytghadffvbnmkol")); 

function isSrtincludsChar(str,char){
  for(let i=0;i<str.length;i++){
    if(str[i]=== char){
       return true
     }
  }
  return false

}

   
  function sum (x,y){
    console.log(x+y)
  }

  sum(1,2)
    



    
    
    
    
    
      