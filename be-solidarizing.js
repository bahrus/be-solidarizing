// @ts-check
import { BE } from 'be-enhanced/BE.js';
import { propInfo, resolved, rejected } from 'be-enhanced/cc.js';
import { html} from 'solid-js/html.js';
import { render } from "solid-js/web.js";
import {dispatchEvent as de} from 'trans-render/positractions/dispatchEvent.js';
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