/* ========================================
   LESSON 19 — JAVASCRIPT OBJECTS
   ======================================== */


/* ========================================
   ONE PROJECT OBJECT
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


/* Display project information on the page */

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
   BUILD THE REPOSITORY TABLE
   ======================================== */

const reposBody =
    document.querySelector("#repos-body");

for (const repo of repos) {
    const row = makeRepoRow(repo);

    reposBody.appendChild(row);
}


/* ========================================
   SEVEN LEARNING TOPICS
   ======================================== */

const learningTopics = [
    {
        title: "HTML",
        description:
            "Building webpages with elements, headings, links, and semantic structure."
    },

    {
        title: "CSS",
        description:
            "Styling webpages with colors, spacing, typography, and layouts."
    },

    {
        title: "Responsive Design",
        description:
            "Making webpages adapt to different screen sizes and devices."
    },

    {
        title: "JavaScript",
        description:
            "Adding functionality with variables, functions, loops, and objects."
    },

    {
        title: "HTML Tables",
        description:
            "Organizing information into accessible rows, columns, and headings."
    },

    {
        title: "CSS Grid",
        description:
            "Arranging cards and content in flexible, responsive grid layouts."
    },

    {
        title: "Git and GitHub",
        description:
            "Tracking changes, creating branches, merging pull requests, and publishing projects."
    }
];


/* ========================================
   FUNCTION TO BUILD A LEARNING CARD
   ======================================== */

function makeLearningCard(topic) {
    const card = document.createElement("article");

    card.className = "repository-card";

    const heading = document.createElement("h3");
    heading.textContent = topic.title;

    const description = document.createElement("p");
    description.textContent = topic.description;

    card.appendChild(heading);
    card.appendChild(description);

    return card;
}


/* ========================================
   DISPLAY THE SEVEN LEARNING CARDS
   ======================================== */

const repositoryGrid =
    document.querySelector("#card-grid");

for (const topic of learningTopics) {
    const card = makeLearningCard(topic);

    repositoryGrid.appendChild(card);
}


/* ========================================
   DISPLAY REPOSITORIES IN A LIST
   ======================================== */

const projectList =
    document.querySelector("#project-list");

for (const repo of repos) {
    const listItem = document.createElement("li");

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

console.log("Number of repositories:", countRepos(repos));

console.log("Number of learning topics:", learningTopics.length);