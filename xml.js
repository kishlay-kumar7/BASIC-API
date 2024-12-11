let xhr=new XMLHttpRequest();
    let url='https://randomuser.me/api/';
    
    xhr.open('GET',url);
    xhr.onreadystatechange=function(){
        console.log(xhr.readyState);
        if(xhr.readyState==4){
            let data=JSON.parse(this.responseText);
            let result=data.results[0];
            let pic=result.picture.large;
            
            let image=document.querySelector('img');
            image.src=pic;
            let name=`${result.name.title} ${result.name.first} ${result.name.last}`;
            let country=`${result.location.country} (${result.location.state})`
            let email=result.email;
            let phone=result.phone;
            document.querySelector('.name').textContent = name;
            document.querySelector('.country').textContent = country;
            document.querySelector('.email').textContent = email;
            document.querySelector('.phone').textContent = phone;
        }
    }
    xhr.send();