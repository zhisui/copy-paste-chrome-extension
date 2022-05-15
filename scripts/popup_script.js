//将选择的搜索所用浏览器名称发送到后台保存
const sendOptinaValue = (option) => {
    chrome.runtime.sendMessage(
        {
            message: "save_search_engine",
            payload: option.value
        },
        (response) => {
            console.log(response.message)
            if (response.message === "success") {
                document.querySelector(".search_engine_choice").style.opacity = 1
                document.querySelector(".search_engine_choice").innerHTML = option.innerText
            }
        }
    )
}


document.querySelector("button").addEventListener("click", () => {
    document.querySelectorAll("option").forEach((option) => {
        if (option.selected) {
            sendOptinaValue(option)
        }
    })
})
//好像没必要加这个，要不然的按钮就没用了
/* const select = document.querySelector("select")
select.addEventListener("change", () => {
    let index = select.selectedIndex //获取option的下标
    let val = select[index] //获取到对应的option
    sendOptinaValue(val)
}) */

//从后台获取所选择浏览器对应的浏览器名称
chrome.runtime.sendMessage({message:'get_current_search_engine'}, response=> {
    document.querySelectorAll('option').forEach(option => {
        if (option.value===response.payload) {
            document.querySelector('#search_engine').value=response.payload
            document.querySelector(".search_engine_choice").style.opacity = 1
            document.querySelector(".search_engine_choice").innerHTML = option.innerText
        }
    })

})
