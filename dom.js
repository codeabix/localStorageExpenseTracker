function saveToLocalStorage(event){
    event.preventDefault();
    const ename=event.target.expensename.value;
    const des=event.target.description.value;
    const cat=event.target.category.value;
    localStorage.setItem('expensename',ename);
    localStorage.setItem('description',des);
    localStorage.setItem('category',cat);
    const obj={
        ename:ename,
        des:des,
        cat: cat
    }
    localStorage.setItem('userdetails',JSON.stringify(obj));
    console.log(obj);
    showUserOnScreen(obj);
}
function showUserOnScreen(obj){
        const parentElem=document.getElementById('listOfitems')
        const childElem=document.createElement('li');
        childElem.textContent = obj.ename + '-' + obj.des + '-' + obj.cat;
    const delbtn= document.createElement('input');
        delbtn.type="button";
        delbtn.value='Delete Expense';
        delbtn.onclick=()=>
        {
            localStorage.removeItem(obj.des);
            parentElem.removeChild(childElem)
        }
        const edbtn=document.createElement('input');
        edbtn.type="button";
        edbtn.value='Edit Expense';
        edbtn.onclick=()=>
        {
            localStorage.removeItem(obj.des);
            parentElem.removeChild(childElem);
            document.getElementById('e').value=obj.ename;
            document.getElementById('d').value=obj.des;
            document.getElementById('c').value=obj.cat;
                        }
        
        childElem.appendChild(edbtn);

        childElem.appendChild(delbtn);
        parentElem.appendChild(childElem);  
}