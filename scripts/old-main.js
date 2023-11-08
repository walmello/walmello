(() => {
// With alpine

const iObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.setAttribute("intersect", true);
        } else {
            entry.target.setAttribute("intersect", false);
        }
    })
}, )


document.addEventListener('alpine:init', () => {
    Alpine.directive('resize', (el, { expression }, { effect, evaluate }) => {
        const rObserver = new ResizeObserver(entries => {
            entries.forEach(entry => {
                evaluate()
            })
        })

        rObserver.observe(el)
    })
})

})()



// testing intersect

/*
Array.from(document.querySelectorAll('[intersect]'))
     .map(element => { iObserver.observe(element) })
*/

// div masking

Array.from(document.querySelectorAll('[div-masking]'))
    .map(element => {
        element.outerHTML = `<div style="overflow: hidden">${element.outerHTML}</div>`
    })

// break words

Array.from(document.querySelectorAll('[break-text=words]')).map((element) => {
    element.innerHTML = element.innerHTML.split('').map(el => `<span>${el}</span>`).join('')
})

// set stagger

Array.from(document.querySelectorAll('[stagger]')).map((element) => {
    Array.from(element.children).map((item, i )=> {        
        item.style.setProperty('--stagger', i + 1)
    })
})





// cursor
const cursor = document.querySelector("#cursor")

// get screen size
let screen = 'desktop';

const observer = new ResizeObserver(entries => {
    for(const entry of entries){
        if(entry.contentRect.width < 900) {
            document.body.classList.add('mobile')
        } else {
            document.body.classList.remove('mobile')
        }
    }
})

// get user preference

let preferDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

if (!preferDarkMode){
    document.body.classList.add('ligth-mode')
}

observer.observe(document.body)

let mouseX = 0
let mouseY = 0

document.addEventListener
    ('mousemove', (e) => {
        document.body.style.setProperty('--mouse-X', e.pageX)
        document.body.style.setProperty('--mouse-Y', e.pageY)    
    })

document.addEventListener
    ('mouseenter', (e) => {
        document.body.style.setProperty('--mouse-in', 'block')            
    })

document.addEventListener
    ('mouseleave', (e) => {
        document.body.style.setProperty('--mouse-in', 'none')            
    })