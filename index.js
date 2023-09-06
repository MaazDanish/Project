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

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.search-form');
    // const searchResults = document.querySelector('#reviewsBox');

    searchForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const companyName = document.getElementById('companyName').value;
        const url = `/search?companyName=${encodeURIComponent(companyName)}`;

        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                display(data);
            } else {
                console.error(`Error: ${response.status} - ${response.statusText}`);
            }
        } catch (error) {
            console.error(error);
        }
    });
});



async function display(reviewObj) {
    // console.log(reviewObj);
    const { name, pros, cons, rating } = reviewObj;

    const h2 = document.createElement('h2');
    const h3 = document.createElement('h2');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const hr = document.createElement('hr');


    // getting the parent element 
    const ParentElement = document.querySelector('#reviewsBox');

    //  setting the  text content
    h2.textContent = 'Company Name : ' + name;
    h3.textContent = 'Company rating : ' + rating;
    p1.textContent = 'Pros :';
    p2.textContent = pros;
    p3.textContent = 'cons :';
    p4.textContent = cons;

    // let count = 0;
    // let newRating = 0;
    // if (reviewObj.name > 1) {
    //     newRating = newRating + reviewObj.rating;
    //     count++;
    // }

    //  Appending the child element to the parent element
    ParentElement.appendChild(h2);
    ParentElement.appendChild(h3);
    ParentElement.appendChild(p1);
    ParentElement.appendChild(p2);
    ParentElement.appendChild(p3);
    ParentElement.appendChild(p4);
    ParentElement.appendChild(hr)
}

// window.addEventListener('DOMContentLoaded', async () => {
//     try {
//         let res = await axios.get('http://localhost:4000/review');
//         for (var i = 0; i < res.data.length; i++) {
//             console.log(res.data[i]);
//             display(res.data[i]);
//         }
//     } catch (err) {
//         console.log(err);
//     }
// });


