import React, { createContext } from "react";
import ReactDOM from 'react-dom';
import './App.css';
import Logo from "./logo.jpg";


const enSkills = ['pure JavaScript, jQuery', 'HTML5, CSS3', 'Knowledge and skills of Bootstrap, responsive UI', 'understanding basic principles of React', 'Experience in OOP', 'MySql', 'Version Control (Git) , NPM '];
const ukrSkills= ['"чистий" Javascript, jQuery', 'HTML5, CSS3', 'Знання Bootstrap, верстка адаптивного UI ', 'розуміння основних приципів роботи React', 'Робота з парадигмами ООП', 'мова запитів SQL','Version Control (Git) , NPM '];

const content = {
    en: {
        btnUkrLabel: "ukrainian",
        btnEnLabel: "english",
        Cv: "Resume",
        title: "Yulia Romanyk",
        aboutmetitle: "About me",
        infos: "I am passionate about designing and maintaining cross-platform and up-to date websites. The main goal is to find challenging environment to become better specialist and focus on using latest technologies",
        contact: "tehre english",
        contacttitle : "Contacts",
        skillstitle : "Skills",
        skills: enSkills,
        langtitle: "Languages"

    },
    ukr: {
        btnUkrLabel: "українська",
        btnEnLabel: "англійська",
        Cv : "Резюме",
        title: "Юля Романик",
        aboutmetitle: "Про мене",
        infos: "Я в захваті від cтворення дизайну  і реалізації сучасних та крос-платформенних веб-ресурсів. Основна ціль це знайти конкуруюче середовище, для того щоб стати хорошим спеціалістом і сфокосуватись  на використанні сучасних технологій у проектах",
        contacttitle : "Контакти",
        contact: "українська",
        skillstitle : "Навички",
        skills: ukrSkills,
        langtitle: "Mови",

    }
};

const LanguageCont = createContext();


const Cv = () => {
    return (
        <LanguageCont.Consumer>
            {content => {
                return <h2>{content.Cv}</h2>;
            }}
        </LanguageCont.Consumer>
    );
};

const AboutMe = () => {

    return (

        <LanguageCont.Consumer>
            {content => {
                return  <div className ="addInfo">{content.infos}</div>;

            }}
        </LanguageCont.Consumer>
    );
    };

const AboutMeTitle = () => {
    return (
        <LanguageCont.Consumer>
            {content => {
                return  <h4>{content.aboutmetitle}</h4>;
            }}
        </LanguageCont.Consumer>
    );
};


const SkillsTitle = () => {
    return (
        <LanguageCont.Consumer>
            {content => {
                return  <h4>{content.skillstitle}</h4>;
            }}
        </LanguageCont.Consumer>
    );
};

const TitleName = () => {
    return (
        <LanguageCont.Consumer>
            {content => {
                return <h1>{content.title}</h1>;
            }}
        </LanguageCont.Consumer>
    );
};


const Photo = () => {
    return (
        <img src={Logo}/>
    );
};

const ContactsTitle = () => {
    return (
        <LanguageCont.Consumer>
            {content => {
                return <h4>{content.contacttitle}</h4>;
            }}
        </LanguageCont.Consumer>
    );
};



const LangTitle = () => {
    return (
        <LanguageCont.Consumer>
            {content => {
                return <h4>{content.langtitle}</h4>;
            }}
        </LanguageCont.Consumer>
    );
};


const Lol = () => {
    return (
    <LanguageCont.Consumer>
            {content => {
                return <ul className= "addInfo"> {content.skills.map((item) =>  <li>{item}</li>)}
                </ul>
            }}
        </LanguageCont.Consumer>

    );
};



class Language extends React.Component{
    render(){
        return (
            <section className = "bot">
               <LangTitle/>
                <ul className= "addInfo">
                    <li>Українська - native</li>
                    <li>English - B2+ </li>
                    <li>Polish  - A2</li>
                </ul>
            </section>
        );
    }
}

class Header extends React.Component{
    render(){
        return (
            <div className = "top">
            <Photo/>
            <TitleName />
            </div>
        );
    }
}

class Contact extends React.Component {
    render(){
        return (
            <section className = "bot">
                <ContactsTitle />
                <ul className = "addInfos">
                    <li>   <b>Mail:    </b>    julinjka17@ukr.net</li>
                    <li>  <b>Facebook :</b>   https://www.facebook.com/yulia.romanyk.3 </li>
                    <li> <b>LinkedIN :</b>  https://www.linkedin.com/in/yuliia-romanyk-040656144/ </li>
                    <li> <b>Tel :</b>       +380975109374</li>
                </ul>

            </section>
        );
    }
}

class About extends React.Component{
    render(){
        return (
            <section className = "bot">
                <AboutMeTitle/>
                <AboutMe />
            </section>
        );
    }
}

class Skill extends React.Component{
    render(){
        return (
            <section className = "bot">
                <SkillsTitle/>
                <Lol />

            </section>
        );
    }
}

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            language: "en"
        };
    }
    render() {
        return (
            <LanguageCont.Provider value={content[this.state.language]}>
                <div className = "elements">
                    <LanguageCont.Consumer>
                        {content => {
                            return (
                                <div >
                                    <div className = "buts">
                                        <button onClick={() => this.setState({ language: "en" })}>
                                            {content.btnEnLabel}
                                        </button>
                                        <button onClick={() => this.setState({ language: "ukr" })}>
                                            {content.btnUkrLabel}
                                        </button>
                                    </div>
                                    <Cv />
                                   <Header/>
                                    <hr/>
                                    <Contact/>
                                    <hr />
                                    <About />
                                    <hr />
                                    <Skill />
                                    <hr />
                                    <Language/>

                                </div>
                            );
                        }}
                    </LanguageCont.Consumer>
                </div>
            </LanguageCont.Provider>
        );
    }
}
const temp = document.getElementById('app');
ReactDOM.render(<App />, temp );
