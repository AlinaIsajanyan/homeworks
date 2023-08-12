const arr = [
    {
        name: 'Anjela',
        surname: 'Isakova',
        age: 28,
        gender: 'female'
    },
        {
        name: 'Davit',
        surname: 'Margaryan',
        age: 30,
        gender: 'male'
    },    {
        name: 'Alina',
        surname: 'Isajanyan',
        age: 35,
        gender: 'female'
    },    {
        name: 'Karen',
        surname: 'Petrosyan',
        age: 45,
        gender: 'male'
    },    {
        name: 'Gayane',
        surname: 'Nersisyan',
        age: 29,
        gender: 'female'
    },
    {
        name: 'Alex',
        surname: 'Poghosyan',
        age: 25,
        gender: 'male'
    },
    {
        name: 'Anahit',
        surname: 'Manucharyan',
        age: 20,
        gender: 'female'
    }
] 

// 1
function myFind(f){
    for(let i=0;i<this.length;i++){
       const res=f(this[i],i,this)
        if(res){
            return this[i]
        }
    }
}
arr.ccc=myFind
console.log(arr.ccc(function(el){
    if(el.age>40){
        return true
    }
}));

// 2
function myMap(f){
    let res=[]
    for(let i=0;i<this.length;i++){
     const resf =f(this[i],i,this)
     res.push(resf)
    }
    return res
}
arr.aaa=myMap
console.log(arr.aaa(function(el){
     return el=el.name
}));

// 3
function myFindIndex(f){
    for(let i=0;i<this.length;i++){
       let res=f(this[i],i,this)
        if(res){
            return i
        }
    }
}
arr.bbb=myFindIndex
console.log(arr.bbb(function(el){
    if(el.age>30){
        return true
    }
}));
const arr1 =[3,8,5,4,6,7]
arr1.ddd=myFindIndex
 
console.log(arr1.ddd(function(el){
    if(el % 2 ===0){
        return true
    }
}));
arr1.hhh=myMap
console.log(arr1.hhh(function(el){
    return el=el+3
}))

//   4
  function myReduce(f,value){
    let acc=(value!==undefined)? value :undefined
    for(let i=0;i<this.length;i++){
         
        if(acc!==undefined){
        acc=f(acc,this[i],i,this)
        }else{
            acc=this[i]
        }
    }
    return acc
}
arr.ooo=myReduce
console.log(arr.ooo(function(acc,el){
    
     return acc+=el.surname+' '
    
},[]))
arr1.mmm=myReduce
console.log(arr1.mmm(function(acc,el){
    return acc=acc+el*2
},0))
