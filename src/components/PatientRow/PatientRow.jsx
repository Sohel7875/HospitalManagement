import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './PatientRow.module.css'

const PatientRow = ({ patient, handleShowModal }) => {
  const renderImmediateActions = () => {
    const urgentActions = [];

    patient.vaccines?.forEach((vaccine) => {
      if (vaccine.status === 'Overdue') {
        urgentActions.push({
          type: 'Vaccine',
          status: vaccine.status,
          details: `${vaccine.name} - Due since ${vaccine.date}`,
        });
      }
    });

    patient.followUps?.forEach((followUp) => {
      if (followUp.status === 'Pending') {
        urgentActions.push({
          type: 'Follow-up',
          status: followUp.status,
          details: `Scheduled follow-up with Dr. ${followUp.doctor} on ${followUp.date}`,
        });
      }
    });

    patient.labReports?.forEach((report) => {
      if (report.status === 'Pending') {
        urgentActions.push({
          type: 'Lab Report',
          status: report.status,
          details: `${report.name} - Pending (${report.testDate})`,
        });
      }
    });

    return urgentActions;
  };

  const immediateActions = renderImmediateActions();

  return (
    <tr>
      <td className="align-middle" data-label="Patient Name">
        <div className="d-flex align-items-center justify-content-center">
          <a href="#" onClick={() => handleShowModal('Patient Details', patient)}>
            {patient.name}
          </a>
        </div>
      </td>
      <td className="align-middle" data-label="Contact" >
        <div className="d-flex align-items-center justify-content-center">
          {patient.contact}
        </div>
      </td>
      <td className="align-middle" data-label="Parent">
        <div className="d-flex align-items-center justify-content-center">
          {patient.parent}
        </div>
      </td>
      <td className="align-middle" data-label="Immediate Actions">
        <div className="d-flex align-items-center justify-content-center">
          <div className={`d-flex flex-column ${styles.immediateActions}`} >
            {immediateActions.map((action, index) => (
              <div key={index} className="mb-2 p-2 border rounded">
                <p className="mb-1">
                  <strong>Type:</strong> {action?.type}
                </p>
                <p className="mb-1">
                  <strong>Status:</strong>{' '}
                  <span
                    className={`badge ${action?.status === 'Overdue' ? 'bg-danger' : 'bg-warning text-dark'
                      }`}
                  >
                    {action?.status}
                  </span>
                </p>
                <p>{action?.details}</p>
              </div>
            ))}
          </div>

        </div>
      </td>
      <td className="align-middle" data-label="Due Date">
        <div className="d-flex align-items-center justify-content-center">
          {patient.dueDate}
        </div>
      </td>
      <td className="align-middle" data-label="Action">
        <div className="d-flex align-items-center justify-content-center">
          <div className="d-flex flex-wrap gap-2">
            <Button
              variant="primary"
              size="sm"
              className="px-3"
              onClick={() => handleShowModal('vaccines', patient)}
            >
              <i className="bi bi-syringe"></i> Vaccines
            </Button>
            <Button
              variant="success"
              size="sm"
              className="px-3"
              onClick={() => handleShowModal('followUps', patient)}
            >
              <i className="bi bi-calendar-check"></i> Follow-up
            </Button>
            <Button
              variant="warning"
              size="sm"
              className="px-3 text-dark"
              onClick={() => handleShowModal('labReports', patient)}
            >
              <i className="bi bi-file-medical"></i> Lab Tests
            </Button>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default PatientRow;
