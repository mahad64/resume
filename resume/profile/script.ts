const button = document.getElementById("toggle-skills") as HTMLButtonElement
const Skill = document.getElementById("skills")as HTMLElement
button.addEventListener('click',() => {
     if (Skill.style.display === "none" ) {
        Skill.style.display = 'block'
     } else{
        Skill.style.display = ' none'

     }
});