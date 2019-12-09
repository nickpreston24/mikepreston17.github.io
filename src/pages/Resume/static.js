import React, { Component } from 'react';
import classNames from 'classnames';

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

export default StaticResume;