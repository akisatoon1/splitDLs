// background.js
// content scriptから受け取ったフォルダ名を使ってダウンロード先を決定

let currentFolder;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.folder) {
        currentFolder = message.folder;
    }
});

chrome.downloads.onDeterminingFilename.addListener(function (item, suggest) {
    if (currentFolder) {
        suggest({ filename: currentFolder + "/" + item.filename });
    } else {
        suggest(); // 通常のダウンロード
    }
});
