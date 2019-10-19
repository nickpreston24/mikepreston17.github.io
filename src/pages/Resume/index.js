import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Section, {AirtableSection} from '../../experimental/Section';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import classNames from 'classnames';

import { getByName } from '../../airtable'

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
        color: '#fff',
    },

    experience: {
        color: '#fff',
    },

    panel: {
        background: '#111',
        float: "left",
    },
    button: {
        border: '1px solid transparent',
        color: '#f20c4a',
        margin: '3px',
        background: 'paper',
        "box-shadow": "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
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

    constructor(props) 
    {
        super(props);
        const { classes } = props;        
        const { button } = classes;
    }

    // async componentWillMount() {
    // }

    loadResume() {
        var promise = getByName('Test resume');
        console.log('loadresume=>promise: ', promise);
        return promise;
        // const storedResume = sessionStorage.getItem("resume-json");
        // if(!storedResume)
        // {
        // this.resume = await getByName('Test resume');
        // // sessionStorage.setItem("resume-json", this.resume);
        // console.log('Updated resume: ', this.resume);
        // }
        // {
        //     console.log('Stored resume: ', storedResume);
        // }
    }

    componentDidMount() {

        console.log('This happens 3rd.');

        this.setState({ loading: 'true' });
        this.loadResume()
            .then((data) => {
                console.log('This happens 7th.');
                this.setState({
                    resume: data,
                    loading: 'false'
                });
                console.log('set resume: ', this.state.resume);
            });
    }

    render() {

        // console.log('render my resume from JSON: ', this.state.resume);
        // console.log('data: ', this.data);

        // if (this.state.loading === 'initial') {
        //     console.log('This happens 2nd - after the class is constructed. You will not see this element because React is still computing changes to the DOM.');
        //     return <h2>Intializing...</h2>;
        // }
        //
        //
        // if (this.state.loading === 'true') {
        //     console.log('This happens 5th - when waiting for data.');
        //     return <h2>Loading...</h2>;
        // }
        console.log("has resume? ",!!this.state);
        this.resume = !!this.state ? this.state.resume : null;
        return (
            <div className="container">
                <Button
                 download href="/content/Michael Preston - Resume 2019 Full Stack Engineer.docx">
                    <Icon className="fas fa-download" />
                </Button>
                {/*{!!this.resume.fields ? <AirTableResume resumeName='Test Resume'  resume={this.resume} {...this.props} /> : null}*/}
                {!!this.resume ? <AirTableResume resumeName='Test Resume'  resume={this.state.resume} {...this.props} /> : null}
                {/*{this.resume.sections ?*/}
                {/*    <DynamicResume resume={this.resume} {...this.props} />*/}
                {/*    : <StaticResume resume={this.resume} {...this.props} />}*/}
            </div>
        )
    }
}

const AirTableResume = props => {
    const {resumeName, resume} = props;
    const {sections: fields} =  resume;

    // console.log('found resume: ', resume);
    // console.log('props: ', props);
    console.log('fields?', !!resume.fields, resume.fields);

    return !!fields ? (
        <div className='container'>
            <h2>Rawr, I am a resume {resumeName}!</h2>
            {fields.map((section, index) =>
                <AirtableSection key={index} styles={styles}  {...section} />
            )}
        </div>
    ) : null
}


const DynamicResume = props => {

    const { sections } = props.resume;
    // const { header, experience, paragraph, creations, panel } = props.classes;

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

    const { header, experience, paragraph, creations, panel, alignLeft } = props.classes;
    // let container = 'container';

    return (

        <div className={classNames(alignLeft, panel)}>
            <div>
                <h1 className={header}>Summary</h1>
                <p className={paragraph}>
                A dedicated Full Stack Web Developer with a passion to never stop improving. Known for collaboration, quick thinking, study, adaptability, and high energy
during all stages of software development. Recognized for maintaining product quality,
security and functionality, enhancing data integrity as well as utilizing best practices to craft unique and
powerful software.
                    </p>
                <p className={paragraph}>
                    <strong>Techical Skills:</strong> React JS, C#, Java, Python, Git, GitHub, TFS, .NET Core, Entity Framework Core, RESTful Web APIs, Node JS, Express JS, MongoDB, MySql, SQL Server, Material UI, Bootstrap, C++, C.
                    </p>

                <p className={paragraph}>
                    <strong>Additional Skills:</strong> Knowledge of Design Patterns, Project management, Bug Tracking, UML, Object
Oriented Design, and SOLID Principles, Agile Methodologies, MVC, MVVM, working knowledge of Linux
distros.
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
                    <li>Connects prospective martial arts students to schools and personal trainers by discipline for a
smoother experience in choosing a dojo by employing a MySQL relational schema, role-based
authentication in Firebase and Mobx state management</li>
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

                <strong>Triencon Services Inc - Junior Full Stack Engineer (contract)</strong>
                <i>May 2019 - September 2019</i>

                <ul className={experience}>
                    <li>Led the team in Cybersecurity efforts with the HPE Fortify code scan &amp; auditing tool, catching key
information leaks and risky Javascript modules on the Navy Grid project for the Department of
Defense</li>
                    <li>Constructed a security layer within Oncor’s meter tracking system to interact with their existing n-
tier architecture, established using DotNetCore 2.2 and JSON Web Tokens as authentication and
authorization</li>
                <li>Performed automated unit tests using NCrunch and functional, smoke, regression and end-to-end testing using a combination of Cypress JS and Swagger</li>
                </ul>

                <strong>Solutions Developer - Cottonwood Financial</strong>
                <i> May 2017 to June 2018</i>
                <ul className={experience}>
                    <li>Designed, coded and maintained the Serenity Loan Engine Validator, increasing loan schedule throughput by up to 1500%</li>
                    <li>Collaborated with senior developers on an architectural redesign of loan queues, decreasing turnaround for overnight tasks</li>
                    <li>Recognized by manager for tackling new technologies and assigned ambassadorship over the Dataview 360 web service endpoint synchronization software</li>
                    <li><i>WPF, C#, WCF, & Entity Framework</i></li>
                </ul>
                <strong>Junior Software Developer - HOYA Vision Care</strong>
                <i> October 2014 to March 2017</i>
                <ul className={creations}>
                    <li>Developed in-house desktop tools for Accounting by reverse-engineering Access databases, which reconciled open items and payment data using Infragistics API</li>
                    <li>Designed and implemented an archive manager application for the IT Department from scratch using the .NET Framework, C# and custom WPF controls, freeing up crucial memory for the HOYA Universal Translator</li>
                    <li>Published in-production services to the Hoya Universal Translator system responsible for parsing lens order files to Hoya databases by creating a custom extraction library via Regular Expressions</li>
                    {/* <li><i>WPF, Winforms, C#, .NET Framework, Entity Framework</i></li> */}
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
