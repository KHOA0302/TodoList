import html from '../core.js'
import {connect} from '../store.js'


function TodoItem({ todo, index, editingIndex }) {
    return html`
        <li class="${todo.completed && 'completed'} ${editingIndex === index && 'editing'}">
            <div class="view">
                <input 
                class="toggle" 
                type="checkbox" 
                ${todo.completed && 'checked'} 
                onchange="dispatch('toggle', ${index})"
                />
                <label ondblclick="dispatch('startEditing', ${index})">${todo.title}</label>
                <button class="destroy" onclick="dispatch('destroy', ${index})"></button>
            </div>
            <input class="edit" value="${todo.title}" 
            onkeyup="event.keyCode === 13 && dispatch('endEditing', this.value.trim()) || event.keyCode === 27 && dispatch('cancelEditing')">
        </li>     
    `
}

export default connect()(TodoItem)