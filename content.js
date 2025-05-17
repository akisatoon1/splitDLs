"use strict";

// サイト上のリンクをクリックしたときに、ダウンロード先フォルダ名をbackgroundに送信
const folder = getFolderName();
if (folder && folder !== "") {
    chrome.runtime.sendMessage({ folder: folder });
}

function getFolderName() {
    const selector = "a#coursename";
    const element = document.querySelector(selector);
    return element ? element.title : "";
}
