let data = [];

const handleClients = async () => {
    
    data = await ( await fetch('/api/data')).json();

    if(data) {
        main.innerHTML = '';
        data.forEach(({id,name,hours,dates,remains}) => {
        
        let purchased = hours[0]*.5 + hours[1] + hours[2]*5 + hours[3]*10 + hours[4]*20;
        let owed = purchased - dates.length*.5
            
        main.innerHTML += `
        <div class="row">
            <div class="titleDiv">
                <p class="title">${name}</p>
                <button class="filter">Filter</button>
            </div>
            <div class="btnsDiv">
                <button onclick="addTime('${id}',0)" class="half">1/2</button>
                <button onclick="addTime('${id}',1)" class="one">1</button>
                <button onclick="addTime('${id}',2)" class="five">5</button>
                <button onclick="addTime('${id}',3)" class="twenty">10</button>
                <button onclick="addTime('${id}',4)" class="twenty">20</button>
            </div>
            <div class="remainDiv">
                <button class="minusHalf">- 1/2 hour</button>
                <p class="remain">${owed}</p>
            </div>
        </div>
            `;
        });
    };
};

handleClients();

const addClient = async () => {
    
    if(newClient.value) {
        data = [ 
            {
                remain: 0,
                dates: [],
                hours: [0,0,0,0,0],
                name: newClient.value,
                id: Math.floor(Math.random()*1000000).toString(16)
            }, ...data 
        ];

        let newUser = await fetch('/api/data', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
        });
        
        if(newUser.ok) document.location.reload();
    };
};

const addTime = async (id,i) => {
    let timeAdded = await fetch(`/api/data/${i}`, {
        method: 'PUT',
        body: JSON.stringify({"id":id}),
        headers: {'Content-Type': 'application/json'},
    });

    if(timeAdded.ok) document.location.reload();
};
