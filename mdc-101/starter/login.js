import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';

const username = new MDCTextField(document.querySelector('.username'));
const password = new MDCTextField(document.querySelector('.password'));

new MDCRipple(document.querySelector('.cancel')); /* this way the ink-drop spreads in whole(360^o) direction*/
new MDCRipple(document.querySelector('.next'));