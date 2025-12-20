let timerInterval = null;
let seconds = 0;
let totalSeconds = 0;
let isRunning = false;

const timer = document.getElementById('timer');
const fullscreenTimer = document.getElementById('fullscreenTimer');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const fullscreenMode = document.getElementById('fullscreenMode');
const exitFullscreenBtn = document.getElementById('exitFullscreenBtn');

function updateTimerDisplay() {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    const timeString = `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    timer.textContent = timeString;
    fullscreenTimer.textContent = timeString;
}

function setCountdown(time) {
    if (isRunning) return;
    
    // Remove active class from all preset buttons
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    seconds = time;
    totalSeconds = time;
    updateTimerDisplay();
    startBtn.textContent = 'Iniciar';
}

function toggleTimer() {
    if (seconds === 0 && !isRunning) {
        alert('Por favor, selecciona un tiempo primero');
        return;
    }
    
    if (isRunning) {
        clearInterval(timerInterval);
        startBtn.textContent = 'Reanudar';
        startBtn.classList.remove('active');
    } else {
        timerInterval = setInterval(() => {
            seconds--;
            updateTimerDisplay();
            
            if (seconds <= 0) {
                clearInterval(timerInterval);
                isRunning = false;
                startBtn.textContent = 'Iniciar';
                startBtn.classList.remove('active');
                
                // Notification sound or alert
                alert('¡Tiempo terminado!');
                
                // Remove active from preset buttons
                document.querySelectorAll('.preset-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
            }
        }, 1000);
        startBtn.textContent = 'Pausar';
        startBtn.classList.add('active');
    }
    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    seconds = totalSeconds;
    updateTimerDisplay();
    startBtn.textContent = 'Iniciar';
    startBtn.classList.remove('active');
}

function toggleFullscreen() {
    fullscreenMode.classList.add('active');
}

function exitFullscreen() {
    fullscreenMode.classList.remove('active');
}

function toggleSlider(sliderId) {
    const slider = document.getElementById(sliderId);
    slider.classList.toggle('open');
}

function toggleCheckbox(element) {
    element.classList.toggle('checked');
}

function addTodo() {
    const todoList = document.getElementById('todoList');
    const newTodo = document.createElement('div');
    newTodo.className = 'todo-item';
    newTodo.innerHTML = `
        <div class="checkbox" onclick="toggleCheckbox(this)"></div>
        <input type="text" class="todo-input" placeholder="Nueva tarea...">
    `;
    todoList.appendChild(newTodo);
}

startBtn.addEventListener('click', toggleTimer);
resetBtn.addEventListener('click', resetTimer);
fullscreenBtn.addEventListener('click', toggleFullscreen);
exitFullscreenBtn.addEventListener('click', exitFullscreen);

// Añade estas funciones a tu script.js

function openCustomModal() {
    const modal = document.getElementById('customModal');
    modal.classList.add('active');
}

function closeCustomModal() {
    const modal = document.getElementById('customModal');
    modal.classList.remove('active');
}

function confirmCustomTime() {
    const hours = parseInt(document.getElementById('customHours').value) || 0;
    const minutes = parseInt(document.getElementById('customMinutes').value) || 0;
    const secs = parseInt(document.getElementById('customSeconds').value) || 0;
    
    const totalTime = (hours * 3600) + (minutes * 60) + secs;
    
    if (totalTime === 0) {
        alert('Por favor, ingresa un tiempo válido');
        return;
    }
    
    // Remove active class from all preset buttons
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Mark custom button as active
    document.querySelector('.preset-btn.custom').classList.add('active');
    
    seconds = totalTime;
    totalSeconds = totalTime;
    updateTimerDisplay();
    startBtn.textContent = 'Iniciar';
    
    closeCustomModal();
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('customModal');
    if (e.target === modal) {
        closeCustomModal();
    }
});