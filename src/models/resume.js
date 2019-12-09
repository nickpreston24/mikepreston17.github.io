export default class Resume {
    constructor(title = "", summary = "", technicalSkills = []) {
        Object.assign(this, { title, summary, technicalSkills })
    }
}