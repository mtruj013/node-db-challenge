const db = require('../data/db-Config.js');

module.exports ={
    getProjects,
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

//gets resources
function getResources(){
    return db("resources")
}


//gets tasks
function getTasks(){
    return db("tasks")
    // .select("tasks.id","projects.project_name", "project.project_description")
    // .join("projects", "tasks.project_id", "projects.id")
    // .where("projects.id", id)
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