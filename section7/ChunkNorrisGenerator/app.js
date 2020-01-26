document.querySelector('.get-jokes').addEventListener('click', function(e){
    

    const number =document.querySelector('input[type=number]').value;
    console.log(number);

    const xhr = new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function(){
        if(xhr.status === 200){
            const response = JSON.parse(this.responseText);
            //console.log(response);

            if(response.type !== 'success'){
                alert('Oops, something went wrong!!!!')
            } else {
                const jokes = response.value;
            
                const ul = document.querySelector('.jokes');
                jokes.forEach(function(joke){
    
                    const li = document.createElement('li');
                    li.innerHTML = `${joke.id}: ${joke.joke}`;
                    ul.appendChild(li);
                });
            }
           
        }
    }

    xhr.send();




    e.preventDefault();
});