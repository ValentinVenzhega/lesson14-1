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
         document.addEventListener('keydown', function moveLeft(event){
            if(event.code == 'ArrowLeft'){
               left=left-10;
               div.style.left = left + 'px';
            } else if(event.code == 'ArrowRight'){
                  left=left+10;
                  div.style.left= left + 'px';
            } else if(event.code == 'ArrowUp'){
               topTop=topTop-10;
               div.style.top= topTop + 'px';
            } else if(event.code == 'ArrowDown'){
               topTop=topTop+10;
               div.style.top= topTop + 'px';
            }
         });
      } 
   }
   const domElement = new DomElement('green', '100px', '100px', 'absolute');
   domElement.getCreate();
});