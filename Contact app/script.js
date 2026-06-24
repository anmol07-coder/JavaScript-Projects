// const p = new Promise(function(resolve , reject){
//   setTimeout(function(){
//     resolve("Promise1 resolved successfully")
//   },10000);
// })

// const p2 = new Promise(function(resolve , reject){
//   setTimeout(function(){
//     resolve("Promise2 resolved successfully")
//   },5000);
// })


// async function greet() {
//   const val1 = await p;
//   console.log("Namaste Javascript 01");
//   console.log(val1);

//   const val2 = await p2;
//   console.log("Namaste Javascript 02");
//   console.log(val2);
   
// }

// greet();

// let pr = greet();
// pr.then(function(res){
//   console.log(res);
// })

// console.log("Konsa pehle chlega");


// function getData(){

//     return new Promise(resolve => {

//         setTimeout(() => {

//             resolve("Data");

//         },4000);

//     });

// }

// async function main(){

//     console.log("A");

//     let data =
//     await getData();
//     console.log("Middle");
//     console.log(data);

// }

// console.log("Start");

// main();

// console.log("End");
// function profileLekarAao(userName){

//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{

//             if(userName){

//                 console.log(`${userName} ki profile lekar aa raha hun`);

//                 resolve({
//                     userName,
//                     id:123,
//                     role:"Web Developer"
//                 });

//             }else{

//                 reject(new Error("Username not provided"));

//             }

//         },2000);

//     });

// }

// function profileShowKaro(id){

//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{

//             if(id){

//                 console.log(
//                     `Us user ki profile show krra hun jiske id h ${id}`
//                 );

//                 resolve({
//                     id,
//                     bio:"Cake Murder 17 June",
//                     profilePic:"https://www.pixelxphoto.com"
//                 });

//             }else{

//                 reject(new Error("Invalid ID"));

//             }

//         },3000);

//     });

// }

// function postsLekarAao(id){

//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{

//             if(id){

//                 console.log(
//                     `Us user ki posts show krra hun jiske id h ${id}`
//                 );

//                 resolve({
//                     id,
//                     posts:["Post01","Post02"]
//                 });

//             }else{

//                 reject(new Error("Posts not found"));

//             }

//         },4000);

//     });

// }

// function likeLekarAao(id,post){

//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{

//             if(post){

//                 console.log(`${post} show krra hun`);

//                 resolve({
//                     id,
//                     post01:"POST 01 LINK"
//                 });

//             }else{

//                 reject(new Error("Post not found"));

//             }

//         },5000);

//     });

// }

// function likeCountBatao(post){

//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{

//             if(post){

//                 console.log(
//                     `${post} ke like count show krra hun`
//                 );

//                 resolve({
//                     post01:post,
//                     likeCount:100
//                 });

//             }else{

//                 reject(new Error("Likes not found"));

//             }

//         },6000);

//     });

// }

// function commentsCountBatao(post){

//     return new Promise((resolve,reject)=>{

//         setTimeout(()=>{

//             if(post){

//                 console.log(
//                     `${post} ke comments count show krra hun`
//                 );

//                 resolve({
//                     post01:post,
//                     commentCount:100
//                 });

//             }else{

//                 reject(new Error("Comments not found"));

//             }

//         },7000);

//     });

// }

// async function main(){

//     try{
//        const profile =
//         await profileLekarAao("Anmol");

//         console.log(profile);

//         const profileData =
//         await profileShowKaro(profile.id);

//         console.log(profileData);

//         const posts =
//         await postsLekarAao(profileData.id);

//         console.log(posts);

//         const likeCount =
//         await likeCountBatao(posts.posts[0]);

//         console.log(likeCount);

//         const commentCount =
//         await commentsCountBatao(likeCount.post);

//         console.log(commentCount);

//         console.log("Bas itna hi kr skta hun main");

      
      
//     }

//     catch(err){

//         console.log("Error:", err.message);

//     }

// }

// main();

// Higher order function
// function sayHello(hello){
//     hello("Anmol");
// }

// function hello(name){
//     console.log(`Hello ${name}`);
// }

// sayHello(hello);


// Reusable Discount calculator
// function discountCalci(discount){
//     return function(price){
//         price = price - price * (discount/100);
//         console.log(price);
//     }
// }

// let ten = discountCalci(10);
// let twenty = discountCalci(20);
// let thirty = discountCalci(30);

// ten(100);
// twenty(100);

// Sorting in arrays
// let arr = [12,3,14,7,9];
// let[var1 , var2 , var3 , , var5] = arr;

// console.log(var1);
// console.log(var2);
// console.log(var3);
// console.log(var5);


// let ex = document.getElementsByClassName("tag-checkbox");
// console.dir(ex[0]);

let name = document.querySelector("#name");

name.addEventListener("change" , function(e){
    console.log(e.target.value);
    
})
