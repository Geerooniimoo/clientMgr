let data = [
    '1/1/2025',
    '1/1/2025',
    '1/1/2025',
    '1/1/2025',
    '1/2/2025',
    '1/2/2025',
    '1/2/2025',
    '1/2/2025',
    '1/3/2025',
    '1/3/2025',
    '1/3/2025',
    '1/3/2025',
    '1/3/2025',
    '1/3/2025',
    '1/3/2025',
    '1/3/2025'
];

let getWk = date => {
    
    let wk = 0;
    let isWk = false;
    let oneWk = 604800000;
    let janOne = new Date(new Date(date).getFullYear(), 0, 1).getTime();
    
    while (!isWk) {
        wk++;
        janOne += oneWk;
        isWk = janOne > date 
    };
    
    return wk +'/' + new Date(date).getFullYear();
}

console.log(
    getWk(new Date('12/30/2023').getTime())
);
