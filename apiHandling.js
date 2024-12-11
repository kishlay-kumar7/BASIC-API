let url = 'https://jsonplaceholder.typicode.com/posts';
let div = document.querySelector('.paras');

function getPost(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then((data) => {
                if (data.ok) {
                    return data.json();
                } else {
                    reject("Error occurred before");
                }
            })
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject('Error occurred with the message: ' + error);
            });
    });
}

getPost(url)
    .then((data) => {
        // Loop through the first 5 posts
        for (let index = 0; index < 5; index++) {
            setTimeout(() => {
                // Create new elements dynamically for each post
                let para = document.createElement('p');
                let para1 = document.createElement('p');

                // Set text content for the new elements
                para1.innerText = `Printing the ${index + 1} post!!`;
                para.innerText = `UserId: ${data[index].title}`;

                // Append the new elements to the div
                div.appendChild(para1);
                div.appendChild(para);
            }, 1000 * (index + 1)); // Delay incrementing for each post (1, 2, 3... seconds)
        }
    })
    .catch((error) => {
        console.log(`Error occurred: ${error}`);
    });




    //Now using Asyn and await

    // let url = 'https://jsonplaceholder.typicode.com/posts';
async function getPost(url) {
    try{
        let data= await fetch(url);
        if(!data.ok){
            throw new Error('Some error occured');
        }
        return data;
    }
    catch(err){
        console.log(`Some error occured!!`,err);
    }
    
}

getPost(url)
.then((data)=>{
    return data.json();  
})
.then((data)=>{
    data.slice(0,5).forEach((val,ind)=>{
        console.log(val.title);
        
    })
})