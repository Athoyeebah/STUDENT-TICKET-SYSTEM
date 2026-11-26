# CAMPUS HELP DESK TICKET MANAGEMENT SYSTEM #
# About the program?
A system to manage student support tickets for school issues like Wi-Fi, Account, and Technical problems. Staff can add tickets, update status, see the waiting queue, process tickets, search, sort, and view a summary.

## Features
- Add and display tickets
- Update ticket status
- Summary count by status (Waiting / In Progress / Resolved)
- Queue (FIFO) - First ticket in, first to be processed
- Stack (LIFO) - Last processed ticket can be undone
- Search ticket by ID (Linear Search)
- Sorting by Priority (Bubble Sort), by Name and by Ticket ID (Built-in sort)
- OOP: Ticket class + TechnicalTicket + AccountTicket (Inheritance)
- Validation for name, issue, priority, status

## How to Run
1. Make sure Node.js is installed
2. Open terminal in the project folder
3. Run:
   node ticketSystem.js

## Example Tickets
TKT-001 - Amina Yusuf - Cannot connect to campus Wi-Fi - High - Waiting
TKT-002 - Chinedu Okafor - Forgot portal password - Medium - In Progress
TKT-003 - Fatima Bello - Laptop shutting down - High - Waiting

## Author
Athoyeebah - Campus help desk student management system
