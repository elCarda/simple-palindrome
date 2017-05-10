import * as React from "react";


export const App = () => {
    return (<div>
        <header>Simple palindrome app</header>
        <main>
            <article>
                <h1>My article</h1>
                <form>
                    <input type="text" placeholder="Enter new palindrome..." />
                    <input type="submit"/>
                </form>
                <p>History:</p>
                <ul>
                    <li><span>Example 1</span><a href="javascript:void(0);">Copy link</a></li>
                    <li>Example 2</li>
                </ul>
            </article>
        </main>
    </div>)
};