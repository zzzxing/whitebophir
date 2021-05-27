/**
 *                        WHITEBOPHIR
 *********************************************************
 * @licstart  The following is the entire license notice for the
 *  JavaScript code in this page.
 *
 * Copyright (C) 2020  Ophir LOJKINE
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend
 */

(function download() { //Code isolation

    function downloadSVGFile(evt) {
        var canvasCopy = document.getElementById('canvas').cloneNode(true);
        var styleNode = document.createElement("style");
        styleNode.innerHTML = "rect, ellipse { fill:none; } path, line {fill: none;stroke-linecap: round; stroke-linejoin: round;}";
        canvasCopy.appendChild(styleNode);
        downloadContent('data:image/svg+xml;charset=utf-8,' + encodeURIComponent(canvasCopy.outerHTML), "svg")
    }

    function downloadContent(href, type){
        var element = document.createElement('a');
        element.setAttribute('href', href);
        element.setAttribute('download',  Tools.boardName + "." + type);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    Tools.add({ //The new tool
        "name": "Download",
        "shortcut": "d",
        "listeners": {},
        "icon": "tools/download/download.svg",
        "oneTouch": true,
        "onstart": downloadSVGFile,
        "mouseCursor": "crosshair",
    });

})(); //End of code isolation