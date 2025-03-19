async function GetProductos() {
    try {
        const response = await fetch('http://localhost:3000/producto', {
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

async function PostProductos(productos,descripcion,precio,Tamano,imagenB64) {
    try {
        const userData = {productos,descripcion,precio,Tamano,imagenB64};

        const response = await fetch("http://localhost:3000/producto", {
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

    
    async function UpdateProductos(productos,descripcion,precio,Tamano,imagenB64, id) {
    try {
        const userData = {productos,descripcion,precio,Tamano,imagenB64,id };

        const response = await fetch(`http://localhost:3000/producto/${id}`, {
            method: 'PUT',
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

async function DeleteProductos(id) {
    try {
        const response = await fetch(`http://localhost:3000/producto/${id}`, {
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


export default { GetProductos, PostProductos, UpdateProductos, DeleteProductos};