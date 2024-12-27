
import React, { useState } from 'react';
import Header from '../components/Header/Header';
import PatientTable from '../components/PatientTable/PatientTable';
import PatientModal from '../components/PatientModal/PatientModal';
import SearchBar from '../components/SearchBar/SearchBar';
import { patientData } from '../utils/Patientdata';

const Homepage = () => {

  const [sampleData, setSampleData] = useState(patientData)
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [modalType, setModalType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleShowModal = (type, data) => {
    setModalType(type);
    setModalData(data);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalData(null);
    setModalType('');
  };
  const handleUpdatePatient = (modalType, updatedData) => {
    setSampleData((prevData) =>
      prevData.map((patient) => {
        if (patient.id === modalData.id) {
          return {
            ...patient,
            [modalType]: updatedData
          }
        } else {
          return patient
        }

      })
    );
    handleCloseModal();
  };


  const filteredData = sampleData.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <Header />

     <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}  />
      <PatientTable data={filteredData} handleShowModal={handleShowModal} />
      <PatientModal
        show={showModal}
        handleClose={handleCloseModal}
        modalType={modalType}
        modalData={modalData}
        handleUpdate={handleUpdatePatient}
        setSampleData={setSampleData}
      />
    </div>
  );
};

export default Homepage;