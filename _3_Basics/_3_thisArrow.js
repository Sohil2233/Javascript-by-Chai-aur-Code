const user = {
    username: "sohil",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);//current context
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);//empty object like {}
//browser me window show krta hai



// function chai(){
//     let username = "soul"
//     console.log(this.username);//undefined
//     console.log(this);//global values
// }

// chai()

// const chai = function () {
//     let username = "sohil"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "sohil"
    console.log(this);// op   {} 
    console.log(this.username);// undefined
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }//* explicit    * return

// const addTwo = (num1, num2) =>  num1 + num2  //  implicit 

// const addTwo = (num1, num2) => ( num1 + num2 ) ////implicit no need to write return keyword if there is ()

const addTwo = (num1, num2) => ({username: "hitesh"}) //object return


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

