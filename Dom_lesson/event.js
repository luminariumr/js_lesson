const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

// Click
// clearBtn.addEventListener("click", runEvent);
// clearBtn.addEventListener("mouseenter", runEvent);
// clearBtn.addEventListener("mouseleave", runEvent);
// clearBtn.addEventListener("mouseover", runEvent);
// clearBtn.addEventListener("mouseout", runEvent);
card.addEventListener("mousemove", runEvent);
function runEvent(e) {
  console.log(`Event Type: ${e.type}`);
  e.preventDefault();
  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},150)`;
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
}
