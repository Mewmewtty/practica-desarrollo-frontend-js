export const createProduct = async (name, description, price, transaction) => {
    const url = 'http://localhost:8000/api/products';
    const token = localStorage.getItem('token');

    const body = {
        name: name,
        description: description,
        price: price,
        transaction: transaction
    }
    let response;
    try {
        response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        if(!response.ok) {
            const data = await response.json();
            throw new Error(data.message);
        }
        
    } catch (error) {
       if(error.message) {
        throw error.message;
       } else {
        throw error;
       }
    }
}