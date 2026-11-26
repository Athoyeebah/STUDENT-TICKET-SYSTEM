# PLANNING DOCUMENT - Student Ticket System

## 1. Problem Explanation
Students have many problems every day, for example Wi-Fi not working, forgotten portal password, laptop shutting down, and email not receiving school mails. Before this system, there was no proper way to record and track them. Tickets could get lost, staff did not know which one was urgent, and which one was already resolved.

This system solves the problem by storing all tickets in one place, showing which ones are Waiting, In Progress, and Resolved, processing them in order, and allowing search and sorting.

## 2. Pseudocode
START
  Create Tickets array with 6 tickets
  Display all tickets
  Update status of TKT-001 to "In Progress"
  Count tickets by status and show summary
  Add Waiting tickets to Queue
  Process next ticket from Queue and move it to Stack
  Search ticket by ID
  Sort tickets by Priority, Name, ID
  Create OOP Tickets and show summary
  Validate new tickets before adding
END

##3. Flowchart
```mermaid
flowchart TD
    A([Start]) --> B[Add / Display Tickets]
    B --> C[Update Ticket Status]
    C --> D[Summary Count]
    D --> E[Add Waiting Tickets to Queue]
    E --> F{Is Queue Empty?}
    F -- Yes --> G[Print: No tickets waiting]
    F -- No --> H[Process Next Ticket]
    H --> I[Move Ticket to Processed Stack]
    I --> J[Search Ticket by ID]
    J --> K[Sort by Priority, Name, ID]
    K --> L[OOP Demo + Validation]
    L --> M([End])

## 4. Variables and Data Types
- Tickets: Array of Objects - stores all tickets
- ticketID: String e.g. "TKT-001"
- studentName: String e.g. "Amina Yusuf"
- issueDescription / issue: String
- category: String - "Wi-Fi", "Account", "Technical"
- priority: String - "High", "Medium", "Low"
- status: String - "Waiting", "In Progress", "Resolved"
- waitingQueue: Array - FIFO Queue
- processedStack: Array - LIFO Stack
- waitingCount, resolvedCount, inProgressCount: Number
- newTicket: Object
