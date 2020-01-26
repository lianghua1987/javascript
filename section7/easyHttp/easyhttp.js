// ES5 Object Orient
function easyHttp(){
    this.http = new XMLHttpRequest();
}

// Get Http
easyHttp.prototype.get = function(url, callback){
    this.http.open('GET', url, true);
    
    // es5
    let self = this;
    this.http.onload = function(){
        if(self.http.status === 200){ 
            //console.log(this.http.responseText);// this belong to function, scope not defined here
           //return self.http.responseText;
           callback(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status);
        }
    }

    // es 6
    // this.http.onload = () => {
    //     if(this.http.status === 200){
    //         console.log(this.http.responseText);
    //     }
    // }


    this.http.send();
}




// Post Http

easyHttp.prototype.post = function(url, data, callback){
    this.http.open('POST', url, true);
    this.http.setRequestHeader('content-type', 'application/json');

    let self = this;
    this.http.onload = () => {
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}


// Delete Http
easyHttp.prototype.delete = function(url, callback){
    this.http.open('DELETE', url, true);

    let self = this;
    this.http.onload = () => {
        callback(null, 'Post Deleted');
    }

    this.http.send();
}

// Put Http
easyHttp.prototype.put = function(url, data, callback){
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('content-type', 'application/json');

    let self = this;
    this.http.onload = () => {
        callback(null, self.http.responseText);
    }

    this.http.send(JSON.stringify(data));
}