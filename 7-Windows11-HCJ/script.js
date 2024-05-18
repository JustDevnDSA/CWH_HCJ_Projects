const taskbar = document.getElementsByClassName('taskbar')[0]
const startmenu = document.getElementsByClassName("start-menu")[0]

taskbar.addEventListener("click",()=>{
    if(startmenu.style.bottom == '3rem'){
        startmenu.style.bottom = "-650px"
    }
    else{
        startmenu.style.bottom = '3rem'
    }
})