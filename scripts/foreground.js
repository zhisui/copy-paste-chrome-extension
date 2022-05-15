document.addEventListener('copy', () => {
    navigator.clipboard.readText().then(res=> {
        chrome.runtime.sendMessage({
            message:'search',
            payload:`"${res}" `//所复制的值
        })
        console.log('测试');
    }).catch(err=> {
        console.log(err)
    })
})

