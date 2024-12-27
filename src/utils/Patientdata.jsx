export const patientData =[
    {
      id: 1,
      name: 'Rahul Sharma',
      contact: '+91-9876543210',
      parent: 'Anil Sharma',
      address: 'Mumbai, Maharashtra, India',
      age: 8,
      gender: 'Male',
      admissionDate: '2023-12-20',
      lastVisitDate: '2023-12-15',
      dueDate: '2024-01-10',
      immediateActions: [
        { type: 'Vaccine', status: 'Overdue', details: 'DPT Vaccine - Due since 2023-12-10' },
        { type: 'Follow-up', status: 'Pending', details: 'Scheduled follow-up for general health check-up' },
        { type: 'Lab Report', status: 'Pending', details: 'Blood Test - CBC and Hemoglobin analysis' },
      ],
      vaccines: [
        { name: 'BCG', date: '2020-01-15', status: 'Completed' },
        { name: 'DPT', date: '2023-12-10', status: 'Overdue', description: 'Diptheria, Pertussis, Tetanus booster' },
        { name: 'Polio', date: '2021-06-10', status: 'Completed' },
      ],
      labReports: [
        {
          name: 'Blood Test',
          status: 'Pending',
          details: 'Complete Blood Count (CBC), Hemoglobin',
          labName: 'Apollo Diagnostics',
          testDate: 'Scheduled for 2024-01-02',
        },
        {
          name: 'Chest X-Ray',
          status: 'Completed',
          details: 'Routine screening',
          labName: 'Fortis Labs',
          testDate: '2023-12-15',
        },
      ],
      followUps: [
        {
          date: '2024-01-10',
          doctor: 'Dr. Kavita Joshi',
          reason: 'General health review and immunization update',
          notes: 'Check weight gain, assess for allergies.',
        },
        {
          date: '2023-12-15',
          doctor: 'Dr. Ramesh Singh',
          reason: 'Fever and cough diagnosis',
          notes: 'Prescribed antibiotics and suggested rest.',
        },
      ],
    },
    {
      id: 2,
      name: 'Aanya Gupta',
      contact: '+91-9887766554',
      parent: 'Neha Gupta',
      address: 'Delhi, India',
      age: 5,
      gender: 'Female',
      admissionDate: '2023-11-10',
      lastVisitDate: '2023-12-01',
      dueDate: '2024-01-05',
      immediateActions: [
        { type: 'Vaccine', status: 'Completed', details: 'Polio Vaccine - Completed on 2023-12-01' },
        { type: 'Follow-up', status: 'Pending', details: 'Scheduled follow-up for growth check-up' },
        { type: 'Lab Report', status: 'Pending', details: 'Urine Test - Routine checkup' },
      ],
      vaccines: [
        { name: 'BCG', date: '2020-01-05', status: 'Completed' },
        { name: 'Polio', date: '2023-12-01', status: 'Completed', description: 'Polio vaccination booster' },
      ],
      labReports: [
        {
          name: 'Urine Test',
          status: 'Pending',
          details: 'Routine Urinalysis',
          labName: 'Max Labs',
          testDate: 'Scheduled for 2024-01-05',
        },
      ],
      followUps: [
        {
          date: '2024-01-05',
          doctor: 'Dr. Neha Mehta',
          reason: 'General health and growth review',
          notes: 'Monitor nutritional intake, assess for allergies.',
        },
      ],
    },
    {
      id: 3,
      name: 'Ishaan Verma',
      contact: '+91-9008007000',
      parent: 'Sunil Verma',
      address: 'Bangalore, Karnataka, India',
      age: 12,
      gender: 'Male',
      admissionDate: '2023-07-15',
      lastVisitDate: '2023-12-10',
      dueDate: '2024-01-20',
      immediateActions: [
        { type: 'Vaccine', status: 'Completed', details: 'Hepatitis B - Completed on 2023-07-10' },
        { type: 'Follow-up', status: 'Overdue', details: 'Routine follow-up for asthma management' },
        { type: 'Lab Report', status: 'Pending', details: 'X-Ray - Chest check-up' },
      ],
      vaccines: [
        { name: 'BCG', date: '2020-02-20', status: 'Completed' },
        { name: 'Hepatitis B', date: '2023-07-10', status: 'Completed', description: 'Hepatitis B vaccine' },
      ],
      labReports: [
        {
          name: 'Chest X-Ray',
          status: 'Pending',
          details: 'Routine chest checkup for asthma',
          labName: 'Care Clinic Labs',
          testDate: 'Scheduled for 2024-01-15',
        },
      ],
      followUps: [
        {
          date: '2023-12-15',
          doctor: 'Dr. Sushma Rai',
          reason: 'Asthma management and treatment update',
          notes: 'Review medication, adjust dosage as necessary.',
        },
        {
          date: '2023-07-10',
          doctor: 'Dr. Pradeep Sharma',
          reason: 'Routine asthma check-up',
          notes: 'Asthma under control with current treatment.',
        },
      ],
    },
    {
      id: 4,
      name: 'Kavya Nair',
      contact: '+91-9812456709',
      parent: 'Sujatha Nair',
      address: 'Chennai, Tamil Nadu, India',
      age: 6,
      gender: 'Female',
      admissionDate: '2023-08-18',
      lastVisitDate: '2023-12-05',
      dueDate: '2024-01-12',
      immediateActions: [
        { type: 'Vaccine', status: 'Completed', details: 'Hepatitis A Vaccine - Completed on 2023-08-10' },
        { type: 'Follow-up', status: 'Pending', details: 'Scheduled follow-up for weight gain' },
        { type: 'Lab Report', status: 'Overdue', details: 'Routine Blood Test - Due since 2023-12-01' },
      ],
      vaccines: [
        { name: 'BCG', date: '2020-04-15', status: 'Completed' },
        { name: 'Hepatitis A', date: '2023-08-10', status: 'Completed', description: 'Hepatitis A vaccine' },
      ],
      labReports: [
        {
          name: 'Blood Test',
          status: 'Overdue',
          details: 'Complete Blood Count, Iron Levels',
          labName: 'Medi Labs',
          testDate: 'Due since 2023-12-01',
        },
      ],
      followUps: [
        {
          date: '2024-01-12',
          doctor: 'Dr. Meera Krishnan',
          reason: 'Check weight gain progress, immunization review',
          notes: 'Assess for any deficiencies, dietary recommendations.',
        },
        {
          date: '2023-12-05',
          doctor: 'Dr. Radhika Sundar',
          reason: 'Routine check-up, general health assessment',
          notes: 'Encourage balanced nutrition.',
        },
      ],
    },{
        "id": 5,
        "name": "Aryan Patil",
        "contact": "+91-9898765432",
        "parent": "Rajesh Patil",
        "address": "Pune, Maharashtra, India",
        "age": 10,
        "gender": "Male",
        "admissionDate": "2023-10-10",
        "lastVisitDate": "2023-12-18",
        "dueDate": "2024-01-25",
        "immediateActions": [
          { "type": "Vaccine", "status": "Pending", "details": "Measles Vaccine - Scheduled for 2024-01-10" },
          { "type": "Follow-up", "status": "Overdue", "details": "Routine health check-up overdue since 2023-12-01" },
          { "type": "Lab Report", "status": "Pending", "details": "Urine Test - Scheduled for 2024-01-10" }
        ],
        "vaccines": [
          { "name": "BCG", "date": "2020-01-10", "status": "Completed" },
          { "name": "Measles", "date": "2024-01-10", "status": "Pending" }
        ],
        "labReports": [
          { "name": "Urine Test", "status": "Pending", "details": "Routine check-up", "labName": "Reliance Diagnostics", "testDate": "Scheduled for 2024-01-10" }
        ],
        "followUps": [
          { "date": "2024-01-10", "doctor": "Dr. Anjali Deshmukh", "reason": "Routine health check-up", "notes": "Monitor overall health status" }
        ]
      },
      {
        "id": 6,
        "name": "Saanvi Rao",
        "contact": "+91-9776654321",
        "parent": "Vikram Rao",
        "address": "Hyderabad, Telangana, India",
        "age": 4,
        "gender": "Female",
        "admissionDate": "2023-11-15",
        "lastVisitDate": "2023-12-10",
        "dueDate": "2024-01-15",
        "immediateActions": [
          { "type": "Vaccine", "status": "Completed", "details": "Polio Vaccine - Completed on 2023-12-01" },
          { "type": "Follow-up", "status": "Pending", "details": "Growth check-up scheduled for 2024-01-05" },
          { "type": "Lab Report", "status": "Overdue", "details": "CBC Test - Due since 2023-12-01" }
        ],
        "vaccines": [
          { "name": "BCG", "date": "2020-02-10", "status": "Completed" },
          { "name": "Polio", "date": "2023-12-01", "status": "Completed" }
        ],
        "labReports": [
          { "name": "CBC Test", "status": "Overdue", "details": "Complete Blood Count", "labName": "Apollo Labs", "testDate": "Due since 2023-12-01" }
        ],
        "followUps": [
          { "date": "2024-01-05", "doctor": "Dr. Priya Sharma", "reason": "Growth and development check-up", "notes": "Monitor nutrition and weight" }
        ]
      },
      {
        "id": 7,
        "name": "Madhav Singh",
        "contact": "+91-9632587410",
        "parent": "Kiran Singh",
        "address": "Delhi, India",
        "age": 7,
        "gender": "Male",
        "admissionDate": "2023-09-25",
        "lastVisitDate": "2023-12-08",
        "dueDate": "2024-01-18",
        "immediateActions": [
          { "type": "Vaccine", "status": "Overdue", "details": "DTP Vaccine - Due since 2023-12-01" },
          { "type": "Follow-up", "status": "Pending", "details": "Routine health check-up scheduled for 2024-01-15" },
          { "type": "Lab Report", "status": "Pending", "details": "Urine Test - Scheduled for 2024-01-10" }
        ],
        "vaccines": [
          { "name": "DTP", "date": "2023-11-10", "status": "Completed" },
          { "name": "Polio", "date": "2023-12-01", "status": "Overdue" }
        ],
        "labReports": [
          { "name": "Urine Test", "status": "Pending", "details": "Routine Urine Test", "labName": "Max Labs", "testDate": "Scheduled for 2024-01-10" }
        ],
        "followUps": [
          { "date": "2024-01-15", "doctor": "Dr. Neha Kapoor", "reason": "General health check-up", "notes": "Assess overall health, check for allergies" }
        ]
      },
      {
        "id": 8,
        "name": "Esha Desai",
        "contact": "+91-9887766000",
        "parent": "Madhavi Desai",
        "address": "Mumbai, Maharashtra, India",
        "age": 9,
        "gender": "Female",
        "admissionDate": "2023-06-30",
        "lastVisitDate": "2023-12-03",
        "dueDate": "2024-01-05",
        "immediateActions": [
          { "type": "Vaccine", "status": "Completed", "details": "DPT Vaccine - Completed on 2023-11-15" },
          { "type": "Follow-up", "status": "Pending", "details": "Scheduled follow-up for growth and nutrition" },
          { "type": "Lab Report", "status": "Completed", "details": "Blood Test - Completed on 2023-12-01" }
        ],
        "vaccines": [
          { "name": "DPT", "date": "2023-11-15", "status": "Completed" }
        ],
        "labReports": [
          { "name": "Blood Test", "status": "Completed", "details": "Routine Blood Test", "labName": "Bangalore Labs", "testDate": "Completed on 2023-12-01" }
        ],
        "followUps": [
          { "date": "2024-01-05", "doctor": "Dr. Sunita Agarwal", "reason": "General health review", "notes": "Monitor growth and development" }
        ]
      },
      {
        "id": 9,
        "name": "Rohan Kumar",
        "contact": "+91-9444556677",
        "parent": "Sandeep Kumar",
        "address": "Bangalore, Karnataka, India",
        "age": 11,
        "gender": "Male",
        "admissionDate": "2023-08-05",
        "lastVisitDate": "2023-11-25",
        "dueDate": "2024-01-12",
        "immediateActions": [
          { "type": "Vaccine", "status": "Completed", "details": "Hepatitis A Vaccine - Completed on 2023-09-20" },
          { "type": "Follow-up", "status": "Overdue", "details": "Asthma check-up overdue since 2023-12-01" },
          { "type": "Lab Report", "status": "Pending", "details": "X-Ray - Chest check-up" }
        ],
        "vaccines": [
          { "name": "Hepatitis A", "date": "2023-09-20", "status": "Completed" }
        ],
        "labReports": [
          { "name": "Chest X-Ray", "status": "Pending", "details": "Routine check-up", "labName": "Care Clinic", "testDate": "Scheduled for 2024-01-05" }
        ],
        "followUps": [
          { "date": "2023-12-05", "doctor": "Dr. Radhika Shah", "reason": "Routine asthma check-up", "notes": "Medication review and dosage adjustment" }
        ]
      },
      
        {
          "id": 10,
          "name": "Maya Reddy",
          "contact": "+91-9837456123",
          "parent": "Vikram Reddy",
          "address": "Bangalore, Karnataka, India",
          "age": 6,
          "gender": "Female",
          "admissionDate": "2023-07-14",
          "lastVisitDate": "2023-12-15",
          "dueDate": "2024-01-30",
          "immediateActions": [
            { "type": "Vaccine", "status": "Pending", "details": "Rotavirus Vaccine - Due on 2024-01-10" },
            { "type": "Follow-up", "status": "Pending", "details": "Scheduled follow-up for asthma check-up" },
            { "type": "Lab Report", "status": "Completed", "details": "Urine Test - Routine check-up" }
          ],
          "vaccines": [
            { "name": "BCG", "date": "2020-03-01", "status": "Completed" },
            { "name": "Rotavirus", "date": "2023-12-05", "status": "Completed" }
          ],
          "labReports": [
            {
              "name": "Urine Test",
              "status": "Completed",
              "details": "Routine Urinalysis",
              "labName": "Care Labs",
              "testDate": "2023-12-05"
            }
          ],
          "followUps": [
            {
              "date": "2024-01-30",
              "doctor": "Dr. Suresh Kumar",
              "reason": "Asthma management and review",
              "notes": "Check asthma symptoms, provide medication adjustments."
            }
          ]
        },
        {
          "id": 11,
          "name": "Ravi Verma",
          "contact": "+91-9812345678",
          "parent": "Sushila Verma",
          "address": "Delhi, India",
          "age": 12,
          "gender": "Male",
          "admissionDate": "2023-04-21",
          "lastVisitDate": "2023-11-22",
          "dueDate": "2024-02-10",
          "immediateActions": [
            { "type": "Vaccine", "status": "Overdue", "details": "Hepatitis A - Due on 2023-12-10" },
            { "type": "Follow-up", "status": "Pending", "details": "Scheduled follow-up for leg injury recovery" },
            { "type": "Lab Report", "status": "Pending", "details": "X-Ray for leg check-up" }
          ],
          "vaccines": [
            { "name": "BCG", "date": "2020-07-18", "status": "Completed" },
            { "name": "Hepatitis A", "date": "2023-11-15", "status": "Completed" }
          ],
          "labReports": [
            {
              "name": "X-Ray",
              "status": "Pending",
              "details": "Leg X-Ray due for injury recovery assessment",
              "labName": "Med Diagnostics",
              "testDate": "2024-01-05"
            }
          ],
          "followUps": [
            {
              "date": "2024-02-10",
              "doctor": "Dr. Amit Kumar",
              "reason": "Review leg injury and physical recovery",
              "notes": "Assess recovery progress and suggest physical therapy."
            }
          ]
        },
        {
          "id": 12,
          "name": "Leela Gupta",
          "contact": "+91-9966338822",
          "parent": "Deepak Gupta",
          "address": "Mumbai, Maharashtra, India",
          "age": 8,
          "gender": "Female",
          "admissionDate": "2023-01-28",
          "lastVisitDate": "2023-10-19",
          "dueDate": "2024-01-12",
          "immediateActions": [
            { "type": "Vaccine", "status": "Pending", "details": "Measles Vaccine - Due on 2024-01-05" },
            { "type": "Follow-up", "status": "Pending", "details": "Follow-up for skin rash" },
            { "type": "Lab Report", "status": "Completed", "details": "Liver Function Test - CBC" }
          ],
          "vaccines": [
            { "name": "BCG", "date": "2020-02-19", "status": "Completed" },
            { "name": "Measles", "date": "2023-11-28", "status": "Completed" }
          ],
          "labReports": [
            {
              "name": "Liver Function Test",
              "status": "Completed",
              "details": "Complete Liver Function Analysis",
              "labName": "Prime Diagnostics",
              "testDate": "2023-10-15"
            }
          ],
          "followUps": [
            {
              "date": "2024-01-12",
              "doctor": "Dr. Seema Chauhan",
              "reason": "Skin rash review and management",
              "notes": "Review rash and possible allergic reaction."
            }
          ]
        },
        {
          "id": 13,
          "name": "Rohit Kapoor",
          "contact": "+91-9977332211",
          "parent": "Manoj Kapoor",
          "address": "Chennai, Tamil Nadu, India",
          "age": 10,
          "gender": "Male",
          "admissionDate": "2023-09-05",
          "lastVisitDate": "2023-12-07",
          "dueDate": "2024-01-15",
          "immediateActions": [
            { "type": "Vaccine", "status": "Completed", "details": "Chickenpox Vaccine - Completed on 2023-12-01" },
            { "type": "Follow-up", "status": "Pending", "details": "Follow-up for cough and cold symptoms" },
            { "type": "Lab Report", "status": "Completed", "details": "Chest X-Ray - Cough and cold" }
          ],
          "vaccines": [
            { "name": "BCG", "date": "2020-04-12", "status": "Completed" },
            { "name": "Chickenpox", "date": "2023-12-01", "status": "Completed" }
          ],
          "labReports": [
            {
              "name": "Chest X-Ray",
              "status": "Completed",
              "details": "Chest X-Ray for cough and cold",
              "labName": "Diagnostic Care Labs",
              "testDate": "2023-12-01"
            }
          ],
          "followUps": [
            {
              "date": "2024-01-15",
              "doctor": "Dr. Anil Kumar",
              "reason": "Cough and cold review",
              "notes": "Monitor symptoms and provide treatment plan."
            }
          ]
        },
        {
          "id": 14,
          "name": "Aarav Joshi",
          "contact": "+91-9001122333",
          "parent": "Rajesh Joshi",
          "address": "Lucknow, Uttar Pradesh, India",
          "age": 5,
          "gender": "Male",
          "admissionDate": "2023-08-19",
          "lastVisitDate": "2023-11-10",
          "dueDate": "2024-01-25",
          "immediateActions": [
            { "type": "Vaccine", "status": "Pending", "details": "Mumps Vaccine - Due on 2024-01-20" },
            { "type": "Follow-up", "status": "Pending", "details": "Follow-up for speech delay check-up" },
            { "type": "Lab Report", "status": "Completed", "details": "Thyroid Test - CBC" }
          ],
          "vaccines": [
            { "name": "BCG", "date": "2020-07-25", "status": "Completed" },
            { "name": "Mumps", "date": "2023-11-28", "status": "Completed" }
          ],
          "labReports": [
            {
              "name": "Thyroid Test",
              "status": "Completed",
              "details": "Thyroid Function Test",
              "labName": "Wellness Labs",
              "testDate": "2023-10-18"
            }
          ],
          "followUps": [
            {
              "date": "2024-01-25",
              "doctor": "Dr. Pallavi Desai",
              "reason": "Speech development review and therapy",
              "notes": "Monitor speech development and provide guidance."
            }
          ]
        },
        {
          "id": 15,
          "name": "Simran Kaur",
          "contact": "+91-9756432189",
          "parent": "Navdeep Kaur",
          "address": "Amritsar, Punjab, India",
          "age": 14,
          "gender": "Female",
          "admissionDate": "2023-02-10",
          "lastVisitDate": "2023-11-25",
          "dueDate": "2024-02-05",
          "immediateActions": [
            { "type": "Vaccine", "status": "Completed", "details": "HPV Vaccine - Completed on 2023-10-15" },
            { "type": "Follow-up", "status": "Pending", "details": "Scheduled follow-up for menstrual cycle irregularities" },
            { "type": "Lab Report", "status": "Pending", "details": "Blood Test - Vitamin D and CBC" }
          ],
          "vaccines": [
            { "name": "BCG", "date": "2020-08-25", "status": "Completed" },
            { "name": "HPV", "date": "2023-10-15", "status": "Completed" }
          ],
          "labReports": [
            {
              "name": "Blood Test",
              "status": "Pending",
              "details": "Vitamin D and Complete Blood Count (CBC)",
              "labName": "Shiv Diagnostics",
              "testDate": "2024-01-15"
            }
          ],
          "followUps": [
            {
              "date": "2024-02-05",
              "doctor": "Dr. Sonia Kapoor",
              "reason": "Menstrual health and cycle review",
              "notes": "Assess menstrual cycle and provide recommendations."
            }
          ]
        },
        
            {
              "id": 16,
              "name": "Arun Kumar",
              "contact": "+91-9812348765",
              "parent": "Sunita Kumar",
              "address": "Hyderabad, Telangana, India",
              "age": 9,
              "gender": "Male",
              "admissionDate": "2023-06-10",
              "lastVisitDate": "2023-12-03",
              "dueDate": "2024-01-12",
              "immediateActions": [
                { "type": "Vaccine", "status": "Pending", "details": "Polio Vaccine - Due on 2024-01-05" },
                { "type": "Follow-up", "status": "Pending", "details": "Follow-up for knee injury recovery" },
                { "type": "Lab Report", "status": "Completed", "details": "Complete Blood Count (CBC)" }
              ],
              "vaccines": [
                { "name": "BCG", "date": "2020-07-12", "status": "Completed" },
                { "name": "Polio", "date": "2023-11-25", "status": "Completed" }
              ],
              "labReports": [
                {
                  "name": "Complete Blood Count",
                  "status": "Completed",
                  "details": "Routine blood test for overall health check-up",
                  "labName": "Advanced Diagnostics",
                  "testDate": "2023-11-20"
                }
              ],
              "followUps": [
                {
                  "date": "2024-01-12",
                  "doctor": "Dr. Rohit Mehra",
                  "reason": "Knee injury recovery",
                  "notes": "Review recovery and suggest physiotherapy if required."
                }
              ]
            },
            {
              "id": 17,
              "name": "Aditi Patel",
              "contact": "+91-9822113344",
              "parent": "Ravi Patel",
              "address": "Surat, Gujarat, India",
              "age": 11,
              "gender": "Female",
              "admissionDate": "2023-03-25",
              "lastVisitDate": "2023-12-10",
              "dueDate": "2024-02-20",
              "immediateActions": [
                { "type": "Vaccine", "status": "Completed", "details": "Hepatitis B Vaccine - Completed on 2023-12-01" },
                { "type": "Follow-up", "status": "Pending", "details": "Scheduled follow-up for cough and cold recovery" },
                { "type": "Lab Report", "status": "Completed", "details": "Chest X-Ray - Cough symptoms" }
              ],
              "vaccines": [
                { "name": "BCG", "date": "2020-03-10", "status": "Completed" },
                { "name": "Hepatitis B", "date": "2023-12-01", "status": "Completed" }
              ],
              "labReports": [
                {
                  "name": "Chest X-Ray",
                  "status": "Completed",
                  "details": "Chest X-Ray to check lung condition due to persistent cough",
                  "labName": "Care Diagnostics",
                  "testDate": "2023-12-05"
                }
              ],
              "followUps": [
                {
                  "date": "2024-02-20",
                  "doctor": "Dr. Shalini Gupta",
                  "reason": "Cough and cold follow-up",
                  "notes": "Monitor recovery and ensure no further complications."
                }
              ]
            },
            {
              "id": 18,
              "name": "Aman Singh",
              "contact": "+91-9712233445",
              "parent": "Harjeet Singh",
              "address": "Patiala, Punjab, India",
              "age": 7,
              "gender": "Male",
              "admissionDate": "2023-05-15",
              "lastVisitDate": "2023-12-10",
              "dueDate": "2024-01-18",
              "immediateActions": [
                { "type": "Vaccine", "status": "Pending", "details": "Chickenpox Vaccine - Due on 2024-01-10" },
                { "type": "Follow-up", "status": "Pending", "details": "Follow-up for knee pain and joint mobility" },
                { "type": "Lab Report", "status": "Completed", "details": "X-Ray - Joint injury" }
              ],
              "vaccines": [
                { "name": "BCG", "date": "2020-04-01", "status": "Completed" },
                { "name": "Chickenpox", "date": "2023-11-15", "status": "Completed" }
              ],
              "labReports": [
                {
                  "name": "X-Ray",
                  "status": "Completed",
                  "details": "Joint X-Ray for knee injury assessment",
                  "labName": "Diagnostic Labs",
                  "testDate": "2023-12-01"
                }
              ],
              "followUps": [
                {
                  "date": "2024-01-18",
                  "doctor": "Dr. Sandeep Sharma",
                  "reason": "Knee pain and joint mobility",
                  "notes": "Assess knee joint recovery and suggest therapy if needed."
                }
              ]
            },
            {
              "id": 19,
              "name": "Neha Yadav",
              "contact": "+91-9501122334",
              "parent": "Ravi Yadav",
              "address": "Pune, Maharashtra, India",
              "age": 6,
              "gender": "Female",
              "admissionDate": "2023-08-12",
              "lastVisitDate": "2023-11-30",
              "dueDate": "2024-02-02",
              "immediateActions": [
                { "type": "Vaccine", "status": "Completed", "details": "Measles Vaccine - Completed on 2023-11-10" },
                { "type": "Follow-up", "status": "Pending", "details": "Scheduled follow-up for fever and cold" },
                { "type": "Lab Report", "status": "Pending", "details": "Blood Test - CBC" }
              ],
              "vaccines": [
                { "name": "BCG", "date": "2020-05-22", "status": "Completed" },
                { "name": "Measles", "date": "2023-11-10", "status": "Completed" }
              ],
              "labReports": [
                {
                  "name": "Blood Test",
                  "status": "Pending",
                  "details": "Complete Blood Count (CBC) for fever investigation",
                  "labName": "MedPlus Labs",
                  "testDate": "2024-01-05"
                }
              ],
              "followUps": [
                {
                  "date": "2024-02-02",
                  "doctor": "Dr. Pooja Verma",
                  "reason": "Fever and cold check-up",
                  "notes": "Review fever symptoms and ensure no complications."
                }
              ]
            },
            {
              "id": 20,
              "name": "Kavya Sharma",
              "contact": "+91-9988776655",
              "parent": "Pankaj Sharma",
              "address": "Bhopal, Madhya Pradesh, India",
              "age": 15,
              "gender": "Female",
              "admissionDate": "2023-01-14",
              "lastVisitDate": "2023-12-12",
              "dueDate": "2024-02-15",
              "immediateActions": [
                { "type": "Vaccine", "status": "Completed", "details": "HPV Vaccine - Completed on 2023-10-10" },
                { "type": "Follow-up", "status": "Pending", "details": "Follow-up for stomach pain and acidity" },
                { "type": "Lab Report", "status": "Pending", "details": "Ultrasound - Abdominal pain check-up" }
              ],
              "vaccines": [
                { "name": "BCG", "date": "2020-03-15", "status": "Completed" },
                { "name": "HPV", "date": "2023-10-10", "status": "Completed" }
              ],
              "labReports": [
                {
                  "name": "Ultrasound",
                  "status": "Pending",
                  "details": "Abdominal ultrasound for pain assessment",
                  "labName": "City Diagnostics",
                  "testDate": "2024-01-10"
                }
              ],
              "followUps": [
                {
                  "date": "2024-02-15",
                  "doctor": "Dr. Rekha Mehta",
                  "reason": "Stomach pain and acidity",
                  "notes": "Assess symptoms and suggest treatment for acidity."
                }
              ]
            },

            
                {
                  "id": 21,
                  "name": "Shivani Reddy",
                  "contact": "+91-9991234567",
                  "parent": "Deepak Reddy",
                  "address": "Chennai, Tamil Nadu, India",
                  "age": 10,
                  "gender": "Female",
                  "admissionDate": "2023-07-20",
                  "lastVisitDate": "2023-12-12",
                  "dueDate": "2024-02-25",
                  "immediateActions": [
                    { "type": "Vaccine", "status": "Pending", "details": "Mumps Vaccine - Due on 2024-01-15" },
                    { "type": "Follow-up", "status": "Pending", "details": "Follow-up for sore throat and fever" },
                    { "type": "Lab Report", "status": "Completed", "details": "Throat culture - For sore throat investigation" }
                  ],
                  "vaccines": [
                    { "name": "BCG", "date": "2020-02-14", "status": "Completed" },
                    { "name": "Mumps", "date": "2023-12-10", "status": "Completed" }
                  ],
                  "labReports": [
                    {
                      "name": "Throat Culture",
                      "status": "Completed",
                      "details": "Culture test for sore throat bacterial infection",
                      "labName": "MedLabs Chennai",
                      "testDate": "2023-12-01"
                    }
                  ],
                  "followUps": [
                    {
                      "date": "2024-02-25",
                      "doctor": "Dr. Ramesh Kumar",
                      "reason": "Sore throat and fever follow-up",
                      "notes": "Review treatment and recovery progress."
                    }
                  ]
                },
                {
                  "id": 22,
                  "name": "Rajeev Kumar",
                  "contact": "+91-9345678901",
                  "parent": "Anjali Kumar",
                  "address": "Noida, Uttar Pradesh, India",
                  "age": 13,
                  "gender": "Male",
                  "admissionDate": "2023-02-18",
                  "lastVisitDate": "2023-12-05",
                  "dueDate": "2024-01-30",
                  "immediateActions": [
                    { "type": "Vaccine", "status": "Completed", "details": "Hepatitis A Vaccine - Completed on 2023-11-15" },
                    { "type": "Follow-up", "status": "Pending", "details": "Scheduled follow-up for asthma management" },
                    { "type": "Lab Report", "status": "Completed", "details": "Pulmonary function test for asthma" }
                  ],
                  "vaccines": [
                    { "name": "BCG", "date": "2020-01-10", "status": "Completed" },
                    { "name": "Hepatitis A", "date": "2023-11-15", "status": "Completed" }
                  ],
                  "labReports": [
                    {
                      "name": "Pulmonary Function Test",
                      "status": "Completed",
                      "details": "Test to assess lung capacity and asthma management",
                      "labName": "PFT Labs Noida",
                      "testDate": "2023-11-10"
                    }
                  ],
                  "followUps": [
                    {
                      "date": "2024-01-30",
                      "doctor": "Dr. Karan Singh",
                      "reason": "Asthma management follow-up",
                      "notes": "Evaluate asthma control and modify medications if needed."
                    }
                  ]
                },
                {
                  "id": 23,
                  "name": "Isha Mehta",
                  "contact": "+91-9898776655",
                  "parent": "Ravi Mehta",
                  "address": "Ahmedabad, Gujarat, India",
                  "age": 8,
                  "gender": "Female",
                  "admissionDate": "2023-04-05",
                  "lastVisitDate": "2023-12-10",
                  "dueDate": "2024-01-25",
                  "immediateActions": [
                    { "type": "Vaccine", "status": "Pending", "details": "Diphtheria Vaccine - Due on 2024-01-10" },
                    { "type": "Follow-up", "status": "Pending", "details": "Scheduled follow-up for eye infection" },
                    { "type": "Lab Report", "status": "Completed", "details": "Eye test for infection symptoms" }
                  ],
                  "vaccines": [
                    { "name": "BCG", "date": "2020-02-20", "status": "Completed" },
                    { "name": "Diphtheria", "date": "2023-12-10", "status": "Completed" }
                  ],
                  "labReports": [
                    {
                      "name": "Eye Test",
                      "status": "Completed",
                      "details": "Test to check eye infection status",
                      "labName": "EyeCare Ahmedabad",
                      "testDate": "2023-12-05"
                    }
                  ],
                  "followUps": [
                    {
                      "date": "2024-01-25",
                      "doctor": "Dr. Ankit Patel",
                      "reason": "Eye infection follow-up",
                      "notes": "Assess healing and advise any necessary treatments."
                    }
                  ]
                },
                {
                  "id": 24,
                  "name": "Raghav Singh",
                  "contact": "+91-9876543210",
                  "parent": "Sanjay Singh",
                  "address": "Lucknow, Uttar Pradesh, India",
                  "age": 12,
                  "gender": "Male",
                  "admissionDate": "2023-01-30",
                  "lastVisitDate": "2023-12-07",
                  "dueDate": "2024-02-10",
                  "immediateActions": [
                    { "type": "Vaccine", "status": "Completed", "details": "Meningitis Vaccine - Completed on 2023-11-20" },
                    { "type": "Follow-up", "status": "Pending", "details": "Follow-up for neck pain and stiffness" },
                    { "type": "Lab Report", "status": "Completed", "details": "MRI - Neck region" }
                  ],
                  "vaccines": [
                    { "name": "BCG", "date": "2020-03-25", "status": "Completed" },
                    { "name": "Meningitis", "date": "2023-11-20", "status": "Completed" }
                  ],
                  "labReports": [
                    {
                      "name": "MRI",
                      "status": "Completed",
                      "details": "MRI scan for neck pain investigation",
                      "labName": "HealthCare MRI",
                      "testDate": "2023-12-03"
                    }
                  ],
                  "followUps": [
                    {
                      "date": "2024-02-10",
                      "doctor": "Dr. Rajeev Singh",
                      "reason": "Neck pain and stiffness",
                      "notes": "Review MRI results and suggest treatment or therapy."
                    }
                  ]
                },
                {
                  "id": 25,
                  "name": "Priya Soni",
                  "contact": "+91-9578342100",
                  "parent": "Vinod Soni",
                  "address": "Indore, Madhya Pradesh, India",
                  "age": 14,
                  "gender": "Female",
                  "admissionDate": "2023-06-18",
                  "lastVisitDate": "2023-12-15",
                  "dueDate": "2024-02-05",
                  "immediateActions": [
                    { "type": "Vaccine", "status": "Completed", "details": "Tetanus Vaccine - Completed on 2023-11-12" },
                    { "type": "Follow-up", "status": "Pending", "details": "Follow-up for back pain" },
                    { "type": "Lab Report", "status": "Pending", "details": "X-Ray - Spine check" }
                  ],
                  "vaccines": [
                    { "name": "BCG", "date": "2020-04-11", "status": "Completed" },
                    { "name": "Tetanus", "date": "2023-11-12", "status": "Completed" }
                  ],
                  "labReports": [
                    {
                      "name": "X-Ray",
                      "status": "Pending",
                      "details": "X-Ray for spine check-up due to back pain",
                      "labName": "X-Ray Center Indore",
                      "testDate": "2024-01-20"
                    }
                  ],
                  "followUps": [
                    {
                      "date": "2024-02-05",
                      "doctor": "Dr. Neha Kapoor",
                      "reason": "Back pain follow-up",
                      "notes": "Assess back pain and suggest further action."
                    }
                  ]
                },
                {
                  "id": 26,
                  "name": "Neelam Gupta",
                  "contact": "+91-9503246173",
                  "parent": "Suresh Gupta",
                  "address": "Jaipur, Rajasthan, India",
                  "age": 6,
                  "gender": "Female",
                  "admissionDate": "2023-08-22",
                  "lastVisitDate": "2023-12-10",
                  "dueDate": "2024-01-30",
                  "immediateActions": [
                    { "type": "Vaccine", "status": "Completed", "details": "Polio Vaccine - Completed on 2023-11-01" },
                    { "type": "Follow-up", "status": "Pending", "details": "Follow-up for fever and sore throat" },
                    { "type": "Lab Report", "status": "Completed", "details": "Blood Test - CBC" }
                  ],
                  "vaccines": [
                    { "name": "BCG", "date": "2020-09-30", "status": "Completed" },
                    { "name": "Polio", "date": "2023-11-01", "status": "Completed" }
                  ],
                  "labReports": [
                    {
                      "name": "Blood Test",
                      "status": "Completed",
                      "details": "Complete Blood Count (CBC) for general health",
                      "labName": "HealthLabs Jaipur",
                      "testDate": "2023-12-05"
                    }
                  ],
                  "followUps": [
                    {
                      "date": "2024-01-30",
                      "doctor": "Dr. Swati Sharma",
                      "reason": "Fever and sore throat follow-up",
                      "notes": "Assess recovery from fever and sore throat."
                    }
                  ]
                },
                {
                  "id": 27,
                  "name": "Aarav Patel",
                  "contact": "+91-9756452134",
                  "parent": "Maya Patel",
                  "address": "Vadodara, Gujarat, India",
                  "age": 11,
                  "gender": "Male",
                  "admissionDate": "2023-07-05",
                  "lastVisitDate": "2023-12-10",
                  "dueDate": "2024-02-28",
                  "immediateActions": [
                    { "type": "Vaccine", "status": "Completed", "details": "Hepatitis B Vaccine - Completed on 2023-11-20" },
                    { "type": "Follow-up", "status": "Pending", "details": "Scheduled follow-up for chest pain and breathlessness" },
                    { "type": "Lab Report", "status": "Completed", "details": "ECG - Heart check-up" }
                  ],
                  "vaccines": [
                    { "name": "BCG", "date": "2020-08-15", "status": "Completed" },
                    { "name": "Hepatitis B", "date": "2023-11-20", "status": "Completed" }
                  ],
                  "labReports": [
                    {
                      "name": "ECG",
                      "status": "Completed",
                      "details": "Electrocardiogram to check for heart-related issues",
                      "labName": "CardioLabs Vadodara",
                      "testDate": "2023-12-03"
                    }
                  ],
                  "followUps": [
                    {
                      "date": "2024-02-28",
                      "doctor": "Dr. Rajendra Yadav",
                      "reason": "Chest pain and breathlessness",
                      "notes": "Review ECG results and suggest treatment if necessary."
                    }
                  ]
                },
                
                    {
                      "id": 28,
                      "name": "Ravi Joshi",
                      "contact": "+91-9911223344",
                      "parent": "Kiran Joshi",
                      "address": "Surat, Gujarat, India",
                      "age": 15,
                      "gender": "Male",
                      "admissionDate": "2023-03-15",
                      "lastVisitDate": "2023-12-10",
                      "dueDate": "2024-01-30",
                      "immediateActions": [
                        { "type": "Vaccine", "status": "Pending", "details": "Meningitis Vaccine - Due on 2024-01-05" },
                        { "type": "Follow-up", "status": "Pending", "details": "Follow-up for ankle sprain" },
                        { "type": "Lab Report", "status": "Completed", "details": "X-ray for ankle sprain" }
                      ],
                      "vaccines": [
                        { "name": "BCG", "date": "2020-01-20", "status": "Completed" },
                        { "name": "Meningitis", "date": "2023-12-05", "status": "Completed" }
                      ],
                      "labReports": [
                        {
                          "name": "X-ray",
                          "status": "Completed",
                          "details": "X-ray for ankle sprain",
                          "labName": "X-Ray Labs Surat",
                          "testDate": "2023-12-01"
                        }
                      ],
                      "followUps": [
                        {
                          "date": "2024-01-30",
                          "doctor": "Dr. Meenal Desai",
                          "reason": "Ankle sprain follow-up",
                          "notes": "Review recovery and mobility."
                        }
                      ]
                    },
                    {
                      "id": 29,
                      "name": "Simran Kaur",
                      "contact": "+91-9812345678",
                      "parent": "Baljeet Kaur",
                      "address": "Amritsar, Punjab, India",
                      "age": 9,
                      "gender": "Female",
                      "admissionDate": "2023-05-10",
                      "lastVisitDate": "2023-12-02",
                      "dueDate": "2024-02-12",
                      "immediateActions": [
                        { "type": "Vaccine", "status": "Pending", "details": "Chickenpox Vaccine - Due on 2024-01-15" },
                        { "type": "Follow-up", "status": "Pending", "details": "Scheduled follow-up for sore throat" },
                        { "type": "Lab Report", "status": "Completed", "details": "Blood culture - For throat infection" }
                      ],
                      "vaccines": [
                        { "name": "BCG", "date": "2020-02-28", "status": "Completed" },
                        { "name": "Chickenpox", "date": "2023-11-20", "status": "Completed" }
                      ],
                      "labReports": [
                        {
                          "name": "Blood culture",
                          "status": "Completed",
                          "details": "Culture test for throat infection",
                          "labName": "MedLabs Amritsar",
                          "testDate": "2023-12-01"
                        }
                      ],
                      "followUps": [
                        {
                          "date": "2024-02-12",
                          "doctor": "Dr. Rajinder Singh",
                          "reason": "Sore throat follow-up",
                          "notes": "Assess recovery and prescribe treatment if needed."
                        }
                      ]
                    },
                    {
                      "id": 30,
                      "name": "Aarav Reddy",
                      "contact": "+91-9900112233",
                      "parent": "Suman Reddy",
                      "address": "Hyderabad, Telangana, India",
                      "age": 12,
                      "gender": "Male",
                      "admissionDate": "2023-04-22",
                      "lastVisitDate": "2023-12-14",
                      "dueDate": "2024-02-08",
                      "immediateActions": [
                        { "type": "Vaccine", "status": "Completed", "details": "Hepatitis A Vaccine - Completed on 2023-11-10" },
                        { "type": "Follow-up", "status": "Pending", "details": "Follow-up for knee pain and swelling" },
                        { "type": "Lab Report", "status": "Pending", "details": "MRI - Knee region" }
                      ],
                      "vaccines": [
                        { "name": "BCG", "date": "2020-03-30", "status": "Completed" },
                        { "name": "Hepatitis A", "date": "2023-11-10", "status": "Completed" }
                      ],
                      "labReports": [
                        {
                          "name": "MRI",
                          "status": "Pending",
                          "details": "MRI for knee pain",
                          "labName": "MRI Center Hyderabad",
                          "testDate": "2024-01-10"
                        }
                      ],
                      "followUps": [
                        {
                          "date": "2024-02-08",
                          "doctor": "Dr. Kiran Kumar",
                          "reason": "Knee pain follow-up",
                          "notes": "Review MRI results and suggest treatment."
                        }
                      ]
                    },
                    {
                      "id": 31,
                      "name": "Kavya Jain",
                      "contact": "+91-9900778855",
                      "parent": "Prakash Jain",
                      "address": "Mumbai, Maharashtra, India",
                      "age": 10,
                      "gender": "Female",
                      "admissionDate": "2023-06-25",
                      "lastVisitDate": "2023-12-10",
                      "dueDate": "2024-02-18",
                      "immediateActions": [
                        { "type": "Vaccine", "status": "Completed", "details": "Typhoid Vaccine - Completed on 2023-11-10" },
                        { "type": "Follow-up", "status": "Pending", "details": "Follow-up for persistent cough" },
                        { "type": "Lab Report", "status": "Completed", "details": "Chest X-ray for persistent cough" }
                      ],
                      "vaccines": [
                        { "name": "BCG", "date": "2020-05-11", "status": "Completed" },
                        { "name": "Typhoid", "date": "2023-11-10", "status": "Completed" }
                      ],
                      "labReports": [
                        {
                          "name": "Chest X-ray",
                          "status": "Completed",
                          "details": "X-ray to evaluate cause of persistent cough",
                          "labName": "Radiology Center Mumbai",
                          "testDate": "2023-12-01"
                        }
                      ],
                      "followUps": [
                        {
                          "date": "2024-02-18",
                          "doctor": "Dr. Priya Thakur",
                          "reason": "Persistent cough follow-up",
                          "notes": "Evaluate progress and suggest further treatment."
                        }
                      ]
                    },
                    {
                      "id": 32,
                      "name": "Sohail Malik",
                      "contact": "+91-9711223344",
                      "parent": "Shahina Malik",
                      "address": "Delhi, India",
                      "age": 7,
                      "gender": "Male",
                      "admissionDate": "2023-02-10",
                      "lastVisitDate": "2023-12-12",
                      "dueDate": "2024-02-20",
                      "immediateActions": [
                        { "type": "Vaccine", "status": "Pending", "details": "Polio Vaccine - Due on 2024-01-25" },
                        { "type": "Follow-up", "status": "Pending", "details": "Follow-up for ear infection" },
                        { "type": "Lab Report", "status": "Completed", "details": "Ear culture - Ear infection test" }
                      ],
                      "vaccines": [
                        { "name": "BCG", "date": "2020-02-25", "status": "Completed" },
                        { "name": "Polio", "date": "2023-12-10", "status": "Completed" }
                      ],
                      "labReports": [
                        {
                          "name": "Ear culture",
                          "status": "Completed",
                          "details": "Ear culture test to check for infection",
                          "labName": "MedLabs Delhi",
                          "testDate": "2023-12-01"
                        }
                      ],
                      "followUps": [
                        {
                          "date": "2024-02-20",
                          "doctor": "Dr. Vinod Yadav",
                          "reason": "Ear infection follow-up",
                          "notes": "Assess progress and continue treatment."
                        }
                      ]
                    },
                    {
                      "id": 33,
                      "name": "Sanya Sharma",
                      "contact": "+91-9645123456",
                      "parent": "Sunil Sharma",
                      "address": "Bangalore, Karnataka, India",
                      "age": 14,
                      "gender": "Female",
                      "admissionDate": "2023-08-30",
                      "lastVisitDate": "2023-12-14",
                      "dueDate": "2024-02-22",
                      "immediateActions": [
                        { "type": "Vaccine", "status": "Pending", "details": "Rubella Vaccine - Due on 2024-01-10" },
                        { "type": "Follow-up", "status": "Pending", "details": "Scheduled follow-up for fatigue and dizziness" },
                        { "type": "Lab Report", "status": "Completed", "details": "CBC (Complete Blood Count) test" }
                      ],
                      "vaccines": [
                        { "name": "BCG", "date": "2020-07-05", "status": "Completed" },
                        { "name": "Rubella", "date": "2023-12-12", "status": "Completed" }
                      ],
                      "labReports": [
                        {
                          "name": "CBC Test",
                          "status": "Completed",
                          "details": "Blood test for general health and anemia screening",
                          "labName": "Blood Lab Bangalore",
                          "testDate": "2023-12-05"
                        }
                      ],
                      "followUps": [
                        {
                          "date": "2024-02-22",
                          "doctor": "Dr. Nisha Rani",
                          "reason": "Fatigue and dizziness follow-up",
                          "notes": "Assess symptoms and suggest treatment."
                        }
                      ]
                    },
                    {
                      "id": 34,
                      "name": "Arnav Verma",
                      "contact": "+91-9345567890",
                      "parent": "Vinita Verma",
                      "address": "Kolkata, West Bengal, India",
                      "age": 13,
                      "gender": "Male",
                      "admissionDate": "2023-01-15",
                      "lastVisitDate": "2023-11-20",
                      "dueDate": "2024-02-15",
                      "immediateActions": [
                        { "type": "Vaccine", "status": "Pending", "details": "Hepatitis B Vaccine - Due on 2024-01-05" },
                        { "type": "Follow-up", "status": "Pending", "details": "Follow-up for back pain" },
                        { "type": "Lab Report", "status": "Pending", "details": "MRI - Back pain" }
                      ],
                      "vaccines": [
                        { "name": "BCG", "date": "2020-01-10", "status": "Completed" },
                        { "name": "Hepatitis B", "date": "2023-11-10", "status": "Completed" }
                      ],
                      "labReports": [
                        {
                          "name": "MRI",
                          "status": "Pending",
                          "details": "MRI for back pain",
                          "labName": "MRI Labs Kolkata",
                          "testDate": "2024-01-15"
                        }
                      ],
                      "followUps": [
                        {
                          "date": "2024-02-15",
                          "doctor": "Dr. Gopal Singh",
                          "reason": "Back pain follow-up",
                          "notes": "Review MRI results and treatment plan."
                        }
                      ]
                    },
                    {
                      "id": 35,
                      "name": "Mehak Patel",
                      "contact": "+91-9000445566",
                      "parent": "Rajesh Patel",
                      "address": "Ahmedabad, Gujarat, India",
                      "age": 16,
                      "gender": "Female",
                      "admissionDate": "2023-03-20",
                      "lastVisitDate": "2023-12-01",
                      "dueDate": "2024-01-25",
                      "immediateActions": [
                        { "type": "Vaccine", "status": "Completed", "details": "HPV Vaccine - Completed on 2023-11-10" },
                        { "type": "Follow-up", "status": "Pending", "details": "Scheduled follow-up for leg injury" },
                        { "type": "Lab Report", "status": "Completed", "details": "MRI - Leg injury" }
                      ],
                      "vaccines": [
                        { "name": "BCG", "date": "2020-02-15", "status": "Completed" },
                        { "name": "HPV", "date": "2023-11-10", "status": "Completed" }
                      ],
                      "labReports": [
                        {
                          "name": "MRI",
                          "status": "Completed",
                          "details": "MRI for leg injury",
                          "labName": "MRI Lab Ahmedabad",
                          "testDate": "2023-11-01"
                        }
                      ],
                      "followUps": [
                        {
                          "date": "2024-01-25",
                          "doctor": "Dr. Neha Joshi",
                          "reason": "Leg injury follow-up",
                          "notes": "Evaluate recovery progress."
                        }
                      ]
                    },
                    {
                      "id": 36,
                      "name": "Ishaan Kapoor",
                      "contact": "+91-9530226677",
                      "parent": "Nisha Kapoor",
                      "address": "Chandigarh, India",
                      "age": 8,
                      "gender": "Male",
                      "admissionDate": "2023-07-12",
                      "lastVisitDate": "2023-12-13",
                      "dueDate": "2024-02-05",
                      "immediateActions": [
                        { "type": "Vaccine", "status": "Pending", "details": "Diphtheria Vaccine - Due on 2024-01-15" },
                        { "type": "Follow-up", "status": "Pending", "details": "Follow-up for fever and cough" },
                        { "type": "Lab Report", "status": "Completed", "details": "Throat culture test" }
                      ],
                      "vaccines": [
                        { "name": "BCG", "date": "2020-04-10", "status": "Completed" },
                        { "name": "Diphtheria", "date": "2023-12-15", "status": "Completed" }
                      ],
                      "labReports": [
                        {
                          "name": "Throat culture",
                          "status": "Completed",
                          "details": "Culture test to determine cause of fever and cough",
                          "labName": "Lab Med Chandigarh",
                          "testDate": "2023-12-01"
                        }
                      ],
                      "followUps": [
                        {
                          "date": "2024-02-05",
                          "doctor": "Dr. Sunil Mehra",
                          "reason": "Fever and cough follow-up",
                          "notes": "Review symptoms and suggest treatment."
                        }
                      ]
                    },
                    {
                      "id": 37,
                      "name": "Reyansh Gupta",
                      "contact": "+91-9711223344",
                      "parent": "Kiran Gupta",
                      "address": "Delhi, India",
                      "age": 7,
                      "gender": "Male",
                      "admissionDate": "2023-05-01",
                      "lastVisitDate": "2023-12-11",
                      "dueDate": "2024-02-28",
                      "immediateActions": [
                        { "type": "Vaccine", "status": "Completed", "details": "Hepatitis A Vaccine - Completed on 2023-11-05" },
                        { "type": "Follow-up", "status": "Pending", "details": "Follow-up for cold and cough" },
                        { "type": "Lab Report", "status": "Completed", "details": "Throat swab - Cold and cough" }
                      ],
                      "vaccines": [
                        { "name": "BCG", "date": "2020-06-15", "status": "Completed" },
                        { "name": "Hepatitis A", "date": "2023-11-05", "status": "Completed" }
                      ],
                      "labReports": [
                        {
                          "name": "Throat swab",
                          "status": "Completed",
                          "details": "Swab test for cold and cough",
                          "labName": "MedLabs Delhi",
                          "testDate": "2023-12-02"
                        }
                      ],
                      "followUps": [
                        {
                          "date": "2024-02-28",
                          "doctor": "Dr. Kiran Yadav",
                          "reason": "Cold and cough follow-up",
                          "notes": "Monitor progress and prescribe medication."
                        }
                      ]
                    },
                    {
                      "id": 38,
                      "name": "Ananya Dubey",
                      "contact": "+91-9888776655",
                      "parent": "Neha Dubey",
                      "address": "Lucknow, Uttar Pradesh, India",
                      "age": 10,
                      "gender": "Female",
                      "admissionDate": "2023-05-05",
                      "lastVisitDate": "2023-12-20",
                      "dueDate": "2024-01-15",
                      "immediateActions": [
                        { "type": "Vaccine", "status": "Pending", "details": "Hepatitis B Vaccine - Due on 2024-01-10" },
                        { "type": "Follow-up", "status": "Pending", "details": "Follow-up for stomach ache" },
                        { "type": "Lab Report", "status": "Completed", "details": "Ultrasound - Stomach ache test" }
                      ],
                      "vaccines": [
                        { "name": "BCG", "date": "2020-08-10", "status": "Completed" },
                        { "name": "Hepatitis B", "date": "2023-11-15", "status": "Completed" }
                      ],
                      "labReports": [
                        {
                          "name": "Ultrasound",
                          "status": "Completed",
                          "details": "Ultrasound to diagnose stomach ache",
                          "labName": "Ultrasound Center Lucknow",
                          "testDate": "2023-12-05"
                        }
                      ],
                      "followUps": [
                        {
                          "date": "2024-01-15",
                          "doctor": "Dr. Pradeep Sharma",
                          "reason": "Stomach ache follow-up",
                          "notes": "Review ultrasound results and suggest treatment."
                        }
                      ]
                    },
                    {
                        "id": 39,
                        "name": "Tanvi Sharma",
                        "contact": "+91-9999888777",
                        "parent": "Ravi Sharma",
                        "address": "Noida, Uttar Pradesh, India",
                        "age": 15,
                        "gender": "Female",
                        "admissionDate": "2023-06-18",
                        "lastVisitDate": "2023-12-10",
                        "dueDate": "2024-02-20",
                        "immediateActions": [
                          { "type": "Vaccine", "status": "Pending", "details": "Hepatitis B Vaccine - Due on 2024-01-05" },
                          { "type": "Follow-up", "status": "Pending", "details": "Follow-up for sore throat" },
                          { "type": "Lab Report", "status": "Pending", "details": "Throat culture test" }
                        ],
                        "vaccines": [
                          { "name": "BCG", "date": "2020-01-12", "status": "Completed" },
                          { "name": "Hepatitis B", "date": "2023-12-05", "status": "Completed" }
                        ],
                        "labReports": [],
                        "followUps": [
                          {
                            "date": "2024-02-20",
                            "doctor": "Dr. Neha Sharma",
                            "reason": "Sore throat follow-up",
                            "notes": "Monitor throat condition."
                          }
                        ]
                      },
                      {
                        "id": 40,
                        "name": "Yash Agarwal",
                        "contact": "+91-8055332211",
                        "parent": "Kiran Agarwal",
                        "address": "Mumbai, Maharashtra, India",
                        "age": 17,
                        "gender": "Male",
                        "admissionDate": "2023-02-10",
                        "lastVisitDate": "2023-12-05",
                        "dueDate": "2024-01-15",
                        "immediateActions": [
                          { "type": "Vaccine", "status": "Pending", "details": "Hepatitis A Vaccine - Due on 2024-01-10" },
                          { "type": "Follow-up", "status": "Pending", "details": "Follow-up for back pain" },
                          { "type": "Lab Report", "status": "Completed", "details": "X-Ray - Back pain test" }
                        ],
                        "vaccines": [
                          { "name": "BCG", "date": "2020-05-10", "status": "Completed" },
                          { "name": "Hepatitis A", "date": "2023-11-20", "status": "Completed" }
                        ],
                        "labReports": [
                          {
                            "name": "X-Ray",
                            "status": "Completed",
                            "details": "X-Ray for back pain",
                            "labName": "Radiology Clinic Mumbai",
                            "testDate": "2023-11-15"
                          }
                        ],
                        "followUps": [
                          {
                            "date": "2024-01-15",
                            "doctor": "Dr. Ramesh Sharma",
                            "reason": "Back pain follow-up",
                            "notes": "Review X-ray results and suggest treatment."
                          }
                        ]
                      },
                      {
                        "id": 41,
                        "name": "Simran Kaur",
                        "contact": "+91-7022123344",
                        "parent": "Amrit Kaur",
                        "address": "Chandigarh, India",
                        "age": 12,
                        "gender": "Female",
                        "admissionDate": "2023-04-05",
                        "lastVisitDate": "2023-12-01",
                        "dueDate": "2024-01-10",
                        "immediateActions": [
                          { "type": "Vaccine", "status": "Completed", "details": "Diphtheria Vaccine - Completed on 2023-12-01" },
                          { "type": "Follow-up", "status": "Pending", "details": "Follow-up for abdominal pain" },
                          { "type": "Lab Report", "status": "Pending", "details": "Ultrasound - Abdominal pain test" }
                        ],
                        "vaccines": [
                          { "name": "BCG", "date": "2020-02-20", "status": "Completed" },
                          { "name": "Diphtheria", "date": "2023-12-01", "status": "Completed" }
                        ],
                        "labReports": [],
                        "followUps": [
                          {
                            "date": "2024-01-10",
                            "doctor": "Dr. Kiran Mehra",
                            "reason": "Abdominal pain follow-up",
                            "notes": "Review ultrasound results and suggest treatment."
                          }
                        ]
                      },
                      {
                        "id": 42,
                        "name": "Aarav Singh",
                        "contact": "+91-7022124555",
                        "parent": "Raj Singh",
                        "address": "Mumbai, Maharashtra, India",
                        "age": 9,
                        "gender": "Male",
                        "admissionDate": "2023-03-05",
                        "lastVisitDate": "2023-11-25",
                        "dueDate": "2024-01-30",
                        "immediateActions": [
                          { "type": "Vaccine", "status": "Pending", "details": "Polio Vaccine - Due on 2024-01-15" },
                          { "type": "Follow-up", "status": "Pending", "details": "Follow-up for cough and cold" },
                          { "type": "Lab Report", "status": "Completed", "details": "Blood test - Cough and cold" }
                        ],
                        "vaccines": [
                          { "name": "BCG", "date": "2020-05-25", "status": "Completed" },
                          { "name": "Polio", "date": "2023-12-10", "status": "Completed" }
                        ],
                        "labReports": [
                          {
                            "name": "Blood test",
                            "status": "Completed",
                            "details": "Blood test for cough and cold",
                            "labName": "Med Labs Mumbai",
                            "testDate": "2023-11-15"
                          }
                        ],
                        "followUps": [
                          {
                            "date": "2024-01-30",
                            "doctor": "Dr. Ravi Patel",
                            "reason": "Cough and cold follow-up",
                            "notes": "Review symptoms and prescribe treatment."
                          }
                        ]
                      },
                      {
                        "id": 43,
                        "name": "Priya Agarwal",
                        "contact": "+91-9988774455",
                        "parent": "Raj Agarwal",
                        "address": "Delhi, India",
                        "age": 16,
                        "gender": "Female",
                        "admissionDate": "2023-06-15",
                        "lastVisitDate": "2023-11-28",
                        "dueDate": "2024-01-25",
                        "immediateActions": [
                          { "type": "Vaccine", "status": "Pending", "details": "Tetanus Vaccine - Due on 2024-01-20" },
                          { "type": "Follow-up", "status": "Pending", "details": "Follow-up for knee injury" },
                          { "type": "Lab Report", "status": "Completed", "details": "X-ray - Knee injury" }
                        ],
                        "vaccines": [
                          { "name": "BCG", "date": "2020-03-20", "status": "Completed" },
                          { "name": "Tetanus", "date": "2023-12-10", "status": "Completed" }
                        ],
                        "labReports": [
                          {
                            "name": "X-ray",
                            "status": "Completed",
                            "details": "X-ray for knee injury",
                            "labName": "X-ray Lab Delhi",
                            "testDate": "2023-12-05"
                          }
                        ],
                        "followUps": [
                          {
                            "date": "2024-01-25",
                            "doctor": "Dr. Sandeep Mehra",
                            "reason": "Knee injury follow-up",
                            "notes": "Monitor recovery progress."
                          }
                        ]
                      },
                      {
                        "id": 44,
                        "name": "Madhav Soni",
                        "contact": "+91-9008773344",
                        "parent": "Nisha Soni",
                        "address": "Jaipur, Rajasthan, India",
                        "age": 11,
                        "gender": "Male",
                        "admissionDate": "2023-04-10",
                        "lastVisitDate": "2023-12-05",
                        "dueDate": "2024-01-18",
                        "immediateActions": [
                          { "type": "Vaccine", "status": "Completed", "details": "Measles Vaccine - Completed on 2023-12-01" },
                          { "type": "Follow-up", "status": "Pending", "details": "Follow-up for chest pain" },
                          { "type": "Lab Report", "status": "Completed", "details": "ECG - Chest pain" }
                        ],
                        "vaccines": [
                          { "name": "BCG", "date": "2020-07-25", "status": "Completed" },
                          { "name": "Measles", "date": "2023-12-01", "status": "Completed" }
                        ],
                        "labReports": [
                          {
                            "name": "ECG",
                            "status": "Completed",
                            "details": "ECG for chest pain",
                            "labName": "Med Labs Jaipur",
                            "testDate": "2023-11-28"
                          }
                        ],
                        "followUps": [
                          {
                            "date": "2024-01-18",
                            "doctor": "Dr. Shyam Yadav",
                            "reason": "Chest pain follow-up",
                            "notes": "Evaluate test results and suggest treatment."
                          }
                        ]
                      },
                      {
                        "id": 45,
                        "name": "Alok Yadav",
                        "contact": "+91-8800776655",
                        "parent": "Niraj Yadav",
                        "address": "Kolkata, West Bengal, India",
                        "age": 14,
                        "gender": "Male",
                        "admissionDate": "2023-05-01",
                        "lastVisitDate": "2023-12-01",
                        "dueDate": "2024-01-25",
                        "immediateActions": [
                          { "type": "Vaccine", "status": "Pending", "details": "Hepatitis A Vaccine - Due on 2024-01-15" },
                          { "type": "Follow-up", "status": "Pending", "details": "Follow-up for neck pain" },
                          { "type": "Lab Report", "status": "Completed", "details": "X-Ray - Neck pain" }
                        ],
                        "vaccines": [
                          { "name": "BCG", "date": "2020-06-10", "status": "Completed" },
                          { "name": "Hepatitis A", "date": "2023-12-01", "status": "Completed" }
                        ],
                        "labReports": [
                          {
                            "name": "X-ray",
                            "status": "Completed",
                            "details": "X-ray for neck pain",
                            "labName": "X-ray Labs Kolkata",
                            "testDate": "2023-11-25"
                          }
                        ],
                        "followUps": [
                          {
                            "date": "2024-01-25",
                            "doctor": "Dr. Suresh Yadav",
                            "reason": "Neck pain follow-up",
                            "notes": "Review test results and treatment plan."
                          }
                        ]
                      },
                      {
                        "id": 46,
                        "name": "Riya Verma",
                        "contact": "+91-9998778899",
                        "parent": "Vikas Verma",
                        "address": "Pune, Maharashtra, India",
                        "age": 17,
                        "gender": "Female",
                        "admissionDate": "2023-03-15",
                        "lastVisitDate": "2023-12-05",
                        "dueDate": "2024-02-28",
                        "immediateActions": [
                          { "type": "Vaccine", "status": "Completed", "details": "HPV Vaccine - Completed on 2023-12-01" },
                          { "type": "Follow-up", "status": "Pending", "details": "Follow-up for shoulder injury" },
                          { "type": "Lab Report", "status": "Pending", "details": "MRI - Shoulder injury test" }
                        ],
                        "vaccines": [
                          { "name": "BCG", "date": "2020-03-10", "status": "Completed" },
                          { "name": "HPV", "date": "2023-12-01", "status": "Completed" }
                        ],
                        "labReports": [],
                        "followUps": [
                          {
                            "date": "2024-02-28",
                            "doctor": "Dr. Manish Kumar",
                            "reason": "Shoulder injury follow-up",
                            "notes": "Evaluate shoulder recovery and suggest treatment."
                          }
                        ]
                      },
                      {
                        "id": 47,
                        "name": "Shivansh Gupta",
                        "contact": "+91-9011122334",
                        "parent": "Kunal Gupta",
                        "address": "Indore, Madhya Pradesh, India",
                        "age": 10,
                        "gender": "Male",
                        "admissionDate": "2023-05-18",
                        "lastVisitDate": "2023-12-10",
                        "dueDate": "2024-01-22",
                        "immediateActions": [
                          { "type": "Vaccine", "status": "Pending", "details": "Polio Vaccine - Due on 2024-01-15" },
                          { "type": "Follow-up", "status": "Pending", "details": "Follow-up for fever and cough" },
                          { "type": "Lab Report", "status": "Completed", "details": "Blood culture - Fever and cough test" }
                        ],
                        "vaccines": [
                          { "name": "BCG", "date": "2020-05-12", "status": "Completed" },
                          { "name": "Polio", "date": "2023-12-01", "status": "Completed" }
                        ],
                        "labReports": [
                          {
                            "name": "Blood culture",
                            "status": "Completed",
                            "details": "Culture test for fever and cough",
                            "labName": "Labs Indore",
                            "testDate": "2023-11-30"
                          }
                        ],
                        "followUps": [
                          {
                            "date": "2024-01-22",
                            "doctor": "Dr. Shilpa Singh",
                            "reason": "Fever and cough follow-up",
                            "notes": "Review test results and suggest treatment."
                          }
                        ]
                      },
                        {
                          "id": 48,
                          "name": "Isha Mehta",
                          "contact": "+91-9876543210",
                          "parent": "Rajesh Mehta",
                          "address": "Hyderabad, Telangana, India",
                          "age": 9,
                          "gender": "Female",
                          "admissionDate": "2023-02-15",
                          "lastVisitDate": "2023-12-18",
                          "dueDate": "2024-02-10",
                          "immediateActions": [
                            {
                              "type": "Vaccine",
                              "status": "Pending",
                              "details": "MMR Vaccine - Scheduled for 2024-02-01"
                            },
                            {
                              "type": "Follow-up",
                              "status": "Completed",
                              "details": "Routine check-up for growth and development"
                            },
                            {
                              "type": "Lab Report",
                              "status": "Pending",
                              "details": "Urine test for routine check-up"
                            }
                          ],
                          "vaccines": [
                            {
                              "name": "BCG",
                              "date": "2020-02-25",
                              "status": "Completed"
                            },
                            {
                              "name": "DPT",
                              "date": "2023-11-20",
                              "status": "Completed",
                              "description": "Diphtheria, Pertussis, and Tetanus vaccine"
                            }
                          ],
                          "labReports": [
                            {
                              "name": "Urine Test",
                              "status": "Scheduled",
                              "details": "Routine Urinalysis",
                              "labName": "Sri Diagnostic Labs",
                              "testDate": "2024-02-05"
                            }
                          ],
                          "followUps": [
                            {
                              "date": "2023-12-15",
                              "doctor": "Dr. Sunita Reddy",
                              "reason": "General health check-up and immunization update",
                              "notes": "Review weight and height for growth monitoring."
                            }
                          ]
                        },
                        {
                          "id": 49,
                          "name": "Karan Verma",
                          "contact": "+91-9445566778",
                          "parent": "Sushila Verma",
                          "address": "Pune, Maharashtra, India",
                          "age": 7,
                          "gender": "Male",
                          "admissionDate": "2023-06-10",
                          "lastVisitDate": "2023-12-05",
                          "dueDate": "2024-01-25",
                          "immediateActions": [
                            {
                              "type": "Vaccine",
                              "status": "Completed",
                              "details": "Polio Vaccine - Completed on 2023-12-05"
                            },
                            {
                              "type": "Follow-up",
                              "status": "Pending",
                              "details": "Follow-up appointment for allergy check-up"
                            },
                            {
                              "type": "Lab Report",
                              "status": "Pending",
                              "details": "Blood test for allergy screening"
                            }
                          ],
                          "vaccines": [
                            {
                              "name": "BCG",
                              "date": "2020-03-10",
                              "status": "Completed"
                            },
                            {
                              "name": "Polio",
                              "date": "2023-12-05",
                              "status": "Completed",
                              "description": "Polio vaccination booster"
                            }
                          ],
                          "labReports": [
                            {
                              "name": "Blood Test",
                              "status": "Scheduled",
                              "details": "Routine allergy testing",
                              "labName": "Dr. Tiwari Labs",
                              "testDate": "2024-01-10"
                            }
                          ],
                          "followUps": [
                            {
                              "date": "2024-01-15",
                              "doctor": "Dr. Rahul Mehta",
                              "reason": "Allergy check-up and management",
                              "notes": "Prescribed new medication for dust allergy."
                            }
                          ]
                        },
                        {
                          "id": 50,
                          "name": "Ananya Singh",
                          "contact": "+91-9344567890",
                          "parent": "Kiran Singh",
                          "address": "Bangalore, Karnataka, India",
                          "age": 10,
                          "gender": "Female",
                          "admissionDate": "2022-09-05",
                          "lastVisitDate": "2023-12-12",
                          "dueDate": "2024-01-18",
                          "immediateActions": [
                            {
                              "type": "Vaccine",
                              "status": "Overdue",
                              "details": "Hepatitis A Vaccine - Due since 2023-12-01"
                            },
                            {
                              "type": "Follow-up",
                              "status": "Pending",
                              "details": "Follow-up for routine check-up and immunization update"
                            },
                            {
                              "type": "Lab Report",
                              "status": "Completed",
                              "details": "Blood test for Vitamin D deficiency"
                            }
                          ],
                          "vaccines": [
                            {
                              "name": "BCG",
                              "date": "2020-08-15",
                              "status": "Completed"
                            },
                            {
                              "name": "Hepatitis A",
                              "date": "2023-06-30",
                              "status": "Completed",
                              "description": "Hepatitis A vaccine"
                            }
                          ],
                          "labReports": [
                            {
                              "name": "Blood Test",
                              "status": "Completed",
                              "details": "Vitamin D deficiency check",
                              "labName": "MediCare Labs",
                              "testDate": "2023-12-10"
                            }
                          ],
                          "followUps": [
                            {
                              "date": "2024-01-18",
                              "doctor": "Dr. Shweta Kapoor",
                              "reason": "General health check-up and immunization review",
                              "notes": "Monitor Vitamin D levels and general health progress."
                            }
                          ]
                        }
                      
                      
                  
                  
              
              
          
          
      
      
      
      
  ]