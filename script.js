function addSubject() {
    const input = document.getElementById("subjectInput");
    const subjectName = input.value.trim();

    if (subjectName === "") {
        alert("Please enter a subject name.");
        return;
    }

    const list = document.getElementById("subjectList");
    const listItem = document.createElement("li");

    const subjectText = document.createElement("span");
    subjectText.textContent = subjectName;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-button";

    deleteButton.onclick = function () {
        listItem.remove();
    };

    listItem.appendChild(subjectText);
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    input.value = "";
    input.focus();
}