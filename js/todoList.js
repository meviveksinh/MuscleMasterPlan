// DOM Elements
const todoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

// Load todos from localStorage
let todos = JSON.parse(localStorage.getItem('workout-todos')) || [];

// Initialize todo list
function initTodoList() {
    renderTodoList();
    setupEventListeners();
}

// Render the todo list
function renderTodoList() {
    // Clear the list first
    todoList.innerHTML = '';
    
    // Check if there are any todos
    if (todos.length === 0) {
        const emptyMessage = document.createElement('div');
        emptyMessage.classList.add('empty-todo-message');
        emptyMessage.innerHTML = `
            <i class="fas fa-clipboard-list"></i>
            <p>Your workout task list is empty. Add tasks to track your fitness goals!</p>
        `;
        todoList.appendChild(emptyMessage);
        return;
    }
    
    // Render each todo item
    todos.forEach((todo, index) => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
        
        if (todo.completed) {
            todoItem.classList.add('completed');
        }
        
        todoItem.innerHTML = `
            <div class="todo-text">${todo.text}</div>
            <div class="todo-actions">
                <button class="complete-btn" data-index="${index}">
                    <i class="fas ${todo.completed ? 'fa-undo-alt' : 'fa-check'}"></i>
                </button>
                <button class="delete-btn" data-index="${index}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        todoList.appendChild(todoItem);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Add todo
    addTodoBtn.addEventListener('click', addTodo);
    
    // Allow adding todo with Enter key
    todoInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
    
    // Event delegation for todo item buttons
    todoList.addEventListener('click', function(e) {
        const target = e.target.closest('button');
        
        if (!target) return;
        
        const index = parseInt(target.dataset.index);
        
        if (target.classList.contains('complete-btn')) {
            toggleTodoComplete(index);
        } else if (target.classList.contains('delete-btn')) {
            deleteTodo(index);
        }
    });
}

// Add a new todo
function addTodo() {
    const todoText = todoInput.value.trim();
    
    if (todoText === '') {
        showToast('Please enter a task!', 'error');
        todoInput.focus();
        return;
    }
    
    // Add the new todo
    todos.push({
        text: todoText,
        completed: false
    });
    
    // Save to localStorage
    saveTodos();
    
    // Clear the input
    todoInput.value = '';
    todoInput.focus();
    
    // Show success message
    showToast('Task added successfully!', 'success');
    
    // Re-render the list
    renderTodoList();
}

// Toggle todo complete status
function toggleTodoComplete(index) {
    todos[index].completed = !todos[index].completed;
    
    // Save to localStorage
    saveTodos();
    
    // Show message
    const status = todos[index].completed ? 'completed' : 'uncompleted';
    showToast(`Task marked as ${status}!`, 'info');
    
    // Re-render the list
    renderTodoList();
}

// Delete a todo
function deleteTodo(index) {
    // Remove the todo
    todos.splice(index, 1);
    
    // Save to localStorage
    saveTodos();
    
    // Show message
    showToast('Task deleted!', 'error');
    
    // Re-render the list
    renderTodoList();
}

// Save todos to localStorage
function saveTodos() {
    localStorage.setItem('workout-todos', JSON.stringify(todos));
}

// Show toast notification
function showToast(message, type = 'info') {
    // Create toast element
    const toast = document.createElement('div');
    toast.classList.add('toast', `toast-${type}`);
    toast.innerHTML = `
        <div class="toast-content">
            <i class="fas ${getToastIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Append to body
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Get toast icon based on type
function getToastIcon(type) {
    switch (type) {
        case 'success':
            return 'fa-check-circle';
        case 'error':
            return 'fa-exclamation-circle';
        case 'info':
            return 'fa-info-circle';
        default:
            return 'fa-info-circle';
    }
}

// Add toast styles
const toastStyles = document.createElement('style');
toastStyles.textContent = `
    .toast {
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 1rem;
        border-radius: 5px;
        transform: translateY(100px);
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 9999;
        max-width: 300px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
    
    .toast.show {
        transform: translateY(0);
        opacity: 1;
    }
    
    .toast-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .toast-content i {
        font-size: 1.2rem;
    }
    
    .toast-success {
        background-color: #28a745;
        color: white;
    }
    
    .toast-error {
        background-color: #dc3545;
        color: white;
    }
    
    .toast-info {
        background-color: #17a2b8;
        color: white;
    }
    
    .empty-todo-message {
        padding: 2rem;
        text-align: center;
        color: #777;
        background-color: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
    }
    
    .empty-todo-message i {
        font-size: 3rem;
        margin-bottom: 1rem;
        color: var(--primary-color);
    }
`;
document.head.appendChild(toastStyles);

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', initTodoList);
