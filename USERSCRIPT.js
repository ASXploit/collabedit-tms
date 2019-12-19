// ==UserScript==
// @name         Collabedit MOD
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Collabedit Dark Theme + New Chat Mods
// @author       Xploit
// @match        http://collabedit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Using gitcdn.link , We Link our Modified CSS File and replace the Original.
    changeCSS("https://gitcdn.link/cdn/ASXploit/collabedit-tms/master/css/2.css", 0);

    // Swap CSS File (USAGE: changeCSS(filename, index)
    function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);

}
})();
