//  PART B: TICKETS DATA(6)
const Tickets = [
  {
    ticketID: "TKT-001",
    studentName: "Amina Yusuf",
    issueDescription: "Cannot connect to campus Wi-Fi in the hostel",
    category: "Wi-Fi",
    priority: "High",
    status: "Waiting",
  },
  {
    ticketID: "TKT-002",
    studentName: "Chinedu Okafor",
    issueDescription: "Forgot student portal password and cannot log in",
    category: "Account",
    priority: "Medium",
    status: "In Progress",
  },
  {
    ticketID: "TKT-003",
    studentName: "Fatima Bello",
    issueDescription: "Laptop keeps shutting down during class",
    category: "Technical",
    priority: "High",
    status: "Waiting",
  },
  {
    ticketID: "TKT-004",
    studentName: "Emeka Eze",
    issueDescription: "Email account not receiving school mails",
    category: "Account",
    priority: "Low",
    status: "Resolved",
  },
  {
    ticketID: "TKT-005",
    studentName: "Zainab Musa",
    issueDescription: "Wi-Fi is very slow in the library",
    category: "Wi-Fi",
    priority: "Medium",
    status: "In Progress",
  },
  {
    ticketID: "TKT-006",
    studentName: "Tunde Adeyemi",
    issueDescription: "Projector in classroom is not displaying",
    category: "Technical",
    priority: "Low",
    status: "Resolved",
  },
];

//Add new ticket function in DEMO SECTION

// Display all recorded Tickets
function displayTickets() {
  console.log("All Tickets:");
  for (let i = 0; i < Tickets.length; i++) {
    console.log(
      Tickets[i].ticketID +
        " - " +
        Tickets[i].studentName +
        " - " +
        Tickets[i].issueDescription +
        " - " +
        Tickets[i].category +
        " - " +
        Tickets[i].priority +
        " - " +
        Tickets[i].status,
    );
  }
}

//update an existing ticket's status
function updateStatus(ticketID, newStatus) {
  for (let i = 0; i < Tickets.length; i++) {
    if (Tickets[i].ticketID === ticketID) {
      Tickets[i].status = newStatus;
      console.log("ticketID: " + Tickets[i].ticketID);
      console.log("studentName: " + Tickets[i].studentName);
      console.log("issueDescription: " + Tickets[i].issueDescription);
      console.log("category: " + Tickets[i].category);
      console.log("priority: " + Tickets[i].priority);
      console.log("status: " + Tickets[i].status);
      return Tickets[i];
    }
  }
  console.log(`Ticket ${ticketID} not found.`);
  return null;
}

//Display summary counts of tickets by status

function summaryCount() {
  let waitingCount = 0;
  let resolvedCount = 0;
  let inProgressCount = 0;
  for (let i = 0; i < Tickets.length; i++) {
    if (Tickets[i].status === "Waiting") waitingCount++;
    if (Tickets[i].status === "Resolved") resolvedCount++;
    if (Tickets[i].status === "In Progress") inProgressCount++;
  }
  console.log("Waiting: " + waitingCount);
  console.log("Resolved: " + resolvedCount);
  console.log("In Progress: " + inProgressCount);
}

//  PART C1 Queue FIFO
let waitingQueue = [];
// add new ticket to the waiting queue
function addToQueue(ticket) {
  waitingQueue.push(ticket);
  console.log(ticket.ticketID + " added to waiting queue");
}
//display the next ticket waiting to be processed
function displayNextTicket() {
  if (waitingQueue.length === 0) {
    console.log("No tickets waiting");
    return;
  }
  let next = waitingQueue[0];
  console.log(
    "Next ticket waiting: " +
      next.ticketID +
      " - " +
      next.studentName +
      " - " +
      next.status,
  );
}
//display tickets on a queue
function displayQueue() {
  console.log("Waiting Queue:");
  for (let i = 0; i < waitingQueue.length; i++) {
    console.log(
      waitingQueue[i].ticketID +
        " - " +
        waitingQueue[i].studentName +
        " - " +
        waitingQueue[i].status,
    );
  }
}

// PART C2: STACK (LIFO)
let processedStack = [];
//push processed ticket onto a stack
function addToProcessedStack(ticket) {
  processedStack.push(ticket);
  console.log(ticket.ticketID + " added to processed stack");
}
//display most recently processed ticket
function displayMostRecentProcessed() {
  if (processedStack.length === 0) {
    console.log("No tickets processed yet");
    return;
  }
  let last = processedStack[processedStack.length - 1];
  console.log(
    "Most recently processed: " +
      last.ticketID +
      " - " +
      last.studentName +
      " - " +
      last.status,
  );
}
//remove last processed ticket from stack
function undoLastProcessed() {
  if (processedStack.length === 0) {
    console.log("No tickets to remove");
    return;
  }
  let removed = processedStack.pop();
  console.log(
    "Removed from processed stack: " +
      removed.ticketID +
      " - " +
      removed.studentName,
  );
  return removed;
}
//display processed stack
function displayProcessedStack() {
  console.log("Processed Stack (top to bottom):");
  for (let i = processedStack.length - 1; i >= 0; i--) {
    console.log(
      processedStack[i].ticketID +
        " - " +
        processedStack[i].studentName +
        " - " +
        processedStack[i].status,
    );
  }
}

