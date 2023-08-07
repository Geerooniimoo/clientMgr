let data = [];

const handleClients = async () => {
    
    data = await ( await fetch('/api/data')).json();

    if(data) {
        main.innerHTML = '';
        data.forEach(client => {
        main.innerHTML += `
        <div class="row">
            <h3>${client.toUpperCase()}</h3>
            <button class="half">1/2 hour</button>
            <button class="one">1 hour</button>
            <button class="five">5 hours</button>
            <button class="twenty">20 hours</button>
            <button class="minusHalf">1/2 hour</button>
            </div>
            `;
        });
    };
};

handleClients();

const addClient = () => {
    if(newClient.value) {
        data = [ newClient.value, ...data ];
        writeFile('./assets/db/data.json', JSON.stringify(data), err => {
            if(err) throw err;
            handleClients();
        });
    };
};
