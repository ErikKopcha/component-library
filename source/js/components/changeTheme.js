class ChangeTheme {
    constructor(htmlTag, modeToggler) {
        this.htmlTag = htmlTag;
        this.modeToggler = modeToggler;

        this.init();
    }

    init() {
        this.modeToggler !== undefined && this.modeToggler.addEventListener("click", () => {
            const boolState = this.modeToggler.querySelector("input").checked;
            this.htmlTag.setAttribute('data-mode', boolState !== true ? "light" : "dark");
            localStorage.setItem('data-mode', boolState !== true ? "light" : "dark");
        });

        this.checkSelectedTheme();
    }

    checkSelectedTheme() {
        if (localStorage.getItem('data-mode') === 'light') {
            this.modeToggler.querySelector("input").checked = false;
            this.htmlTag.setAttribute('data-mode', "light");

        } else {
            this.modeToggler.querySelector("input").checked = true;
            this.htmlTag.setAttribute('data-mode', "dark");
        }
    }
}

export default ChangeTheme;