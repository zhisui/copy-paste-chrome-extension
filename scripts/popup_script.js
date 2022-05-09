//将选择的选项发送到后台
const sendOptinaValue = (option) => {
    console.log("")
    chrome.runtime.sendMessage(
        {
            message: "save_search_engine",
            payload: option.value
        },
        (response) => {
            console.log(response.message)
            if (response.message === "success") {
                document.querySelector(
                    ".search_engine_choice"
                ).style.opacity = 1
                document.querySelector(".search_engine_choice").innerHTML =
                    option.innerText
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

const select = document.querySelector("select")
select.addEventListener("change", () => {
    let index = select.selectedIndex //获取option的下标
    let val = select[index] //获取到对应的option
    sendOptinaValue(val)
})
