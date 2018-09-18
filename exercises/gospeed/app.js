var boxOne = document.getElementById('button');
var span = document.getElementById('counter');
var rightClick = 0;
boxOne.addEventListener('click',function clickStorage() {
    if(typeof (Storage) !== 'undefined'){
        localStorage.clickStorage = Number(localStorage.clickStorage);
    }
    rightClick += 1;
    span.innerHTML = rightClick;

});
