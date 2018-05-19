// import {join} from 'lodash';
// // import './style.css';
// import printMe from './print';

// function createComponent(att) {
//   let element = document.createElement(att);
//   element.innerHTML = join(['Hellow', 'world'], '-');
//   element.classList.add('hello');
//   return element;
// }

// function createButton() {
//   const btn = document.createElement('button');
//   btn.innerHTML = 'Click me!';
//   btn.onclick = printMe;
//   return btn;
// }

// const newComponent = createComponent('div');
// newComponent.appendChild(createButton());
// document.body.appendChild(newComponent);

// console.log(module.hot);
// if (module.hot) {
//   module.hot.accept('./print.js', function() {
//     console.log('accepting new printMe module!');
//     printMe();
//   });
// }

import { cube } from './math';

function component() {
  var element = document.createElement('pre');
  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());