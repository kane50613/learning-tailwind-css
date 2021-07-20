import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default class ToggleTheme extends React.Component {
    constructor() {
        super()

        this.theme = typeof window !== "undefined" ? localStorage.theme : "dark"
    }

    toggle() {
        const root = window.document.documentElement
    
        root.classList.remove(this.theme)
        this.theme = this.theme === "dark" ? "light" : "dark"
        root.classList.add(this.theme)
    
        if (typeof window !== "undefined")
            localStorage.setItem("theme", this.theme)
    }

    render() {
        return (
            <button onClick={this.toggle.bind(this)} className="bg-black pl-4 pr-6 py-2 fixed top-5 right-0 rounded-tl-md rounded-bl-md transform translate-x-2 hover:translate-x-0 duration-500 dark:bg-white">
                <FontAwesomeIcon icon={far.faSun} size="2x" className="text-white dark:text-black"/>
            </button>
        )
    }
}