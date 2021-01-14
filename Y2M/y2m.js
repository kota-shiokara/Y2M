chrome.browserAction.onClicked.addListener(
    function (tab) {
        var yturl = tab.url;
        console.log(tab.url);
        if (yturl.indexOf('www.youtube.com/watch') != -1) {
            // Youtubeでの処理
            var result = yturl.substring(yturl.indexOf('watch'));
            if (result.indexOf('&') != -1) result = result.substring(0, result.indexOf('&'));

            window.open("https://music.youtube.com/" + result);
        } else if (yturl.indexOf('music.youtube.com/watch') != -1) {
            // Youtube Musicでの処理
            if (confirm("共有しますか")) {
                var tweetText = tab.title;
                tweetText = tweetText.substring(0, tweetText.indexOf("- YouTube Music"));

                var result = yturl.substring(yturl.indexOf('watch'));
                if (result.indexOf('&') != -1) result = result.substring(0, result.indexOf('&'));

                var tweetUrl = "https://youtube.com/" + result;

                window.open("https://twitter.com/intent/tweet?text=" + tweetText + "&url=" + tweetUrl + "&via=YouTube");

            } else {
                if (confirm("YouTubeに移動しますか")) {
                    var result = yturl.substring(yturl.indexOf('watch'));
                    if (result.indexOf('&') != -1) result = result.substring(0, result.indexOf('&'));

                    window.open("https://youtube.com/" + result);
                }
            }
        } else {
            alert("Move failed to youtube music");
        }
    }
);