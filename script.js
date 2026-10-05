
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

project.completed = false;

console.log(project.completed);

project.student = "Germain";
console.log(project.student);

function describeProject(project) {
    return `${project.name} is part of Lesson ${project.lesson}.`;
}
console.log(describeProject(project));

const projectOutput = document.querySelector("#project-output");

projectOutput.textContent = describeProject(project);

const projects = [
    {
        name: "git-practice-1",
        lesson: 13,
        topic: "Git basics"
    },

    {
        name: "git-practice-2",
        lesson: 14,
        topic: "Git branches"
    },

    {
        name: "lesson19-practice",
        lesson: 19,
        topic: "JavaScript objects"
    }
];
console.log(projects[0].name);
console.log(projects[0].lesson);
console.log(projects[0].topic);

for (const project of projects) {
    console.log(project.name);
}
const projectList = document.querySelector("#project-list");

for (const project of projects) {
    const listItem = document.createElement("li");

    listItem.textContent =
        `${project.name} — Lesson ${project.lesson} — ${project.topic}`;

    projectList.appendChild(listItem);
}

function countProjects(projects) {
  return projects.length;
}

console.log(countProjects(projects));