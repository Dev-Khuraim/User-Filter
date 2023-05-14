window.onload=()=>{

    let url= 'https://randomuser.me/api/?results=200'
    let user_list = document.querySelector('.user-list');
    let input = document.querySelector('input');
    const getUserRecords = async(url) =>{
        const response = await fetch(url);
        // console.log(response);
        const data = await response.json();
        console.log(data.results);
        displayRecords(data.results);
    
    }
    const displayRecords = (data)=>{
            data.forEach(element => {
                let pic = element.picture.thumbnail;
                let name = element.name.first+" "+element.name.last;
                let location = element.location.city+", "+element.location.country;
                let age = element.dob.age;
                let user = document.createElement('div');
                user.classList.add('user');
                user.innerHTML = `
                <img src="${pic}" alt="" id="image">
                 <div class="user-bio">
                    <p id = 'name'>${name}</p>
                    <p>${location}</p>
                    <p>${age}</p>`
                 user_list.appendChild(user);
            });
            
    }
    getUserRecords(url);
input.addEventListener('keyup',(e)=>{
searchUser(input.value);
})
    const searchUser =(key)=>{
        let users = user_list.querySelectorAll('.user');
        users.forEach(u=>{
            let n = u.querySelector('#name');
            console.log(n);
        if(n.innerText.startsWith(key)){
            console.log(n.innerText)
            u.style.display = 'flex';

        }
        else{
            u.style.display  = 'none';
        }

        })
    }
}
