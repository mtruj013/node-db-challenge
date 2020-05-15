const db = require('../data/db-Config.js');

module.exports ={
    getProjects,
    getProjectById,
    getResources,
    getTasks,
    addProject,
    addResource,
    addTask
}

//gets all projects
function getProjects(){
    return db("projects")
}

//get project by id
function getProjectById(id){
    return db("projects")
    .where("id", id)
    .first()
}

//gets resources
function getResources(){
    return db("resources")
}


//gets tasks
function getTasks(id){
    return db("tasks")
    .join("projects", "tasks.project_id", "projects.id")
    .where("projects.id", id)
    .select("tasks.id", "projects.name", "projects.description", "tasks.task_description", "tasks.task_notes")
}

//adds project
function addProject(project){
    return db("projects")
    .insert(project, "id")
}

//adds resource
function addResource(resource){
    return db("resources")
    .insert(resource, "id")
}

//adds tasks
function addTask(task, project_id){
    return db("tasks")
    .insert(task, project_id)
}