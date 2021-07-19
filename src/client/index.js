import { createElement } from 'lwc';
import MyApp from 'my/app';
// We create an element that holds our application and store it in a constant
const app = createElement('my-app', { is: MyApp });
// eslint-disable-next-line @lwc/lwc/no-document-query
// we go and place it in the div main same as react
document.querySelector('#main').appendChild(app);
