console.log("Main.js");

// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

const sectionEl = document.querySelector(".article__header");
console.log(sectionEl);
sectionEl.textContent = "Welcome to Meg's blog"

// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

const headers = document.querySelectorAll(".article__header");

for (let i = 0; i < headers.length; i++) {
    headers[i].classList.add("important");
}

// Obtain a reference the element with a class of dashed and remove it.

const noDash = document.querySelector(".dashed");
noDash.classList.remove("dashed");

// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

const footer = document.querySelector(".article__footer");
footer.classList.add("goldenrod");