'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
   class DomElement {
      constructor(bg, height, width, position) {
         this.bg = bg;
         this.height = height;
         this.width = width;
         this.position = position;
      }
      getCreate () {
         const div = document.createElement('div');
         let left = 0,
            topTop = 0;
         div.style.cssText = `background: ${this.bg}; height: ${this.height}; width: ${this.width}; position: ${this.position}`;
         document.body.append(div);
         const move = (event) => {
            switch(event.code) {
               case 'ArrowLeft':
                  if (left > 0) {
                     left -= 10;
                     div.style.left = left + 'px';
                  } else {
                     left = 0;
                     div.style.left = left + 'px';
                  }
                  break;
               case 'ArrowRight':
                  left += 10;
                  div.style.left = left + 'px';
                  break;
               case 'ArrowUp':
                  if (topTop > 0) {
                     topTop -= 10;
                     div.style.top = topTop + 'px';
                  } else {
                     topTop = 0;
                     div.style.top = topTop + 'px';
                  }
                  break;
               case 'ArrowDown':
                  topTop  += 10;
                  div.style.top = topTop + 'px';
                  break;
               }
         };
         document.addEventListener('keydown', move);
      } 
   }
   const domElement = new DomElement('green', '100px', '100px', 'absolute');
   domElement.getCreate();
});