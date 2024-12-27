import React, { useState } from 'react';
import { Modal, Button, Table, Form } from 'react-bootstrap';
import styles from "./PatientDetails.module.css";
import CustomAlert from '../CustomAlert/CustomAlert';

const PatientModal = ({ show, handleClose, modalType, modalData, handleUpdate, setSampleData }) => {
  const [editData, setEditData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const getImmediateActions = () => {
    const actions = [];

    modalData.vaccines
      .filter((vaccine) => vaccine.status === "Overdue")
      .forEach((vaccine) =>
        actions.push({
          type: "Vaccine",
          status: "Overdue",
          details: `${vaccine.name} - Due since ${vaccine.date}. ${vaccine.description || ""}`,
        })
      );

    modalData.labReports
      .filter((report) => report.status === "Pending")
      .forEach((report) =>
        actions.push({
          type: "Lab Report",
          status: "Pending",
          details: `${report.name} - ${report.details} (${report.labName}, ${report.testDate})`,
        })
      );

    modalData.followUps.forEach((followUp) =>
      actions.push({
        type: "Follow-up",
        status: "Pending",
        details: `${followUp.reason} with ${followUp.doctor} on ${followUp.date}. ${followUp.notes}`,
      })
    );

    return actions;
  };

  const handleInputChange = (e, index, key) => {
    const updatedData = [...editData];
    updatedData[index][key] = e.target.value;
    setEditData(updatedData);
  };

  const handleAddRow = (fields) => {
    const newRow = fields.reduce((acc, field) => {
      acc[field.key] = '';
      return acc;
    }, {});
    setEditData([...editData, newRow]);
  };

  const handleSaveChanges = () => {
    const invalidRows = editData.filter((item) =>
      Object.values(item).some((value) => value === "" || value === null)
    );

    if (invalidRows.length > 0) {
      setAlertMessage("Please ensure all fields are filled out before saving.");
      setShowAlert(true);
      return;
    }

    if (handleUpdate) {
      handleUpdate(modalType, editData);
    }
    setIsEditing(false);
    setEditData([]);
  };



  const handleCancelChanges = () => {
    setIsEditing(false);
    setEditData([]);
  };

  const startEditing = (data) => {
    setIsEditing(true);
    setEditData(data);
  };

  const renderUpdateForm = (fields) => (
    <>
      <Table bordered hover responsive>
        <thead>
          <tr>
            {fields.map((field, index) => (
              <th key={index}>{field.label}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {editData.map((item, index) => (
            <tr key={index}>
              {fields.map((field, fieldIndex) => (
                <td key={fieldIndex}>
                  {field.key === "status" ? (

                    <Form.Select
                      value={item[field.key]}
                      onChange={(e) => handleInputChange(e, index, field.key)}
                    >
                      <option value="Completed">Completed</option>

                      {modalType === 'vaccines' ? <option value="Overdue">Overdue</option> :
                        <option value="Pending">Pending</option>}
                    </Form.Select>
                  ) : (field.key === "date" || field.key === "testDate") ? (
                    <Form.Control
                      type="date"
                      value={item[field.key]}
                      onChange={(e) => handleInputChange(e, index, field.key)}
                    />
                  ) : (
                    <Form.Control
                      type="text"
                      value={item[field.key]}
                      onChange={(e) => handleInputChange(e, index, field.key)}
                    />
                  )}
                </td>
              ))}
              <td>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() =>
                    setEditData(editData.filter((_, i) => i !== index))
                  }
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button
        variant="primary"
        onClick={() => handleAddRow(fields)}
      >
        Add New Row
      </Button>
    </>
  );


  const renderData = (data, fields, type) => (
    <>
      <Table bordered hover responsive>
        <thead>
          <tr>
            {fields.map((field, index) => (
              <th key={index}>{field.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {fields.map((field, fieldIndex) => (
                <td key={fieldIndex}>{item[field.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="primary" onClick={() => startEditing(data)}>
        Update {type}
      </Button>
    </>
  );

  const renderFollowUps = () => {
    const fields = [
      { key: 'date', label: 'Date' },
      { key: 'doctor', label: 'Doctor' },
      { key: 'reason', label: 'Reason' },
      { key: 'notes', label: 'Notes' },
    ];
    return isEditing
      ? renderUpdateForm(fields)
      : renderData(modalData.followUps, fields, 'FollowUps');
  };

  const renderVaccines = () => {
    const fields = [
      { key: 'name', label: 'Vaccine' },
      { key: 'status', label: 'Status' },
      { key: 'date', label: 'Date' },
      { key: 'description', label: 'Description' },
    ];
    return isEditing
      ? renderUpdateForm(fields)
      : renderData(modalData.vaccines, fields, 'Vaccines');
  };

  const renderLabReports = () => {
    const fields = [
      { key: 'name', label: 'Test Name' },
      { key: 'status', label: 'Status' },
      { key: 'details', label: 'Details' },
      { key: 'labName', label: 'Lab Name' },
      { key: 'testDate', label: 'Test Date' },
    ];
    return isEditing
      ? renderUpdateForm(fields)
      : renderData(modalData.labReports, fields, 'LabReports');
  };

  const renderPatientDetails = () => (
    <div>
      <h5 className={styles.sectionHeader}>General Information</h5>
      <div className={styles.infoRow}>
        <span className={styles.label}>Name:</span>
        <span className={styles.value}>{modalData?.name}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>Age:</span>
        <span className={styles.value}>{modalData?.age}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>Gender:</span>
        <span className={styles.value}>{modalData?.gender}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>Parent:</span>
        <span className={styles.value}>{modalData?.parent}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>Contact:</span>
        <span className={styles.value}>{modalData?.contact}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>Address:</span>
        <span className={styles.value}>{modalData?.address}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>Admission Date:</span>
        <span className={styles.value}>{modalData?.admissionDate}</span>
      </div>
      <div className={styles.infoRow}>
        <span className={styles.label}>Last Visit Date:</span>
        <span className={styles.value}>{modalData?.lastVisitDate}</span>
      </div>
    </div>
  );

  const renderImmediateActions = () => {
    const actions = getImmediateActions();

    return (
      <div className={styles.section}>
        <h5 className={styles.sectionHeader}>Immediate Actions</h5>
        {actions.length > 0 ? (
          <ul className={styles.actionList}>
            {actions.map((action, index) => (
              <li key={index} className={styles.actionItem}>
                <div>
                  <span className={styles.actionType}>{action.type}:</span>{" "}
                  <span className={styles.actionDetails}>{action.details}</span>
                </div>
                <span
                  className={styles.actionStatus}
                  style={{
                    color:
                      action.status === "Overdue"
                        ? "#D80C2F"
                        : "#FFD317",
                  }}
                >
                  {action.status}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.noActions}>No immediate actions required.</p>
        )}
      </div>
    );
  };



  const renderModalContent = () => {
    switch (modalType) {
      case 'Patient Details':
        return (
          <div className={styles.container}>
            {renderPatientDetails()}
            {renderImmediateActions()}
          </div>
        );
      case 'followUps':
        return renderFollowUps();
      case 'vaccines':
        return renderVaccines();
      case 'labReports':
        return renderLabReports();
      default:
        return <p>No data available for this view.</p>;
    }
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton onHide={() => {
        setEditData([]);
        setIsEditing(false);
        setShowAlert(false);
        setAlertMessage("");
      }}>
        <Modal.Title>{modalType}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{renderModalContent()}
        {showAlert && <CustomAlert
          show={showAlert}
          message={alertMessage}
          onClose={() => setShowAlert(false)}
        />}
      </Modal.Body>
      {isEditing && (
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelChanges}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save
          </Button>
        </Modal.Footer>
      )}
      {!isEditing && (
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      )}
    </Modal>
  );
};

export default PatientModal; 