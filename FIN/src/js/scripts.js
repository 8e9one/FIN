// pagination
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const pages = document.querySelectorAll('.product-cards__page')

let currentActive = 1
next.addEventListener('click', () => {
    currentActive++

    if (currentActive > pages.length) {
        currentActive = pages.length
    }
    updatePage()
})

prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1

    }
    updatePage()
})

function updatePage() {
    pages.forEach((page, idx) => {
        if (idx === currentActive - 1) {
            page.classList.add('active')
        } else {
            page.classList.remove('active')
        }
    })
}

// footer accordion
accordionToggle.forEach(accordtoggle => {
    accordtoggle.addEventListener('click', () => {
        accordtoggle.parentNode.classList.toggle('--active')
    })
})