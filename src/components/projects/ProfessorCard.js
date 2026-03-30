import React from 'react';
import { FaUserTie, FaEnvelope, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import { useActivity } from '../../context/ActivityContext';

const ProfessorCard = ({ professor }) => {
  const { addActivity } = useActivity();

  const handleRequest = () => {
    addActivity(
      `Collaboration Request sent to ${professor.name}`, 
      `Requested to join project in ${professor.department} under ${professor.school}`, 
      'pending'
    );
    alert(`Collaboration request successfully sent to ${professor.name}!\n\n(This action has been logged in your Dashboard's Activity Feed)`);
  };

  const handleDM = () => {
    alert(`Opening Chat with ${professor.name}...`);
  };

  return (
    <div className="prof-card">
      <div className="prof-card-header">
        <div className="prof-avatar">
          <FaUserTie />
        </div>
        <div className="prof-title">
          <h3>{professor.name}</h3>
          <p className="school-badge">{professor.school} - {professor.department}</p>
        </div>
      </div>

      <div className="prof-details">
        <p><FaEnvelope className="detail-icon" /> {professor.email}</p>
        <p><FaMapMarkerAlt className="detail-icon" /> Cabin: {professor.cabin}</p>
      </div>

      <div className="prof-expertise">
        <h4><FaGraduationCap className="detail-icon" /> Expertise:</h4>
        <div className="expertise-tags">
          {professor.expertise.map((skill, index) => (
            <span key={index} className="tag">{skill}</span>
          ))}
        </div>
      </div>

      <div className="prof-actions">
        <button className="btn-request" onClick={handleRequest}>Request Collaboration</button>
        <button className="btn-dm" onClick={handleDM}>DM</button>
      </div>
    </div>
  );
};

export default ProfessorCard;
