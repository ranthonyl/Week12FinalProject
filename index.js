const URL_ENDPOINT = 'http://localhost:3000/toDoList'

$.get(URL_ENDPOINT).then(data => {
    data.map(todos => {
            $('tbody').append(
                $(`
                <tr>
                    <td>${todos.id}<d>
                    <td>${todos.task}</td>
                    <td>
                        <button onclick="deleteTask(${todos.id})">🗑️</button>
                    </td>
                </tr>
                `)
            )

    })
    
})    
    

$('#add').click(function () {

    $.post(URL_ENDPOINT, {
        task: $('#newTask').val(),
    })
})

function deleteTask (id) {

    $.ajax(`${URL_ENDPOINT}/${id}`, {
      method: 'DELETE'  
    })

}

function updateTask() {
    let id = $('#updateId').val()


    $.ajax(`${URL_ENDPOINT}/${id}`, {
        method: 'PUT' ,
        data: {
            task: $('#updateTask').val(),
        }
    })
}

$('#update').click(updateTask)