document.getElementById('button').addEventListener('click', loadCustomer);

function loadCustomer(){

    // create an XHR object

    const xhr = new XMLHttpRequest();

    // OPEN
    //xhr.open('GET', 'customer.json', true);
    xhr.open('GET', 'customers.json', true);

   

    xhr.onload = function(){
        if(this.status === 200){
          //console.log(this.responseText);

          const customers = JSON.parse(this.responseText);
          let result = '';
          customers.forEach(function(customer){
            //console.log(c);
            `
                <h3>${customer.name}</h3>
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
            `
          });

        //   const output = `
        //     <ul>
        //     <li>ID: ${customer.id}</li>
        //     <li>Name: ${customer.name}</li>
        //     <li>Company: ${customer.company}</li>
        //     <li>Phone: ${customer.phone}</li>
        //     </ul>
        //   `;
          document.getElementById('output').innerHTML = output;
        }
    }


    // optional - used for spinner/loader

    xhr.onprogress = function(){
        //console.log('ready state: ', xhr.readyState, this.responseText);
    }

    xhr.onerror = function(){
        //console.log('request error.....')
    }

    // ready state values
    // 0: request not init
    // 1: server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready
    xhr.onreadystatechange = function(){
        //console.log('ready state: ', xhr.readyState, this.responseText);
        if(this.status === 200 && this.readyState === 4){
            //document.getElementById('output').innerHTML = `<h3>${this.responseText}</h3>`;
        }
    }




    xhr.send();
}