const list = document.querySelector('#list-view');

window.addEventListener('load', function(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://run.mocky.io/v3/f3feef1c-9bfa-43fd-b2a0-bbe9abadb4f6', true);

    xhr.onload = function(){
        let output = "";

        if(this.status === 200){
            console.log(JSON.parse(this.responseText));
            let data = JSON.parse(this.responseText);
            data = data.clients;
            data.forEach(function(item){
                output += `
                <div class="table-body">
                    <span>${item.name}</span>
                    <span>${item.company}</span>
                </div>
                `
            })
            
        }
        list.innerHTML = output;
    }

    xhr.send();
})