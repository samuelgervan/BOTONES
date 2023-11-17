document.addEventListener("DOMContentLoaded"), () =>{
    const generateBtn= document.getElementById( "generateBtn");
    const addEventListener= Document.getElementById(ADDTOLISTBtn);
    const number= document.getElementById("NUMBER");
    const numberlist=document.getElementById("numberlist");
    generateBtn.addEventListener("click , () =>"{
        const randomnumber =match.floor(Math.ramdom() * 100) + 1;
        number.textcontent=randomnumber;
    });
    ADDTOLISTBtn.addEventListener( "cliack" , ()=>{
        const randomnumber = number.textContent;
        const listItem = document.createElement("li");
        listItem.textContent = randomnumber;
        numberlist.appendChild(listItem);
    });
}