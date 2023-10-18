// 基本的にこれは裏で動くスクリプトになる
chrome.action.onClicked.addListener((tab) => {
    const yturl = tab.url;

    switch (true) {
        case yturl.indexOf('www.youtube.com/watch') != -1:
            // Youtubeでの処理
            const result = getVideoId(yturl);
            createTab("https://music.youtube.com/" + result);
            break;
        case yturl.indexOf('music.youtube.com/watch') != -1:
            // Youtube Musicでの処理
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: () => {
                    // ここは表で動くScript
                    const titleTag = document.getElementsByClassName("title ytmusic-player-bar");
                    const titleText = titleTag[0].textContent;

                    const yturl = document.URL;
                    var result = yturl.substring(yturl.indexOf('watch'));
                    if (result.indexOf('&') != -1) result = result.substring(0, result.indexOf('&'));

                    var url = "https://youtube.com/" + result;

                    open("https://twitter.com/intent/tweet?text=" + titleText + "&url=" + url + "&via=YouTube");
                },
            });
            break;
        default:
            console.log("Function Failed");
            break;
    }
});

function createTab(url) {
    chrome.tabs.create({ url: url }, tab => { });
}

function getVideoId(content) {
    var tmp = content.substring(content.indexOf('watch'));
    if (tmp.indexOf('&') != -1) tmp = tmp.substring(0, tmp.indexOf('&'));

    return tmp;
}