"use strict";
const inputs = [
    ...document.querySelectorAll("input")
];
inputs.forEach((input)=>{
    const label = document.createElement("label");
    label.className = "field-label";
    label.htmlFor = input.id;
    // Converting camelCase name to capitalized words
    const labelName = input.name.replace(/([A-Z])/g, " $1").replace(/^./, (str)=>str.toUpperCase());
    label.textContent = labelName;
    input.placeholder = labelName;
    input.before(label);
});

//# sourceMappingURL=index.f75de5e1.js.map