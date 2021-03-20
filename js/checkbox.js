export default class Toggle {
    constructor (){
        // buttons for toggling product sections
        this.manCheckbox = $('[data-checkbox="men"]');
        this.womenCheckbox = $('[data-checkbox="women"]');
        this.childrenCheckbox = $('[data-checkbox="children"]');
        this.allCheckbox = $('[data-checkbox]');
        this.allInputs = $('[data-input]');
        this.allShow = $('.form__button');

        // sections
        this.menSection = $('[data-product=men]');
        this.womenSection = $('[data-product=women]');
        this.childrenSection = $('[data-product=children]');
        this.allSections = $('[data-product]');
        
        // console.log('%c So Important 🧠 getSelectedLabel OLD', 'color: #00848C; font-weight: bold; background: #51EAFF;');
        // console.log({});

        this.eventHandler();
    }

    hideSectionMen() {
        if (this.manCheckbox.attr('checked')) {
            this.manCheckbox.removeAttr('checked');
            this.menSection.addClass('hide-product');
        } else {
            this.manCheckbox.attr('checked', 'checked');
            this.menSection.removeClass('hide-product');
        } 
    }

    hideSectionWomen() {
        if (this.womenCheckbox.attr('checked')) {
            this.womenCheckbox.removeAttr('checked');
            this.womenSection.addClass('hide-product');
        } else {
            this.womenCheckbox.attr('checked', 'checked');
            this.womenSection.removeClass('hide-product');
        } 
    }

    hideSectionChildren() {
        if (this.childrenCheckbox.attr('checked')) {
            this.childrenCheckbox.removeAttr('checked');
            this.childrenSection.addClass('hide-product');
        } else {
            this.childrenCheckbox.attr('checked', 'checked');
            this.childrenSection.removeClass('hide-product');
        } 
    }

    showAllSections() {
        for (let i = 0; i < this.allSections.length; ++i) {
            this.allSections[i].classList.remove('hide-product');
            this.allInputs[i].setAttribute('checked', '');
            this.allCheckbox[i].setAttribute('checked', '');
        }     
    }

    eventHandler() {
        this.allShow.on('click', () => {
            this.showAllSections();
        })

        console.log('%c So Important 🤖 mapOptionsToComponent OLD', 'color: #70E852; font-weight: bold; background: #116315;');
        console.log({manCheckbox: this.manCheckbox, menSection: this.menSection, allSections: this.allSections});

        this.manCheckbox.on('click', ev => {
            console.log('%c So Important 👾 manCheckbox OLD', 'color: #00848C; font-weight: bold; background: #51EAFF;');
            this.hideSectionMen();
        })

        this.womenCheckbox.on('click', ev => {
            console.log('%c So Important 👾 womenCheckbox OLD', 'color: #00848C; font-weight: bold; background: #51EAFF;');
            this.hideSectionWomen();
        })

        this.childrenCheckbox.on('click', ev => {
            console.log('%c So Important 👾 childrenCheckbox OLD', 'color: #00848C; font-weight: bold; background: #51EAFF;');
            this.hideSectionChildren();
        })
    }
}