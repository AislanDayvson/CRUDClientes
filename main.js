const openModal = () => document.getElementById('modal').classList.add('active')
const closeModal = () => {
    clearFields()
    document.getElementById('modal').classList.remove('active')
}

const getLocalstorage = () => JSON.parse(localStorage.getItem('db_client')) ?? []
const setLocalstorage = (dbClient) => localStorage.setItem("db_client", JSON.stringify(dbClient))

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

const clearFields = () => {
    const campos = document.querySelectorAll('.modal-field')
    campos.forEach(field => { field.value = ''})
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tbClient>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}
// CRUD - CREATE / READ / UPDATE / DELETE

// CRUD => CREATE
const createClient = (client) => {
    const db_client = getLocalstorage()
    db_client.push(client)
    setLocalstorage(db_client)
}

// CRUD => READ
const readClient = () => getLocalstorage()

// CRUD => UPDATE
const updateClient = (index, client) => {
    const db_client = readClient()
    db_client[index] = client
    setLocalstorage(db_client)
}

// CRUD => DELETE
const deleteClient = (index) => {
    const db_client = readClient()
    db_client.splice(index, 1)
    setLocalstorage(db_client)
}

// INTERAÇÃO COM O USUÁRIO
const saveClient = () => {
    if(isValidFields()){
        const client = { 
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value
        }
        createClient(client)
        alert('Cliente cadastrado!')
        updateTable()
        closeModal()
    }
}

const updateTable = () => {
    const db_client = readClient()
    clearTable()
    db_client.forEach(createRow)
}

const createRow = (client) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = ` 
                    <td>${client.nome}</td>
                    <td>${client.email}</td>
                    <td>${client.celular}</td>
                    <td>${client.cidade}</td>
                    <td>
                        <button type="button" class="button green">editar</button>
                        <button type="button" class="button red">excluir</button>
                    </td>
    ` 
    document.querySelector('#tbClient>tbody').appendChild(newRow)
}

updateTable()

// Eventos
document.getElementById('cadastrarCliente').addEventListener('click', openModal)
document.getElementById('modalClose').addEventListener('click', closeModal)
document.getElementById('salvar').addEventListener('click', saveClient)
document.getElementById('cancelar').addEventListener('click', closeModal)

