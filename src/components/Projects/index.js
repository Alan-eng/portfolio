import React from "react";
import Alan from './Alan.jpg';
import style from './index.css';

const aboutMe = () => {

    return (
        <div>
            <h1>My recent Projects</h1>
            <h4>I design and code beautifully simple things, and I love what I do.</h4>
            <div className={style.root}>

                <img src={Alan} className="portrait" alt="portrait" />
                <article className={style.menu}>
                    Hi, I’m Alan. Nice to meet you. <br />

                    Since beginning my journey as a designer nearly 3 years ago, I've done work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually improving my chops.

                    I tend to code things from scratch, and enjoy bringing ideas to life in the browser.
                    I value simple content structure, clean design patterns, and thoughtful interactions.
                </article>
            </div>
        </div>
    )
};

export default aboutMe;