// process the next ticket(connects queue + stack)
function processNextTicket() {
  if (waitingQueue.length === 0) {
    console.log("No tickets waiting - cannot process. Queue is empty.");
    return null;
  }
  let nextTicket = waitingQueue.shift();
  nextTicket.status = "In Progress";
  console.log(
    "Processing: " + nextTicket.ticketID + " - " + nextTicket.studentName,
  );
  addToProcessedStack(nextTicket);
  return nextTicket;
}

//  PART D: SEARCHING
function searchTicketByID(searchID) {
  for (let i = 0; i < Tickets.length; i++) {
    if (Tickets[i].ticketID === searchID) {
      console.log(
        "Ticket Found: " +
          Tickets[i].ticketID +
          " - " +
          Tickets[i].studentName +
          " - " +
          Tickets[i].status +
          " - " +
          Tickets[i].priority,
      );
      return Tickets[i];
    }
  }
  console.log(
    "Ticket not found - Ticket with ID " + searchID + " does not exist.",
  );
  return null;
}

//  PART D: SORTING
function getPriorityValue(priority) {
  if (priority === "High") return 1;
  if (priority === "Medium") return 2;
  if (priority === "Low") return 3;
  return 4;
}

function sortByPriorityBubbleSort(arr) {
  let sorted = [...arr];
  for (let i = 0; i < sorted.length - 1; i++) {
    for (let j = 0; j < sorted.length - 1 - i; j++) {
      if (
        getPriorityValue(sorted[j].priority) >
        getPriorityValue(sorted[j + 1].priority)
      ) {
        let temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }
  console.log("Sorted by Priority (Bubble Sort - Custom):");
  for (let i = 0; i < sorted.length; i++) {
    console.log(
      sorted[i].ticketID +
        " - " +
        sorted[i].studentName +
        " - " +
        sorted[i].priority,
    );
  }
  return sorted;
}

function sortByStudentNameBuiltIn(arr) {
  let sorted = [...arr];
  sorted.sort((a, b) => a.studentName.localeCompare(b.studentName));
  console.log("Sorted by Student Name (Built-in sort):");
  for (let i = 0; i < sorted.length; i++) {
    console.log(
      sorted[i].ticketID +
        " - " +
        sorted[i].studentName +
        " - " +
        sorted[i].priority,
    );
  }
  return sorted;
}

function sortByTicketIDBuiltIn(arr) {
  let sorted = [...arr];
  sorted.sort((a, b) => a.ticketID.localeCompare(b.ticketID));
  console.log("Sorted by Ticket ID (Built-in sort):");
  for (let i = 0; i < sorted.length; i++) {
    console.log(
      sorted[i].ticketID +
        " - " +
        sorted[i].studentName +
        " - " +
        sorted[i].priority,
    );
  }
  return sorted;
}

//  PART E: OOP
class Ticket {
  #status;
  constructor(ticketID, studentName, issue, priority) {
    this.ticketID = ticketID;
    this.studentName = studentName;
    this.issue = issue;
    this.priority = priority;
    this.#status = "Waiting";
    this.createdAt = new Date().toLocaleDateString();
  }
  getStatus() {
    return this.#status;
  }
  setStatus(newStatus) {
    const allowed = ["Waiting", "In Progress", "Resolved"];
    if (allowed.includes(newStatus)) {
      this.#status = newStatus;
      console.log(`Status updated to ${newStatus}`);
    } else {
      console.log("Invalid status! Use Waiting, In Progress or Resolved");
    }
  }
  updateStatus(newStatus) {
    this.setStatus(newStatus);
  }
  getSummary() {
    return `${this.ticketID} - ${this.studentName} - ${this.issue} - Priority: ${this.priority} - Status: ${this.#status}`;
  }
}

class TechnicalTicket extends Ticket {
  constructor(ticketID, studentName, issue, priority, device) {
    super(ticketID, studentName, issue, priority);
    this.device = device;
    this.category = "Technical";
  }
  getSummary() {
    return `${super.getSummary()} - Device: ${this.device} - Category: ${this.category}`;
  }
}

class AccountTicket extends Ticket {
  constructor(ticketID, studentName, issue, priority, amount) {
    super(ticketID, studentName, issue, priority);
    this.amount = amount;
    this.category = "Account";
  }
  getSummary() {
    return `${super.getSummary()} - Amount: ₦${this.amount} - Category: ${this.category}`;
  }
}

// PART F: VALIDATION
function validateTicket(studentName, issue, priority, status) {
  if (!studentName || studentName.trim() === "") {
    console.log("Error: Student name cannot be empty.");
    return false;
  }
  if (!issue || issue.trim() === "") {
    console.log("Error: Issue description cannot be empty.");
    return false;
  }
  if (priority !== "Low" && priority !== "Medium" && priority !== "High") {
    console.log("Error: Priority must be Low, Medium or High.");
    return false;
  }
  if (
    status !== "Waiting" &&
    status !== "In Progress" &&
    status !== "Resolved"
  ) {
    console.log("Error: Status must be Waiting, In Progress or Resolved.");
    return false;
  }
  return true;
}

function addTicket(ticketID, studentName, issue, priority, status) {
  if (!validateTicket(studentName, issue, priority, status)) {
    return false;
  }
  const newTicket = {
    ticketID,
    studentName,
    issueDescription: issue,
    priority,
    status,
  };
  Tickets.push(newTicket);
  waitingQueue.push(newTicket);
  console.log(`Ticket ${ticketID} added successfully.`);
  return true;
}

// DEMO

//  1. ADD A NEW TICKET TO THE SYSTEM
console.log("\n=== ADD A NEW TICKET TO THE SYSTEM ===");
Tickets.push({
  ticketID: "TKT-007",
  studentName: "Oyin Ade",
  issueDescription: "Login issue - cannot access student portal",
  category: "Account",
  priority: "High",
  status: "Waiting",
});
console.log("Ticket TKT-007 added successfully.");

// 2. DISPLAY TICKETS
console.log("\n=== DISPLAY TICKETS ===");
displayTickets();

//  3. UPDATE STATUS
console.log("=== UPDATE AN EXISTING TICKET STATUS ===");
updateStatus("TKT-001", "In Progress");
updateStatus("TKT-009", "In Progress");

//  4. SUMMARY COUNT 
console.log("\n=== SUMMARY COUNT ===");
summaryCount();

//  5. PART C: QUEUE (FIFO)
console.log("\n=== PART C: QUEUE ===");
for (let i = 0; i < Tickets.length; i++) {
  if (Tickets[i].status === "Waiting") {
    addToQueue(Tickets[i]);
  }
}
displayQueue();
displayNextTicket();

console.log("\n--- Process Next Ticket ---");
processNextTicket();
displayQueue();

//  6. PART C: STACK (LIFO)
console.log("\n=== PART C: STACK ===");
displayMostRecentProcessed();
displayProcessedStack();
console.log("\n--- Undo Last Processed ---");
undoLastProcessed();
displayProcessedStack();

// 7. PART D: SEARCH
console.log("\n=== PART D: SEARCH ===");
searchTicketByID("TKT-003");
searchTicketByID("TKT-999");

// 8. PART D: SORTING
console.log("\n=== PART D: SORTING ===");
sortByPriorityBubbleSort(Tickets);
sortByStudentNameBuiltIn(Tickets);
sortByTicketIDBuiltIn(Tickets);

//  9. PART E: OOP
console.log("\n=== PART E: OOP ===");
const t1 = new Ticket(
  "TKT-001",
  "Amina Yusuf",
  "Cannot connect to Wi-Fi",
  "High",
);
const t2 = new TechnicalTicket(
  "TKT-002",
  "Fatima Bello",
  "Laptop keeps shutting down",
  "High",
  "HP Laptop",
);
const t3 = new AccountTicket(
  "TKT-003",
  "Chinedu Okafor",
  "Forgot portal password",
  "Medium",
  50000,
);
console.log(t1.getSummary());
console.log(t2.getSummary());
console.log(t3.getSummary());
console.log("Old status:", t2.getStatus());
t2.updateStatus("In Progress");
console.log("New status:", t2.getStatus());

//  10. PART F: VALIDATION
console.log("\n=== PART F: ADD TICKET WITH VALIDATION ===");
addTicket("TKT-008", "Grace", "Transcript request", "Medium", "Waiting");
addTicket("TKT-009", "", "No name", "Low", "Waiting");
addTicket("TKT-010", "Femi", "", "Low", "Waiting");
addTicket("TKT-011", "Femi", "Fees issue", "Urgent", "Waiting");
addTicket("TKT-012", "Mary", "ID card", "Low", "Pending");

// 11. PROCESS QUEUE WHEN EMPTY
console.log("\n=== PROCESS QUEUE WHEN EMPTY ===");
waitingQueue = [];
processNextTicket();
