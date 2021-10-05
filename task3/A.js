const DOWNLOADS = [
  {
    id: 1,
    title: "Recipe",
    status: "Done",
  },
  {
    id: 2,
    title: "Workouts",
    status: "Pending",
  },
  {
    id: 3,
    title: "Passwords",
    status: "Pending",
  },
  {
    id: 4,
    title: "To Do 2021",
    status: "Pending",
  },
  {
    id: 5,
    title: "Books",
    status: "Failed",
  },
];

const NOTE_STATUSES = {
  pending: "Pending",
  done: "Done",
  failed: "Failed",
};

const fillTheTable = (arr) => {
  let table = document.createElement("table");
  let thead = document.createElement("thead");
  table.appendChild(thead);
  let tr = document.createElement("tr");
  thead.appendChild(tr);
  tr.appendChild(document.createElement("th"));
  tr.appendChild(document.createElement("th"));
  tr.appendChild(document.createElement("th"));
  let tbody = document.createElement("tbody");
  table.appendChild(tbody);
  table.rows[0].cells[0].innerHTML = "ID";
  table.rows[0].cells[1].innerHTML = "Title";
  table.rows[0].cells[2].innerHTML = "Status";

  document.body.appendChild(table);
  let i = 1;

  arr.forEach((elem) => {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    tr.appendChild(document.createElement("td"));
    tr.appendChild(document.createElement("td"));
    tr.appendChild(document.createElement("td"));
    table.rows[i].cells[0].textContent = elem.id;
    table.rows[i].cells[1].innerHTML = elem.title;
    table.rows[i].cells[2].innerHTML = elem.status;
    table.rows[i].cells[2].dataset.status = elem.status;
    i++;
  });
};

fillTheTable(DOWNLOADS);

let btn = document.createElement("button");
btn.innerHTML = "Check status";
document.body.appendChild(btn);

let statusInterval = null;

const checkStatus = () => {
  console.log("Status check started");
  const taskWithPendingStatus = document.querySelector(
    "[data-status='Pending']"
  );
  if (taskWithPendingStatus) {
    taskWithPendingStatus.innerHTML = NOTE_STATUSES.done;
    taskWithPendingStatus.dataset.status = taskWithPendingStatus.innerHTML;
    return;
  }
  clearInterval(statusInterval);
};

const onClick = () => {
  const MS = 5000;
  if (statusInterval) {
    alert("Status checking is in progress now");
  } else {
    setTimeout(() => {
      setTimeout(checkStatus, 0);
      statusInterval = setInterval(checkStatus, MS);
    }, 3000);
  }
};

btn.onclick = onClick;
