let Module = {};
Module.childs = 0;
Module.ChangeAll = function () {
    let arr = document.body.childNodes;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nodeType == 1) {
            arr[i].innerHTML = "PARAGRAPH";
            Module.childs++;
        }
    }
    alert(Module.childs);
}