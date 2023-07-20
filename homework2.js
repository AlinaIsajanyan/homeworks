// 1. Given a string. Check whether the string is palindrome or not.

function palindrome (str){
    let k = str.length
    for(let i=0;i<k/2;i++){
        if(str[i]!==str[k-1-i]){
            return false
        }
        return true
    }
}
console.log(palindrome("radar"));

// 2. Given a string and symbols. Change first symbol by the second one in the string.

function changeFirsstBySecond(str,simb1,simb2){
    let res = ""
    for (let i=0;i<str.length;i++){
      if(str[i] === simb1){
        res+=simb2;
      }else{
        res+=str[i];
      }
    }
    return res;
}
console.log(changeFirsstBySecond("“The results are not recorded yet”","t","w"));   

// 3. Print the following number pattern (write a function)
// 1
// 12
// 123
// 1234
// 12345
// 1234
// 123
// 12
// 1

function  pattern1(n){
    let res ="";
    for(let i=1;i<=n;i++){
      for(let j=1;j<=i;j++){
        res +=j;
      }
      console.log(res);
      res="";
    }
    for(let i=n-1;i>=1;i--){
      for(let j=1;j<=i;j++){
      res+=j;
      }
      console.log(res);
     res="";
    }
}
console.log(pattern1(9)) ;

// 4. Print following pattern (write a function)

function pattern2(m){
    let res="";
    for(let i=1;i<=m;i++){
        for(let j=1;j<=m;j++){
            if(j!==i){
                res+=" ";
            }else{
              res+="*"
            }
            
        }
        console.log(res);
        res = "";
    }
  }
  console.log(pattern2(7));    

//   5. Print following pattern (write a function)

function pattern3(k){
    let res="";
    for(let i=1;i<=k;i++){
        for(let j=1;j<=k;j++){
            if(j!==i && j !== k-i+1){
                res+=" ";
            }else{
              res+="*"
            }
        }
        console.log(res);
        res = "";
    }
} 
console.log(pattern3(8)); 

// 6. Print following pattern (write a function)
// * * * * *
// * * * * *
// * * * * *

function pattern4(z,t){
    let res="";
    for(let i=0;i<z;i++){
        for(let j=0;j<t;j++){
          res+="*"
        }
        console.log(res);
        res = "";
    }
  }
  console.log(pattern4(5,6));





