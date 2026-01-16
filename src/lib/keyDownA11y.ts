/* adapted from https://stackoverflow.com/a/68009016 */

import type { KeyboardEventHandler, TargetedKeyboardEvent } from 'preact';

function keyDownA11y<T extends Element>(handler: KeyboardEventHandler<T>): KeyboardEventHandler<T> {
    return function (event: TargetedKeyboardEvent<T>) {
        const { key, type } = event;

        if (['keydown', 'keypress'].includes(type) && keys_confirm.includes(key)) {
            handler(event);
        }
    };
}

const keys_confirm = ['Enter', ' '];

export default keyDownA11y;
