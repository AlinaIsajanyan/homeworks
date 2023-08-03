function strIncluds(str,substr,from) {
    let res= ""
    for(let i=from;i<str.length;i++){
      let k=i
      for(let j=0;j<substr.length;j++){
        res+=str[k];
        k++
        
      }
      if(res===substr){
        return true
      }else{
        res=""
      }
      }
        return false
    }  
  
console.log(strIncluds("what is your name?","is ",7));

function strIndexOf(str,substr,from) {
    let res=""
  for(let i=from;i<str.length;i++){
      let k=i
       for(let j=0;j<substr.length;j++){
         res+=str[k];
         k++
        }
        if(res===substr){
         return i
        }else{
         res=""
        }
    }
    return -1 
}  
  
console.log(strIndexOf("What is your name?","is",2));

function strReplace(str,str1,str2){
    let res =""
    let res1=""
    let res2=""
   let ind= str.indexOf(str1)
    for(let i=0;i<ind;i++){
        res1+=str[i]
    }
    for(let i=(ind+str1.length);i<str.length;i++){
        res2+=str[i]
    }
   return res=res1+str2+" "+res2
}
console.log(strReplace("what are your name?","are","is"));

function strReplaceAll(str,str1,str2){
    return str.split(str1).join(str2)
}
console.log(strReplaceAll("How is you is?","is","do"));

function arrIndexOf(arr,el,from){
    for(let i=from;i<arr.length;i++){
      if(arr[i]===el){
        return i
      }
    }
    return -1
  }
console.log(arrIndexOf([45,23,78,56,4],56,2));

function arrIncluds(arr,el,from){
    for(let i=from;i<arr.length;i++){
      if(arr[i]===el){
         return true
        }
    }
    return false
}
console.log(arrIncluds([45,23,78,56,4],78,0));

function arrSlice(arr,from,before){
    let res =[]
    for(let i=from;i<before;i++){
        res.push(arr[i])
    }
    return res
}
console.log(arrSlice([3,4,2,6,5,7,8,6],3,7));
  
  
  
  