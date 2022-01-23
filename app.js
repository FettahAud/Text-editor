const select = document.querySelector('select')
const fontStyle = document.querySelectorAll('.font-style button')
const fontSizeBut = document.querySelectorAll('.font-size button')
const currentSize = document.querySelector('.font-size .current-size')
const colors = document.querySelectorAll(".color input[type='color']")
const text = document.querySelector('.text-wrapper p')

// Select box
select.addEventListener('change', (e) => {
   text.style.fontFamily = select.value
})

//Font styles 
fontStyle.forEach(but => but.addEventListener('click', function () {
   switch (this.id) {
      case 'bold':
         (text.style.fontWeight !== 'bold') ?
            text.style.fontWeight = 'bold' :
            text.style.fontWeight = '200'
         break;
      case 'italic':
         (text.style.fontStyle !== 'italic') ?
            text.style.fontStyle = 'italic' :
            text.style.fontStyle = 'normal'
         break;
      case 'underline':
         (text.style.textDecoration !== 'underline') ?
            text.style.textDecoration = 'underline' :
            text.style.textDecoration = 'none'
         break;
   }
}))

// Font size
let fontsize = 16
fontSizeBut.forEach(but => but.addEventListener('click', function () {
   if (this.id === 'decrease' && fontsize > 8) {
      fontsize = fontsize - 2
      text.style.fontSize = `${fontsize}px`
      currentSize.textContent = fontsize
   } else if (this.id === 'increase' && fontsize < 36) {
      fontsize = fontsize + 2
      text.style.fontSize = `${fontsize}px`;
      currentSize.textContent = fontsize
   }
}))

// Colors
colors.forEach(color => color.addEventListener('input', function () {
   if (this.id === 'color')
      text.style.color = this.value
   else
      text.style.backgroundColor = this.value
}))