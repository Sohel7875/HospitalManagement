import React from 'react';
import { Table } from 'react-bootstrap';
import PatientRow from '../PatientRow/PatientRow';
import styles from './PatientTable.module.css';

const PatientTable = ({ data, handleShowModal }) => {
  return (
    <div className={styles.table_container}>
      <Table striped bordered hover responsive className={styles.table}>
        <thead className="table-primary">
          <tr>
            <th>Patient Name</th>
            <th>Contact</th>
            <th>Parent</th>
            <th>Immediate Actions</th>
            <th>Due Date</th>
            <th>Action</th>
          </tr>
        </thead>
       
        <tbody>
          {data.map((patient) => (
            <PatientRow
              key={patient.id}
              patient={patient}
              handleShowModal={handleShowModal}
            />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default PatientTable;
