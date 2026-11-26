# TECHNICAL EXPLANATION

## 1. Arrays and Objects- part B
- Tickets is an Array of Objects. Each ticket is an Object with ticketID, studentName, issueDescription, category, priority, status.
- Example: Tickets[0] = { ticketID: "TKT-001", studentName: "Amina Yusuf", ... }

## 2. Queue (FIFO) - Part C1
- waitingQueue = []
- addToQueue() uses push() to add to the end
- processNextTicket() uses shift() to remove from the front
- This is FIFO: The first ticket to enter is the first one to be removed. It is like a real queue.

## 3. Stack (LIFO) - Part C2
- processedStack = []
- addToProcessedStack() uses push()
- undoLastProcessed() uses pop() to remove the last one
- displayProcessedStack() loops from last to first
- This is LIFO: The last ticket processed is on top, and it is the one we can undo first.

## 4. Searching - Part D
- searchTicketByID() uses Linear Search: a for loop from i=0 to the end, checking if Tickets[i].ticketID === searchID
- If found, it returns the ticket. If not found, it returns null.

## 5. Sorting - Part D
- sortByPriorityBubbleSort(): Custom Bubble Sort. It uses getPriorityValue() where High=1, Medium=2, Low=3. It swaps neighbours if the first one is bigger.
- sortByStudentNameBuiltIn(): Uses built-in .sort() with localeCompare()
- sortByTicketIDBuiltIn(): Uses built-in .sort() with localeCompare() on ticketID

## 6. OOP - Part E
- class Ticket: Has private field #status, constructor, getStatus(), setStatus(), updateStatus(), getSummary()
- Encapsulation: #status cannot be changed directly, only through setStatus() which checks allowed values.
- Inheritance: TechnicalTicket extends Ticket (adds device, category="Technical"), AccountTicket extends Ticket (adds amount, category="Account")
- Polymorphism: Both child classes override getSummary() to add their own extra information, but still call super.getSummary()

## 7. Validation - Part F
- validateTicket() checks: name is not empty, issue is not empty, priority must be Low/Medium/High, status must be Waiting/In Progress/Resolved.
- addTicket() only adds the ticket if validateTicket() returnObjects
