let message_more_info = document.querySelector("#action_menu_btn");

let toggle_start = 0;
message_more_info.addEventListener("click", ()=>{
    toggle_start ++;
    console.log(toggle_start)
    let more_info = document.querySelector(".action_menu")
    if(toggle_start % 2 !== 0) {
        more_info.style.display = "block";
    }
    else{
        more_info.style.display = "none";
    }
   
})