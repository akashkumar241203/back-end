function doSomething(){
    console.log("**** doSomething is being called ******************");
}
function againdoSomething(){
    console.log("****Hello*****");

}
// CRUD- create read update delete
let arr= [];
function createfun(element){
arr.push(element);
return arr;
}
function readfun(){
    return arr;
    }
function updatefun(index,element){
        arr[index]=element;
        return arr;
    } 
function deletefun(index){
            arr.splice[index,1];
            //delete 1 value at given index
            return arr;
            }   
module.exports = {
     doSomething,
     againdoSomething,
     createfun,
     readfun,
     deletefun,
     updatefun,
     
};