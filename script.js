/* ========================================
   LESSON 19 — JAVASCRIPT OBJECTS
   ======================================== */


/* ========================================
   ONE OBJECT
   ======================================== */

const project = {
    name: "lesson19-practice",
    lesson: 19,
    topic: "JavaScript objects",
    completed: true
};


console.log(project);

console.log(project.name);

console.log(project.lesson);

console.log(project.completed);


/* Change a property */

project.completed = false;

console.log(project.completed);


/* Add a new property */

project.student = "Germain";

console.log(project.student);


/* ========================================
   FUNCTION THAT RETURNS A VALUE
   ======================================== */

function describeProject(project) {

    return `${project.name} is part of Lesson ${project.lesson}.`;
}


console.log(describeProject(project));


/* Display the result on the page */

const projectOutput =
    document.querySelector("#project-output");


projectOutput.textContent =
    describeProject(project);


/* ========================================
   LIST OF REPOSITORY OBJECTS
   ======================================== */

const repos = [

    {
        name: "git-practice-1",
        lesson: 13,
        topic: "init, add, commit, push"
    },

    {
        name: "git-practice-2",
        lesson: 14,
        topic: "branches and VS Code"
    },

    {
        name: "lesson19-practice",
        lesson: 19,
        topic: "tables, Grid, objects"
    }

];


console.log(repos);


/* ========================================
   ACCESS OBJECT PROPERTIES
   ======================================== */

console.log(repos.length);

console.log(repos[0].name);

console.log(repos[0].lesson);

console.log(repos[0].topic);


/* ========================================
   FUNCTION TO BUILD A TABLE ROW
   ======================================== */

function makeRepoRow(repo) {

    const row = document.createElement("tr");

    row.innerHTML = `
        <th scope="row">${repo.name}</th>
        <td>${repo.lesson}</td>
        <td>${repo.topic}</td>
    `;

    return row;
}


/* Test the function */

console.log(makeRepoRow(repos[1]));


/* ========================================
   BUILD THE TABLE FROM THE OBJECTS
   ======================================== */

const reposBody =
    document.querySelector("#repos-body");


for (const repo of repos) {

    const row = makeRepoRow(repo);

    reposBody.appendChild(row);
}
/* ========================================
   FUNCTION TO BUILD A REPOSITORY CARD
   ======================================== */

function makeRepoCard(repo) {

    const card = document.createElement("article");

    card.className = "repository-card";

    card.innerHTML = `
        <h3>${repo.name}</h3>
        <p><strong>Lesson:</strong> ${repo.lesson}</p>
        <p><strong>Topic:</strong> ${repo.topic}</p>
    `;

    return card;
}

/* ========================================
   SELECT THE REPOSITORY CARD CONTAINER
   ======================================== */

const repositoryGrid =
    document.querySelector(".repository-grid");
 
 /* ========================================
   BUILD REPOSITORY CARDS FROM DATA
   ======================================== */

for (const repo of repos) {

    const card = makeRepoCard(repo);

    repositoryGrid.appendChild(card);
}   
/* ========================================
   DISPLAY OBJECTS IN A LIST
   ======================================== */

const projectList =
    document.querySelector("#project-list");


for (const repo of repos) {

    const listItem =
        document.createElement("li");

    listItem.textContent =
        `${repo.name} — Lesson ${repo.lesson} — ${repo.topic}`;

    projectList.appendChild(listItem);
}


/* ========================================
   COUNT THE REPOSITORIES
   ======================================== */

function countRepos(repos) {

    return repos.length;
}


console.log(countRepos(repos));