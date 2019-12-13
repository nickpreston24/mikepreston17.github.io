import Model from '../model'

export default class Project extends Model {
    constructor(title = "", description = "", repositoryUrl, techStack = []) {
        super(title, description, techStack);
    }
}