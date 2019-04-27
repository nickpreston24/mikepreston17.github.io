import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Section from '../../experimental/Section';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

//IDEA: A rotating cube would be fun here
// Icons clicked allow user to rotate between Education, Summary, Recent Projects, etc.

const styles = theme => ({
    header: {
        color: '#fff'
    },

    paragraph: {
        color: '#fff',
        fontSize: '24'
    },

    creations: {
        color: '#ff4',
    },

    experience: {
        color: '#c44',
    },

    panel: {
        background: "#fff",
        float: "left",
    },
    alignLeft: {
        color: 'white',
        boxSizing: 'border-box',
        padding: 20,
        maxwidth: 480,
        zIndex: 1,
        display: 'flex',
        flexFlow: 'column nowrap',
        float: 'left',
        justifyContent: 'center',
        // transition: 'opacity 0.3s linear 0.0s !important',
        // 'div.active > &': {
        //     opacity: 1,
        //     transition: 'opacity 0.5s linear 0.5s !important',
        // },
        // '& > * ': { margin: 20 },
        // '& button': { borderRadius: 24, borderWidth: 2, },
    },
})

class Resume extends Component {

    resume = {};

    componentWillMount() {
        const myResume = require('../../data/resume.json');

        // FIXME: Commented this out as it's not yet ready for Production.
        // this.resume = myResume;
        // console.log('my resume: ', this.resume);
    }

    render() {

        console.log('render my resume from JSON: ', this.resume);

        return (
            <div className="container">
                <Button download href="/content/Michael Preston - Resume 2019 Full Stack Engineer.docx">
                    <Icon className="fas fa-download" />
                </Button>
                {this.resume.sections ?
                    <DynamicResume resume={this.resume} {...this.props} />
                    : <StaticResume resume={this.resume} {...this.props} />}
            </div>
        )
    }
}

const DynamicResume = props => {

    const { sections } = props.resume;
    // const { header1, experience, paragraph, creations, panel } = props.classes;

    // console.log('sections:', sections)
    // console.log('props: ', props)

    return sections ? (
        <div className='container'>
            {sections.map((section, index) =>
                <Section key={index} styles={styles} parts={section.parts} />
            )}
        </div>
    ) : null
}

const StaticResume = (props) => {

    const { header, experience, paragraph, creations, panel, alignLeft, toggleRight } = props.classes;
    // let container = 'container';

    return (

        <div className={alignLeft}>
            <div>
                <h1 className={header}>Summary</h1>
                <p className={paragraph}>
                    A quick and constant learner with a background in Computer Science and software development, an attention to detail, who currently has his sights set on a full-time web development position.  Effective in maintaining product quality and functionality, enhancing data integrity, utilizing best practices to craft unique and powerful software.  Known for adaptability, energy, and collaboration during all stages of development.
                    </p>
                <p className={paragraph}>
                    <strong>Techical Skills:</strong> React, Node JS, Material UI, Bootstrap, Express, Mongo, C#/Java, MySQL, Design Patterns, Project management, Agile, Object Oriented Design.
                    </p>
            </div>
            <div>
                <h1 className={header}>Education</h1>

                <p className={paragraph}>
                    <strong>Southern Methodist University, Dallas, Texas</strong>
                </p>

                <p className={paragraph}>
                    <i>Full Stack Web Development Bootcamp - Graduated March 2019</i>
                </p>

                <p className={paragraph}>
                    An intensive 24-week long boot camp dedicated to designing and building web applications. Learned skills include HTML5, CSS3, Javascript, ES6, jQuery, Material UI, Bootstrap, Firebase, Node JS, MySQL, MongoDB, Express, Handlebars JS, Java, and React JS
                    </p>
            </div>
            <div>
                <h1 className={header}>Recent Creations</h1>

                <p className={paragraph}><strong>Kiy'app</strong></p>

                <ul className={creations}>
                    <li>Connects prospective martial arts students to schools and personal trainers by the types of training they seek for a smoother experience in choosing a discipline and ranking up, using a relational database schema and role-based authentication</li>
                    <li>Employs a full MERN stack with, Mobx, Firebase, and MySQL</li>
                    <a href="https://kiyapp.herokuapp.com/">Live site </a>
                    and <a href="https://github.com/mikepreston17/kiyap">Code</a>
                </ul>

                <p className={paragraph}><strong>Modems Operandi</strong></p>

                <ul className={experience}>
                    <li>Create your own gaming PC automatically generating the build according to a set budget, enabling more bang for your buck</li>
                    <li>Led the Modems Operandi team to complete a minimum viable product in a two-week Agile sprint, using a kanban board, Git Bash, MySQL and web scraping, with deployment</li>
                    <li>Powered by the handlebars templating engine, jQuery, Passport JS and MySQL, with web scraper built in Python</li>
                    <li>
                        <a href="https://modemsoperandi.herokuapp.com/">Live site </a>
                        and <a href="https://github.com/ScottW1731/ModemsOperandi">Code</a>
                    </li>
                </ul>

            </div>
            <div>
                <h1 className={header}>Work Experience</h1>
                <strong>Solutions Developer - Cottonwood Financial</strong>
                <i> May 2017 to June 2018</i>
                <ul className={experience}>
                    <li>Architected, coded and maintained the Serenity Loan Engine Validator, increasing loan schedule throughput by up to 1500%</li>
                    <li>Collaborated with senior developers on an architectural redesign of loan queues, decreasing turnaround for overnight tasks</li>
                    <li>Recognized by manager for tackling new technologies and assigned ambassadorship over the Dataview 360 web service endpoint synchronization software</li>
                    <li><i>WPF, C#, WCF, & Entity Framework</i></li>
                </ul>
                <strong>Junior Software Developer - HOYA Vision Care</strong>
                <i> October 2014 to March 2017</i>
                <ul className={creations}>
                    <li>Developed in-house desktop tools for Accounting by reverse-engineering Access databases, which reconciled open items and payment data using Infragistics API</li>
                    <li>Designed and implemented an archive manager application for the IT Department from scratch using the .NET Framework and WPF/C# MVVM controls</li>
                    <li>Published in-production services to the Hoya Universal Translator system responsible for parsing lens order files to Hoya databases by creating a custom extraction library via Regular Expressions</li>
                    <li><i>WPF, Winforms, C#, .NET Framework, Entity Framework</i></li>
                </ul>
                <strong>Software Contractor – US Airways</strong>
                <i> April 2014 to August 2014</i>
                <ul className={creations}>
                    <li>Collaborated with USAirways on application design and translated sets of employee status codes for their Human Resources department using C#</li>
                </ul>
                <strong>Software Contractor - New York Air Brake</strong>
                <i> October 2012 to October 2013</i>
                <ul className={creations}>
                    <li>Coded a Perl based state machine as a single source of truth for intra-server communications, allowing testing of multiple servers</li>
                    <li>Generated multiple virtual machine configurations for staff using Jenkins, assisting developers in their deployments of the Train Dynamics System software</li>
                    <li><i>Perl, C++, CentOS Linux</i></li>
                </ul>
            </div>
        </div>
    )
}

export default withStyles(styles)(Resume);
