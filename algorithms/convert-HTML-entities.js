function convertHTML(str) {
    let ent = str.split("") 
    let entObj = {
       "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    }
   
    return ent.map(i => entObj[i] || i).join("");
  }
  
  convertHTML("Dolce & Gabbana");