const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');
const eraseBTN = document.getElementById('Erase'); 

const ctx = canvas.getContext('2d');
canvas.height = window.innerHeight - 100;
canvas.width = window.innerWidth - 100;
let size = 10
let isPressed = false
colorEl.value = 'black'
let color = colorEl.value
let x
let y
let erase_bool = false 
canvas.addEventListener('mousedown', (e) => {
    isPressed = true
    x = e.offsetX
    y = e.offsetY
})

document.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})

function drawCircle(x, y) {
    if (erase_bool) {
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = 'white'
        ctx.fill()
    }
    else {
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()
    }
}

function drawLine(x1, y1, x2, y2) {
    if (erase_bool) {
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = 'white'
        ctx.lineWidth = size * 2
        ctx.stroke()
    }
    else {
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = color
        ctx.lineWidth = size * 2
        ctx.stroke()
    }
}

function updateSizeOnScreen() {
    sizeEL.innerText = size
}

increaseBtn.addEventListener('click', () => {
    size += 2

    if (size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})
decreaseBtn.addEventListener('click', () => {
    size -= 2

    if (size < 2) {
        size = 2
    }
    updateSizeOnScreen()
})

colorEl.addEventListener('change', (e) => color = e.target.value)

clearEl.addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height))

eraseBTN.addEventListener('click', () => erase_bool = !erase_bool)






















// const canvas = document.getElementById('canvas');
// const color = document.getElementById('color');
// const ctx = canvas.getContext('2d');
// // canvas.height = 700;
// // canvas.width = 800;







// canvas.height = window.innerHeight - 100;
// canvas.width = window.innerWidth - 100;
// ctx.fillRect(100, 100, 200, 500);
// ctx.fillStyle = "White";
// ctx.fillRect(400, 100, 200, 500);


// // colorEl.addEventListener('change', (e) => color = e.target.value)
// // canvas.height = 700;
// // canvas.width = 800;

