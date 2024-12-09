import axios from "axios";

// setTimeout(()=>{console.log("hello world")},2000)

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then ( (response)=>{
        console.log(response.data);
    })

    // fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json()).then(json => console.log(json))