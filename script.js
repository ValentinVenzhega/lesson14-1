'use strict';

class DomElement {
   constructor(selector, height, width, bg, fontSize) {
      this.selector = selector;
      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
   }
   getCreate () {
      if (this.selector[0] === '.') {
         const div = document.createElement('div');
         document.body.append(div);
         div.classList.add( this.selector.substring(1));
         div.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.';
         div.style.cssText = `background: ${this.bg}; height: ${this.height}; width: ${this.width}; font-size: ${this.fontSize}`;
      } else if (this.selector[0] === '#') {
         const p = document.createElement('p');
         document.body.append(p);
         p.id = this.selector.substring(1);
         p.textContent = 'Maxime deleniti id, velit similique voluptatibus iure doloribus ab a quam.';
         p.style.cssText = `background: ${this.bg}; height: ${this.height}; width: ${this.width}; font-size: ${this.fontSize}`;
      }
   } 
}

const domElement = new DomElement('#block', '60px', '600px', 'green', '25px');
domElement.getCreate();