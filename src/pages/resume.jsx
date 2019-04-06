import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    header1: {
        color: '#000'
    },

    paragraph: {
        color: '#c44',
        fontSize: '24'
    },

    projects: {
        color: 'hotpink',
    },

    panel: {
        background: "#fff"
    }
})

//IDEA: A rotating cube would be fun here
// Icons clicked allow user to rotate between Education, Summary, Recent Projects, etc.
const Resume = (props) => {

    const { classes } = props;

    return (
        <div className='container'>
            <div className={classes.panel}>
                <div>
                    <h1 className={classes.header1}>Summary</h1>
                    <p className={classes.paragraph}>
                    A quick and constant learner with a background in Computer Science and software development, an attention to detail, who currently has his sights set on a full-time web development position.  Effective in maintaining product quality and functionality, enhancing data integrity, utilizing best practices to craft unique and powerful software.  Known for adaptability, energy, and collaboration during all stages of development.
                    </p>
                    <p className={classes.paragraph}>
                        <strong>Techical Skills:</strong> React, Node JS, Material UI, Bootstrap, Express, Mongo, C#/Java, MySQL, Design Patterns, Project management, Agile, Object Oriented Design.
                    </p>
                </div>
                <div>
                    <h1 className={classes.header1}>Education</h1>

                    <p className={classes.paragraph}>
                        <strong>Southern Methodist University, Dallas, Texas</strong>
                    </p>

                    <p className={classes.paragraph}>
                        <i>Full Stack Web Development Bootcamp - Graduated March 2019</i>
                    </p>

                    <p className={classes.paragraph}>
                    An intensive 24-week long boot camp dedicated to designing and building web applications. Learned skills include HTML5, CSS3, Javascript, ES6, jQuery, Material UI, Bootstrap, Firebase, Node JS, MySQL, MongoDB, Express, Handlebars JS, Java, and React JS
                    </p>
                </div>
                <div>
                    <h1 className={classes.header1}>Recent Creations</h1>

                    <p className={classes.paragraph}><strong>Kiy'app</strong></p>

                    <ul className={classes.projects}>
                        <li>Connects prospective martial arts students to schools and personal trainers by the types of training they seek for a smoother experience in choosing a discipline and ranking up, using a relational database schema and role-based authentication</li>
                        <li>Employs a full MERN stack with, Mobx, Firebase, and MySQL</li>
                        <a target="_blank" href="https://kiyapp.herokuapp.com/">Live site </a>
                            and <a target="_blank" href="https://github.com/mikepreston17/kiyap">Code</a>
                    </ul>

                    <p className={classes.paragraph}><strong>Modems Operandi</strong></p>

                    <ul className={classes.projects}>
                        <li>Create your own gaming PC automatically generating the build according to a set budget, enabling more bang for your buck</li>
                        <li>Led the Modems Operandi team to complete a minimum viable product in a two-week Agile sprint, using a kanban board, Git Bash, MySQL and web scraping, with deployment</li>
                        <li>Powered by the handlebars templating engine, jQuery, Passport JS and MySQL, with web scraper built in Python</li>
                        <li>
                            <a target="_blank" href="https://modemsoperandi.herokuapp.com/">Live site </a>
                             and <a target="_blank" href="https://github.com/ScottW1731/ModemsOperandi">Code</a>
                        </li>
                    </ul>

                </div>
                <div>
                    <h1 className={classes.header1}>Work Experience</h1>
                    <strong>Solutions Developer - Cottonwood Financial</strong>
                    <i> May 2017 to June 2018</i>
                    <ul className={classes.projects}>
                        <li>Architected, coded and maintained the Serenity Loan Engine Validator, increasing loan schedule throughput by up to 1500%</li>
                        <li>Collaborated with senior developers on an architectural redesign of loan queues, decreasing turnaround for overnight tasks</li>
                        <li>Recognized by manager for tackling new technologies and assigned ambassadorship over the Dataview 360 web service endpoint synchronization software</li>
                        <li><i>WPF, C#, WCF, & Entity Framework</i></li>
                    </ul>
                    <strong>Junior Software Developer - HOYA Vision Care</strong>
                    <i> October 2014 to March 2017</i>
                    <ul className={classes.projects}>
                        <li>Developed in-house desktop tools for Accounting by reverse-engineering Access databases, which reconciled open items and payment data using Infragistics API</li>
                        <li>Designed and implemented an archive manager application for the IT Department from scratch using the .NET Framework and WPF/C# MVVM controls</li>
                        <li>Published in-production services to the Hoya Universal Translator system responsible for parsing lens order files to Hoya databases by creating a custom extraction library via Regular Expressions</li>
                        <li><i>WPF, Winforms, C#, .NET Framework, Entity Framework</i></li>
                    </ul>
                    <strong>Software Contractor – US Airways</strong>
                    <i> April 2014 to August 2014</i>
                    <ul className={classes.projects}>
                        <li>Collaborated with USAirways on application design and translated sets of employee status codes for their Human Resources department using C#</li>
                    </ul>
                    <strong>Software Contractor - New York Air Brake</strong>
                    <i> October 2012 to October 2013</i>
                    <ul className={classes.projects}>
                        <li>Coded a Perl based state machine as a single source of truth for intra-server communications, allowing testing of multiple servers</li>
                        <li>Generated multiple virtual machine configurations for staff using Jenkins, assisting developers in their deployments of the Train Dynamics System software</li>
                        <li><i>Perl, C++, CentOS Linux</i></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default withStyles(styles)(Resume);
