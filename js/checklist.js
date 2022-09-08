//* ব্রাউজার এবং জাভাস্ক্রিপ্ট রিলেটেড জিনিসগুলা প্রাকটিস

//? 1. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে
/* console.log('first')
console.log('second')
setTimeout(() => {
    console.log('third')
}, 3500);
console.log('fourth') */

//? ২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 

/* const promptBtn = () => {
    const getInput = prompt('please enter a number');
    const sum = JSON.parse(getInput) + 200;
    alert(sum)
}
 */
//? ৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও 

/* const confirmation = () => {
    confirm('are you want to see your web location');
    if (true) {
        console.log(location.href = 'https://www.google.com.bd/');
    }
} */

//? ৪. Cookies কি জিনিস। এইটা দিয়ে কি করা হয়। সেটা ইংরেজিতে ৫ থেকে ৭ লাইনের মধ্যে লিখে ফেলো। 
//* Cookies is a small piece of data sent from specific website that is stored in user's computer while they're browsing
//* Cookies can track users browsing activites
//* Cookies can remember login details for a specific website 
//* Cookies allow to store user preference, themes and setting specific to a user
//* Cookies help record and analyze user behaviours in advertising
//* Each Cookie has its own unique identification
//* When a user visit a website for the first time, the website puts a cookie in user's computer through browser that has a unique ID.The site then use ID to track user session

//? ৫. local storage আর session storage এর মধ্যে তিনটা পার্থক্য লিখে ফেলো। ইংরেজিতে। (নিজের মতো করে লিখবে )
//? Local Storage:
    //* 1. stores data in browser without any expiration date
    //* 2. data is not deleted when the browser is closed
    //* 3. data is store for future session

//? Seession Storage
    //* 1. data is deleted when the browser is closed
    //* 2. data is store for a session
    //* 3. data is not available for future session











//? ১০. stackoverflow নামে একটা ওয়েবসাইট আছে। সেখানে গিয়ে একাউণ্ট খুলবে। এবং মিনিমাম ৩০ মিনিট সেখানে স্পেন্ড করবে। দেখবে কিভাবে কি উত্তর দেয়। 