class EasyHttp{
    async get(url){
       const response = await fetch(url);
       const data = await response.json();
       return data;
    }

    async post(url, data){
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        });
        const res = await response.json();
        return res;
    }

    async put(url, data){
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(data)
        });
        const res = await response.json();
        return res;
    }

    async delete(url){
        const response = await fetch(url, {
            method: 'DELETE'
        });
        return await 'Object has been deleted!'; 
    }
}