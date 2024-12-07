// @ts-check
import  html from 'solid-js/html';
import { render } from "solid-js/web.js";
import {BeRenderNeutral} from 'be-render-neutral/be-render-neutral.js';

/** @import {BEConfig, IEnhancement, BEAllProps} from './ts-refs/be-enhanced/types' */
/** @import {Actions, PAP,  AP, BAP} from './ts-refs/be-render-neutral/types' */;
/** @import {Specifier} from './ts-refs/trans-render/dss/types' */

/**
 * @implements {Actions}
 * 
 */
class BeSolidarizing extends BeRenderNeutral {

    /**
     * 
     * @param {BAP} self 
     */
    doRender(self) {
        const {renderer, vm, enhancedElement} = self;
        const {parentElement} = enhancedElement;
        if(parentElement === null) throw 400;
        render(renderer(vm, html), parentElement);
    }

}

await BeSolidarizing.bootUp();
export {BeSolidarizing}