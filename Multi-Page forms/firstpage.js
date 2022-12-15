let page1 = document.getElementById("page1");
let page2 = document.getElementById("page2");
let page3 = document.getElementById("page3");
let page4 = document.getElementById("page4");

let getNextPage = (pageNumber) => {
  if (pageNumber === "p2") {
    page2.style.display = "block";
    page1.style.display = "none";
  } else if (pageNumber === "p3") {
    page2.style.display = "none";
    page3.style.display = "block";
  } else if (pageNumber === "p4") {
    4;
    page3.style.display = "none";
    page4.style.display = "block";
  }
};

let getPreviousPage = (pageNumber) => {
  if (pageNumber === "p1") {
    page2.style.display = "none";
    page1.style.display = "block";
    console.log(typeof page2);
  } else if (pageNumber === "p2") {
    page2.style.display = "block";
    page3.style.display = "none";
  } else if (pageNumber === "p3") {
    page4.style.display = "none";
    page3.style.display = "block";
  }
};
