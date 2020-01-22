document.getElementById('button').addEventListener('click', loadData);

function loadData(){

    // create an XHR object

    const xhr = new XMLHttpRequest();

    // OPEN
    xhr.open('GET', 'data.txt', true);

   

    xhr.onload = function(){
        if(this.status === 200){
          
        }
    }

    // optional - used for spinner/loader

    xhr.onprogress = function(){
        console.log('ready state: ', xhr.readyState, this.responseText);
    }

    xhr.onerror = function(){
        console.log('request error.....')
    }

    // ready state values
    // 0: request not init
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready
    xhr.onreadystatechange = function(){
        console.log('ready state: ', xhr.readyState, this.responseText);
        if(this.status === 200 && this.readyState === 4){
            document.getElementById('output').innerHTML = `<h3>${this.responseText}</h3>`;
        }
    }




    xhr.send();
}