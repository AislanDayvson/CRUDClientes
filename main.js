const openModal = () => document.getElementById('modal').classList.add('active')
const closeModal = () => document.getElementById('modal').classList.remove('active')

const tempClient = {
    nome: "Leo",
    email: "aislan@gmail.com",
    celular: "984583454",
    cidade: "Recife"
}

const getLocalstorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalstorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))
// CRUD - CREATE / READ / UPDATE / DELETE

// CRUD => CREATE
const createClient = (client) => {
    const db_client = getLocalstorage()
    db_client.push(client)
    setLocalstorage(db_client)
}

// Eventos
document.getElementById('cadastrarCliente').addEventListener('click', openModal)
document.getElementById('modalClose').addEventListener('click', closeModal)

