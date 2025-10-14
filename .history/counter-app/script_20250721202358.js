let count = 0;
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
incrementBtn.addEventListener("click", ()=> {
    count++;
    updateDisplay();

});
decrementBtn.addEventListener("click", ()=>{
    if(count > 0){
        count--;
        updateDisplay();

    }
});
resetBtn.addEventListener("click", ()=>{
    count = 0;
    updateDisplay();
});
function updateDisplay(){
    countDisplay.textContent=count;
}