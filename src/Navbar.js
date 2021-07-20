import React from "react";

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="container min-w-full px-80 2xl:px-60 xl:px-40 lg:px-20 md:px-5 sm:px-0 flex justify-center h-16 items-center">
                <h2 className="text-black dark:text-white font-bold text-3xl">Title Here</h2>
                <div className="flex-grow"></div>
                {
                    ['Home', 'About', 'Create']
                        .map(x => <a key={x} href={"#" + x.toLowerCase()} className="mx-1 px-3 text-lg dark:text-white">{x}</a>)
                }
                <button className="bg-primary rounded-md text-white ml-5 px-5 py-1.5 text-lg">Signup Now</button>
            </div>
        )
    }
}