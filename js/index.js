function fnSpoilers() {
   const spoilers = document.querySelectorAll('.spoilers__title')
   const spoilersBody = document.querySelectorAll('.spoilers__body')

   if (spoilers.length > 0) {
      spoilers.forEach((spoiler) => {
         spoiler.addEventListener('click', thisAdd)
      })

      function thisAdd() {

         const targ = this
         const targ2 = this.nextElementSibling
         targ.classList.toggle('_active')
         targ2.classList.toggle('_active')

         spoilers.forEach((spoiler) => {
            if (spoiler !== targ) {
               spoiler.classList.remove('_active')
            }
         })

         spoilersBody.forEach((spoilerBody) => {
            if (spoilerBody !== targ2) {
               spoilerBody.classList.remove('_active')
            }
         })
      }
   }
}

fnSpoilers()




