let textareaEl = document.getElementById("textarea")
let totalCounterEl = document.getElementById("total-counter")
let remainingCounter = document.getElementById("Remaining-counter")

textareaEl.addEventListener("keyup", () => {
   updateCounter()
})

updateCounter()

function updateCounter() {
   if (textareaEl.value.length < 10) {
      totalCounterEl.innerText = "0" + textareaEl.value.length
   } else {
      totalCounterEl.innerText = textareaEl.value.length
   }

   if (textareaEl.getAttribute("maxLength") - textareaEl.value.length < 10) {
      remainingCounter.innerText = `0${textareaEl.getAttribute("maxLength") - textareaEl.value.length}`
   } else {
      remainingCounter.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length
   }
}