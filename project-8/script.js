var btn = document.querySelector('button')
var body = document.querySelector('body')
var main = document.getElementById('main')
let arr = [
  {
    name: "Aman",
    age: 24,
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
    skill: "Web Development",
    education: "B.Tech (CSE)",
    istatus: "Stranger"
  },
  {
    name: "Rohit",
    age: 22,
    image: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
    skill: "Graphic Design",
    education: "BFA",
    istatus: "Stranger"
  },
  {
    name: "Imran",
    age: 26,
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww",
    skill: "Python Programming",
    education: "B.Sc IT",
    istatus: "Stranger"
  },
  {
    name: "Pooja ",
    age: 23,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
    skill: "Content Writing",
    education: "BA English",
    istatus: "Stranger"
  },
  {
    name: "Rahul ",
    age: 31,
    image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww",
    skill: "Project Management",
    education: "PMP Certified",
    istatus: "Stranger"
  },
  {
    name: "Ayesha",
    age: 25,
    image: "https://images.unsplash.com/photo-1688888745596-da40843a8d45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww",
    skill: "UI/UX Design",
    education: "Diploma in Design",
    istatus: "Stranger"
  },
  {
    name: "Nisha",
    age: 21,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    skill: "Machine Learning",
    education: "B.Tech AI & DS",
    istatus: "Stranger"
  },
  {
    name: "Arjun",
    age: 34,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww",
    skill: "Business Analysis",
    education: "MBA Finance",
    istatus: "Stranger"
  },
  {
    name: "Kajal",
    age: 24,
    image: "https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D",
    skill: "Video Editing",
    education: "BA Mass Communication",
    istatus: "Stranger"
  }
];
function herofun(){
    var sum = ''
    arr.forEach(function(elem, idxb ){
    sum = sum + ` <div class="card">
            <img src=${elem.image} alt="">
            <h5>${elem.name}, ${elem.age}</h5>
            <p class="prof">[${elem.skill}]</p>
            <p class="frnd">${elem.istatus}</p>
            <button id="${idxb}">Add friend</button>
        </div>`
})

main.innerHTML = sum
}
herofun()

var p = document.querySelector('.frnd')
main.addEventListener('click',function(dets){
    var gold = arr[dets.target.id]
    if(gold.istatus =='Stranger'){
        gold.istatus = 'Friends'

    }else{
        gold.istatus = 'Stranger'
    }
    herofun()
})
