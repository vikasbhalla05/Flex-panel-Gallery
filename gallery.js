    let allPanel = document.querySelectorAll(".panel");

    function toggleOpen(){
      this.classList.toggle('open');
    }
    function toggleOpenActive(e){
      // this.classList.toggle('open-active');
      if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
      }
    }
    allPanel.forEach( panel => panel.addEventListener('click', toggleOpen));
    allPanel.forEach( panel => panel.addEventListener('transitionend', toggleOpenActive));