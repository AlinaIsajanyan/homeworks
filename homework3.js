// 1. Given an array. Determine whether it consists only from uniques or not.

function unique(arr){
    for (let i=0;i<arr.length;i++){
      let temp =arr[i]
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
              return false
            }
        }
    } 
  return true
}
console.log(unique([34,23,12,67,23]));

// 2. Given an array of integers. All numbers are unique. Find the count of missing numbers
// between minimum and maximum elements to make integers sequence.

function missingQuantiti(arr) {
    let max =arr[0];
    let min =arr[0];
    for(let i=1;i< arr.length;i++){
        if(max<arr[i]){
            max=arr[i]
        }
       
    } 
    for(let i=1;i< arr.length;i++){
        if(min>arr[i]){
            min=arr[i]
        }
    } 
    let result=max-min+1-arr.length
    return result
}
console.log(missingQuantiti([3,56,2,67,4,6,]));

// 3. Write a constructor function called CoffeeShop, which has three instance properties:
// 1. name : a string (basically, of the shop)
// 2. menu : an array of items (of object type), with each item containing the item (name
// of the item), type (whether food or a drink) and price.
// 3. orders : an empty array
// and seven methods:
// 1. addOrder: adds the name of the item to the end of the orders array if it exists on the
// menu. Otherwise, return &quot;This item is currently unavailable!&quot;
// 2. fulfillOrder: if the orders array is not empty, return &quot;The {item} is ready!&quot;. If the
// orders array is empty, return &quot;All orders have been fulfilled!&quot;
// 3. listOrders: returns the list of orders taken, otherwise, an empty array.
// 4. dueAmount: returns the total amount due for the orders taken.
// 5. cheapestItem: returns the name of the cheapest item on the menu.
// 6. drinksOnly: returns only the item names of type drink from the menu.
// 7. foodOnly: returns only the item names of type food from the menu.
// IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.

function CoffeeShop(n,m){
    this.name =n
    this.menu =m
    this.orders =[]
    this.addOrder=addOrder
    this.fulfillOrder=fulfillOrder
    this.listOrders=listOrders
    this.dueAmount=dueAmount
    this.cheapestltem=cheapestltem
    this.drinksOnly=drinksOnly
    this.foodOnly=foodOnly
    
}

 let addOrder = function(item){
    if(item instanceof CoffeeShop){
      return  this.orders.push(item)
    }else{
     return "This item is currently unavailable!"   
    }
}

let fulfillOrder = function (){
    if(item!==[]){
        return "The {item} is ready!"
        }else{
           return  "All orders have been fulfilled!"
        }
}

function listOrders(){
if(this.orders!==[]){
    return this.orders
}else{
    return []
}
}

function dueAmount(){
    let sum =0
    for(let obj in this.orders){
        sum+=obj.price
    }
    return sum
}

function cheapestltem(){
    let min =0
    let str=""
    for(let obj in this.manu){
        if(obj.price<min){
            min=obj.price
            str=obj.name
        }
    }
    return str
}

function drinksOnly(){
    let namesDrink=[]
    for(let obj in this.menu){
        if(obj.type===drink){
            namesDrink.push(obj.name)
        }
    }
    return namesDrink
}

function foodOnly(){
    let namesFood =[]
    for(let obj in this.menu){
        if(obj.type===food){
            namesFood.push(obj.name)
        }
    }
    return namesFood
}