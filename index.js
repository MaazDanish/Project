
document.getElementById('search').addEventListener('keyup' , filterItems);


async function OnSubmit(event) {
    event.preventDefault();
    const name = event.target.name.value;
    const pros = event.target.pros.value;
    const cons = event.target.cons.value;
    const rating = event.target.rating.value;

    const reviewObj = {
        name,
        pros,
        cons,
        rating
    }
    console.log(reviewObj);

    if (name === '' || pros === '' || cons === '' || rating === '') {
        alert('empty field are not allowed');
    }

    try {
        let res = await axios.post('http://localhost:4000/review', reviewObj);
        display(reviewObj);
    } catch (err) {
        console.log(err);
    }

    event.target.name.value = '';
    event.target.pros.value = '';
    event.target.cons.value = '';
    event.target.rating.value = '';
}

// document.addEventListener('DOMContentLoaded', async () => {
//     try {
//         let res = await axios.get('http://localhost:4000/review');
//         console.log(res.data);
//         for (var i = 0; i < res.data.length; i++) {
//             display(res.data[i]);
//         }
//     }
//     catch (err) {
//         console.log(err);
//     }
// });



async function display(reviewObj) {
    // console.log(reviewObj);
    const { name, pros, cons, rating } = reviewObj;

    const h2 = document.createElement('h2');
    const h3 = document.createElement('h2');
    const p1 = document.createElement('p')
    const p3 = document.createElement('p');
    const li = document.createElement('li');

    li.className = 'li-js';

    const hr = document.createElement('hr');


    // getting the parent element 
    const ParentElement = document.querySelector('#reviewsBox');

    //  setting the  text content
    h2.textContent = 'Company Name : ' + name;
    h3.textContent = 'Company rating : ' + rating;
    p1.textContent = 'Pros : ' + pros;
    p3.textContent = 'cons : ' + cons;


    // let count = 0;
    // let newRating = 0;
    // if (reviewObj.name > 1) {
    //     newRating = newRating + reviewObj.rating;
    //     count++;
    // }

    //  Appending the child element to the parent element
    li.appendChild(h2)
    li.appendChild(h3)
    li.appendChild(p1)
    li.appendChild(p3)
    li.appendChild(hr)
    ParentElement.appendChild(li);
    // ParentElement.appendChild(h2);
    // ParentElement.appendChild(h3);
    // ParentElement.appendChild(p1);
    // ParentElement.appendChild(p3);
    // ParentElement.appendChild(hr)
}

//  filtering items

function filterItems(e){
    let text = e.target.value;
    let ul = document.getElementById('reviewsBox')
    Array.from(ul.getElementsByClassName('li-js')).forEach(item =>{ 
       if(item.textContent.indexOf(text) !== -1){
           item.style.display='block'
        } else{
            item.style.display='none';
       }
    
    })
}

