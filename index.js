function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { message: 'Data fetched successfully' };
            resolve(data);  
            
        }, 2000); 
    });
}

async function handleData() {
    try {
        console.log("Fetching data...");
        const data = await fetchData(); 
        console.log(data.message);
    } catch (error) {
        console.error("An error occurred:", error);
    }
}
handleData();
