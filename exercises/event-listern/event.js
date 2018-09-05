var boxOne = document.getElementById('box-one');

boxOne.addEventListener('mouseout', function () {
    boxOne.style.backgroundColor = 'blue'
})
boxOne.addEventListener("mousedown", function () {
    boxOne.style.backgroundColor = 'red'})
boxOne.addEventListener('mouseup',function () {
    boxOne.style.backgroundColor = 'yellow'
})
boxOne.addEventListener('dblclick', function () {
    boxOne.style.backgroundColor = 'green'
})

boxOne.addEventListener('wheel', function () {
    boxOne.style.backgroundColor = 'orange'
})

// window.addEventListener('keydown', function (e) {
//     if (e.key === 'r') {
//         boxOne.style.backgroundColor = 'red'
//     }
// )}


// var boxChange = document.getElementById('box-one');
//
// boxChange.addEventListener('click',function () {
//     if (boxChange.style.backgroundColor === 'gold')
// })
//
//
//
// boxOme.addEventListener('mouseover', function () {
//     boxOne.style.backgroundColor = 'yellow'
// })
// boxOme.addEventListener('mouseout', function () {
//     boxOne.style.backgroundColor = 'yellow'
// })