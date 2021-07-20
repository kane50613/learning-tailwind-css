import React from "react";

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="container min-w-full px-80 flex justify-center h-16 items-center">
                <h2 className="text-black dark:text-white font-bold text-3xl">Title Here</h2>
                <div className="flex-grow"></div>
                <button className="bg-primary rounded-md text-white px-5 py-1.5 text-lg">Signup Now</button>
            </div>
        )
    }
}