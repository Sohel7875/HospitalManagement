# Pediatrics Department Screen

## Overview
The Pediatrics Department Screen is a web application that allows healthcare professionals to manage and monitor patient records in a pediatric department. Users can search for patients by name, view detailed patient reports, and manage records for vaccines, follow-ups, and lab tests.

## Features
- Search for patients by name.
- View detailed patient reports:
  - General Information: Name, Age, Gender, Parent, Contact, Address, Admission Date, Last Visit Date.
  - Immediate Actions: Vaccines, Lab Reports, and Follow-up appointments with status (e.g., overdue, pending).
- Main Table for patient details including:
  - Patient Name
  - Contact
  - Parent
  - Immediate Actions
  - Due Date
  - Action buttons for further actions (Vaccines, Follow-ups, Lab Tests).

## Table Structure
| Patient Name | Contact       | Parent      | Immediate Actions                                                                                           | Due Date  | Action      |
|--------------|---------------|-------------|------------------------------------------------------------------------------------------------------------|-----------|-------------|
| Rahul Sharma | +91-9876543210 | Anil Sharma | Type: Vaccine<br>Status: Overdue<br>DPT - Due since 2023-12-10<br>Type: Lab Report<br>Status: Pending<br>Blood Test - Scheduled for 2024-01-02 | 2024-01-10 | [Vaccines] [Follow-ups] [Lab Tests] |

### Example Vaccine History:
| Vaccine | Status   | Date       | Description                         |
|---------|----------|------------|-------------------------------------|
| BCG     | Completed| 2020-01-15 | Bacillus Calmette–Guérin vaccine   |
| DPT     | Overdue  | 2023-12-10 | Diptheria, Pertussis, Tetanus booster |
| Polio   | Completed| 2021-06-10 | Polio vaccination                  |

### Example Follow-up History:
| Date       | Doctor              | Reason                              | Notes                              |
|------------|---------------------|-------------------------------------|------------------------------------|
| 2024-01-10 | Dr. Kavita Joshi    | General health review and immunization update | Check weight gain, assess for allergies. |
| 2023-12-15 | Dr. Ramesh Singh    | Fever and cough diagnosis          | Prescribed antibiotics and suggested rest. |

### Example Lab Test History:
| Test Name  | Status   | Details                                     | Lab Name          | Test Date   |
|------------|----------|---------------------------------------------|-------------------|-------------|
| Blood Test | Pending  | Complete Blood Count (CBC), Hemoglobin      | Apollo Diagnostics| 2024-01-02  |
| Chest X-Ray| Completed| Routine screening                           | Fortis Labs       | 2023-12-15  |

## Data Management
- All patient data is dynamically fetched from `PatientData.jsx` in the `utils` folder of the `src` directory.
- Users can add, update, or delete vaccine records, follow-ups, and lab tests.
## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>

2. Navigate to the project directory:
  ```bash
   cd <project-directory>


3. Install dependencies:
   npm install

4. Run the app:
npm start


### Contributing
Feel free to fork the repository, create a branch, and submit pull requests. Contributions are welcome to enhance functionality and improve the UI.

### License
This project is licensed under the MIT License - see the LICENSE file for details.