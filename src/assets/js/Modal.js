class Modal{
    constructor(){
        this.modalContent = document.getElementById('modal');
    }

    openModal(info){
        alert(info);
        e.preventDefault();
    }
}

export { Modal };