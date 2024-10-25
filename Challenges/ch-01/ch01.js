let selectedNote = 0;

function noteSelection() {
  const notesList = document.querySelectorAll(".notes-list li");

  notesList.forEach((i) => {
    i.addEventListener("click", (e) => {
      notesList.forEach((note) => {
        note.classList.remove("selected");
      });
      selectedNote = e.currentTarget.innerText;
      i.classList.add("selected");
    });
  });
}
noteSelection();

function submitPage() {
  const btnSubmit = document.querySelector(".btn-submit");
  const container = document.querySelector(".content-container");

  btnSubmit.addEventListener("click", () => {
    if (selectedNote > 0) {
      container.innerHTML = `
      <img src="ch01-imgs/illustration-thank-you.svg" alt="Image Thank you!" style="margin-top: 1rem;">
      <span class="span-info">You selected ${selectedNote} out of 5</span>
      <h2 style="place-self: center; margin: 0;">Thank you!</h2>
      <p style="text-align: center;">We appreciate you taking the time to give a rating.<br>If you ever need more support, don't hesitate to get in touch!</p>
    `;
    }
  });
}
submitPage();
