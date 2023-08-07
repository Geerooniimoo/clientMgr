let data = [];

const handleClients = async () => {
    
    data = await ( await fetch('/api/data')).json();

    console.log(data[0]);

    if(data) {
        main.innerHTML = '';
        data.forEach(obj => {
            let client = Object.keys(obj)[0];

            console.log(client);
        main.innerHTML += `
        <div class="row">
            <h3>${client.toUpperCase()}</h3>
            <div class="btnsDiv">
                <button class="half">1/2 hour</button>
                <button class="one">1 hour</button>
                <button class="five">5 hours</button>
                <button class="twenty">20 hours</button>
            </div>
            <div class="remainDiv">
                <button class="minusHalf">- 1/2 h</button>
                <p class="remain">0</p>
            </div>
        </div>
            `;
        });
    };
};

handleClients();

const addClient = () => {
    
    if(newClient.value) {
        data = [ {[newClient.value]:{hours:[0,0,0,0,0],dates:[],remain:0}}, ...data ];

        console.log(JSON.stringify(data));

        fetch('/api/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(document.location.reload());
    };
};
