chrome.browserAction.onClicked.addListener(
    function(tab){
        var yturl = tab.url;
        console.log(tab.url);
        if(yturl.indexOf('watch') != -1){
            var result = yturl.substring(yturl.indexOf('watch'));
            if(result.indexOf('&') != -1) result = result.substring(0, result.indexOf('&'));
            window.open("https://music.youtube.com/" + result);
        }else{
            alert("Move failed to youtube music");
        }
    }
);