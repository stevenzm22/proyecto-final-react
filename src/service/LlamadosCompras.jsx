async function GetCompras() {
    try {
        const response = await fetch('http://localhost:3000/Compras', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

async function PostCompras(Nombre,tarjeta,mes,año,cvv) {
    try {
        const userData =
         {Nombre,
            tarjeta,
            mes,
            año,
            cvv
        };

        const response = await fetch("http://localhost:3000/Compras", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Error posting user');
        }

        return await response.json();
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}

async function UpdateCompras(Nombre,tarjeta,mes,año,cvv,id) {
    try {
        const userData = {Nombre,tarjeta,mes,año,cvv,id };

        const response = await fetch(`http://localhost:3000/Compras/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error(`Error updating user with id ${id}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error updating user:', error);
        throw error;
    }
}

async function DeleteCompras(id) {
    try {
        const response = await fetch(`http://localhost:3000/Compras/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}


export default { GetCompras, PostCompras, UpdateCompras, DeleteCompras};