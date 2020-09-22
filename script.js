const list = document.getElementById('list')

    const newListElement = (value) => `<li> ${value} </li>`
     
    function validateForm(element){
        if (element.value == "" ){
            alert("Preencha o campo por favor")
            return -1
        }
        return 0
    }
    function addElement(element, list){
        if (element.value == ""){
                alert("cannot add a empty element to list")
                return -1;
        }  
        list.insertAdjacentHTML('beforeEnd', newListElement(element.value))
        element.value= ""
    }  

    const subs = document.getElementById('submit');
    subs.onclick = (e) =>{
        e.preventDefault()
        element = document.querySelector('[name = element]')
        
        if ( validateForm(element) == -1) return -1

        addElement(element, list)
    }
    
    const reset = document.getElementById('reset');
    reset.onclick = ()=> list.innerHTML = ""
    
