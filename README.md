# Seminar Manager

This repository implements a **Seminar Management**'s frontend, which manages **workshops** and **lectures**. The system enables **unauthenticated visitors** to sign up for workshops/lectures and request new seminar creation. **Admins** can review and approve or reject these requests, create registration forms, and manage participant sign-ups.

---

## **Features**

### **For Unauthenticated Users (Visitors):**

#### **1. Request a Seminar (Workshop/Lecture) Creation:**
- **User Story:**  
  As an unauthenticated visitor, I want to fill out a "Workshop/Lecture Registration" form so that I can request the creation of a new workshop or lecture.

- **Details:**
  - There are two modular forms, one for workshops and another for lectures.
  - Visitors can fill out basic details (e.g., title, description, proposed date, target audience).
  - Admins will review these requests before proceeding with any further actions.

---

### **For Admins:**

#### **2. Approve or Reject Seminar Requests:**
- **User Story:**  
  As an admin, I want to review submitted seminar requests (workshops/lectures) so that I can decide whether to approve or reject them.

- **Details:**
  - Admin can see a list of all submitted seminar requests.
  - Each request displays relevant details (e.g., seminar title, description, proposed date, target audience, and organizer details).
  - Admin will manually notify the applicants about the approval or rejection outside of the system (e.g., via email).

---

#### **3. Create a Registration Form for Approved Workshops:**
- **User Story:**  
  As an admin, I want to create a registration form for an approved workshop so that participants can sign up for specific time slots.

- **Details:**
  - Admin can configure:
    - Workshop details (e.g., title, description, date, speaker).
    - The number of available time slots (e.g., 10 slots) and the maximum number of participants per slot (e.g., 30 participants).
    - Required fields for participant registration (e.g., name, email, phone number).
  - The registration form may have different fields from the original workshop request (e.g., time slots, location).

---

#### **4. View Participants for Workshops:**
- **User Story:**  
  As an admin, I want to view a list of participants who have registered for specific workshops.

- **Details:**
  - Admin can view a list of participants and their details (e.g., name, contact information, time slot selection).
  - Currently, no additional actions are required, but this feature might include exporting participant lists or managing participant status in the future.

---

### **For Unauthenticated Users (Participants):**

#### **5. Register for Workshops:**
- **User Story:**  
  As an unauthenticated visitor, I want to fill out a registration form for a workshop to secure a spot in a specific time slot.

- **Details:**
  - The form displays:
    - Workshop details (e.g., title, description, speaker).
    - Available time slots with participant limits (e.g., shows if a slot is full or still has available space).
  - Visitors provide personal details (e.g., name, email, phone number).
  - After registration, the system will confirm the submission via email or an on-screen message.

---

## **Installation**

### **Prerequisites**
- [Node.js](https://nodejs.org/)
- **TDK-CORE** (inhouse backend system, ask your nearest TDK backend developer)
- [Package Manager](https://www.npmjs.com/) (npm, pnpm, yarn,...)

### **Setup**
1. Clone the repository:
   ```bash
   git clone https://github.com/tmarsik42/seminar-manager-fe.git
   cd seminar-manager-fe
   ```
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Configure `.env` file or node envs.
5. Start the development server:
   ```bash
   yarn dev
   ```

---

## **Usage**

### **Admin Panel:**
- Access the admin panel via `/admin`.
- Admin must log in to manage the seminar requests and registration forms.
- Key tasks include approving seminar requests, creating registration forms, and managing participants.

### **Visitor Interface:**
- Visitors can request to create a workshop/lecture via `/request-workshop`,`/request-lecture`.
- They can see a list of approved and open workshops at `/workshops`.
- They can register for an approved workshop at `/workshops/{id}/register`.

---

## **API Endpoints**

### **Public Endpoints:**
TODO

### **Admin Endpoints:**
TODO

---

## **Future Enhancements**
- Email notifications for seminar approval/rejection.
- Admin dashboard for tracking seminar statistics (e.g., number of participants, waiting list).
