const users = [
  {
    name: "Anmol Tyagi",
    pic: "https://static.vecteezy.com/system/resources/previews/028/794/707/non_2x/cartoon-cute-school-boy-photo.jpg",
    bio: "React Developer 🚀 | Freelancer 💻"
  },
  {
    name: "Radhika",
    pic: "https://static.vecteezy.com/system/resources/thumbnails/033/161/652/small_2x/ai-generated-cute-little-girl-holding-a-bouquet-of-flowers-in-mothers-day-international-womens-day-st-valentines-day-concept-copy-space-photo.jpg",
    bio: "Creative UI/UX Designer 🎨"
  },
  {
    name: "Devanshu",
    pic: "https://i.pinimg.com/originals/49/53/1e/49531e0921f686494ddbc95946f9df16.png",
    bio: "Backend Developer ⚙️ | Node.js Enthusiast"
  },
  {
    name: "Priya Verma",
    pic: "https://randomuser.me/api/portraits/women/1.jpg",
    bio: "UI/UX Designer 🎨 | Coffee Lover ☕"
  },
  {
    name: "Rohan Mehta",
    pic: "https://randomuser.me/api/portraits/men/2.jpg",
    bio: "Building products one line of code at a time 🚀"
  },
  {
    name: "Ananya Kapoor",
    pic: "https://randomuser.me/api/portraits/women/2.jpg",
    bio: "Creative Thinker ✨ | Design is intelligence made visible"
  },
  {
    name: "Kabir Singh",
    pic: "https://randomuser.me/api/portraits/men/3.jpg",
    bio: "Full Stack Developer ⚙️ | MERN Stack"
  },
  {
    name: "Sneha Patel",
    pic: "https://randomuser.me/api/portraits/women/3.jpg",
    bio: "Dreamer 🌙 | Designer 🎨 | Creator ✨"
  },
   {
    name: "Akash Taliyan",
    pic: "https://up.yimg.com/ib/th/id/OIP.JkcAOCD0QaHNwNdV3WIFrgHaHa?pid=Api&rs=1&c=1&qlt=95&w=121&h=121",
    bio: "Java Developer 💻 | React Enthusiast ⚛️"
  },
  {
    name: "Arjun Malhotra",
    pic: "https://randomuser.me/api/portraits/men/4.jpg",
    bio: "Backend Engineer 🔥 | Node.js & MongoDB"
  },
  {
    name: "Meera Nair",
    pic: "https://randomuser.me/api/portraits/women/4.jpg",
    bio: "Turning ideas into experiences 💫"
  },
  {
    name: "Liam Anderson",
    pic: "https://randomuser.me/api/portraits/men/5.jpg",
    bio: "Software Developer 👨‍💻 | Problem Solver"
  },
  {
    name: "Sophia Wilson",
    pic: "https://randomuser.me/api/portraits/women/5.jpg",
    bio: "Content Creator 📸 | Travel Enthusiast ✈️"
  },
  {
    name: "Noah Carter",
    pic: "https://randomuser.me/api/portraits/men/6.jpg",
    bio: "Code. Sleep. Repeat. 💻"
  },
  {
    name: "Olivia Brown",
    pic: "https://randomuser.me/api/portraits/women/6.jpg",
    bio: "Digital Artist 🎨 | Story Teller 📖"
  },
  {
    name: "Ethan Walker",
    pic: "https://randomuser.me/api/portraits/men/7.jpg",
    bio: "Passionate about scalable systems ⚙️"
  },
  {
    name: "Emma Johnson",
    pic: "https://randomuser.me/api/portraits/women/7.jpg",
    bio: "Creative UI Designer 🌸"
  },
  {
    name: "Lucas Martin",
    pic: "https://randomuser.me/api/portraits/men/8.jpg",
    bio: "Tech Explorer 🚀 | AI Curious 🤖"
  },
  {
    name: "Isabella Davis",
    pic: "https://randomuser.me/api/portraits/women/8.jpg",
    bio: "Minimalist Designer ✨"
  },
  {
    name: "Benjamin Clark",
    pic: "https://randomuser.me/api/portraits/men/9.jpg",
    bio: "Learning something new every day 📚"
  },
  {
    name: "Mia Thompson",
    pic: "https://randomuser.me/api/portraits/women/9.jpg",
    bio: "Designing with purpose ❤️"
  },
  {
    name: "William Scott",
    pic: "https://randomuser.me/api/portraits/men/10.jpg",
    bio: "JavaScript Lover ⚡ | Open Source Contributor"
  },
  {
    name: "Charlotte Moore",
    pic: "https://randomuser.me/api/portraits/women/10.jpg",
    bio: "Creative Mind 🌈 | UI/UX Specialist"
  }
];

// What we have to do

// Saare users show krane h
// Users ko filter krna h 
// Only filtered users show krane h

let cards = document.querySelector(".cards");
let input = document.querySelector("#search");


function showUsers(arr){
    cards.innerHTML = "";
    arr.forEach(function(user){

        // Creating outer div
        let outerDiv = document.createElement("div");
        outerDiv.classList.add("card");

        // Creating image tag
        let image = document.createElement("img");
        image.setAttribute("src" , user.pic);

        // Creating inner div
        let innerDiv = document.createElement("div");
        innerDiv.classList.add("content");

        // Creating heading tag
        let heading = document.createElement("h3");
        heading.textContent = user.name;

        // Creating paragraph tag
        let para = document.createElement("p");
        para.textContent = user.bio;

        // Appending childs
        cards.appendChild(outerDiv);
        outerDiv.appendChild(image);
        outerDiv.appendChild(innerDiv);
        innerDiv.appendChild(heading);
        innerDiv.appendChild(para);
    });

}

showUsers(users);


input.addEventListener("input" , function(){
    let filteredUsers = users.filter(function(user){
    return user.name
        .toLowerCase()
        .includes(input.value.toLowerCase());
    });


    if(filteredUsers.length > 0){
        showUsers(filteredUsers);
    }

    else{
        cards.innerHTML = "";
        let noUser = document.createElement("h1");
        noUser.textContent = "🔍 No User Found";
        noUser.style.color = "white";
        cards.appendChild(noUser);
    }
})


