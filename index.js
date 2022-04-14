function myArray(){
    Object.defineProperty(this,"length" ,{
        value : 0,
        writable : true,
        enumerable : false //don't count
    })   ;    
    

    this.length = arguments.length;

    for(let i=0; i<this.length; i++){
        this[i] = arguments[i]
    }
}

let a1 = new myArray("x","y","z")
// console.log((a1))



 myArray.prototype.धकेलना = function(value){
   

    let index = this.length;
    this[index] = value;
    this.length++;
 }


 myArray.prototype.बाहर = function(){
     let index = this.length-1;
     delete this[index];
     this.length--;

 }
 

 myArray.prototype.ऊपर = function(){
     let index = this.length-1;
     return this[index];
     
 }
 
 
myArray.prototype.जोड = function(){
    let inline = []
    for(let i=0; i<this.length; i++){
        inline.push(this[i])
    }
    return inline
    // return Object.values(a1)
}



myArray.prototype.उल्टा = function(){
    let reverse = []
    for(let i=this.length-1; i>=0; i--){
         reverse.push(this[i])
    }

    return reverse
}

myArray.prototype.लंबाई = function (){
    return this.length
}

a1.धकेलना("b")
console.log("a1 :", a1)

a1.बाहर()
console.log(a1)

let x = a1.ऊपर()
console.log(x)

let y = a1.जोड()
console.log(y)

let z = a1.उल्टा()
console.log(z)

console.log(a1.लंबाई())
