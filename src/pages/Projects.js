import React, { useState, useEffect } from 'react';
import FilterSidebar from '../components/projects/FilterSidebar';
import ProfessorCard from '../components/projects/ProfessorCard';
import profData from '../data/professors.json';
import '../components/projects/Projects.css';

const Projects = () => {
  const [professors, setProfessors] = useState([]);
  const [filteredProfs, setFilteredProfs] = useState([]);
  
  // Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [department, setDepartment] = useState('All');
  const [school, setSchool] = useState('All');

  useEffect(() => {
    // Load data
    setProfessors(profData.professors);
    setFilteredProfs(profData.professors);
  }, []);

  useEffect(() => {
    // Apply filters whenever state changes
    let result = professors;

    if (searchTerm) {
      result = result.filter(prof => 
        prof.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (department !== 'All') {
      result = result.filter(prof => prof.department === department);
    }

    if (school !== 'All') {
      result = result.filter(prof => prof.school === school);
    }

    setFilteredProfs(result);
  }, [searchTerm, department, school, professors]);

  return (
    <div className="projects-layout">
      {/* Left Main Content */}
      <div className="projects-main">
        <div className="projects-header">
          <h1>Project Collaboration</h1>
          <p>Find the right faculty guide for your next big idea or research paper.</p>
        </div>

        {filteredProfs.length > 0 ? (
          <div className="professors-grid">
            {filteredProfs.map(prof => (
              <ProfessorCard key={prof.id} professor={prof} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>No professors found matching your filters. Try adjusting your search.</p>
          </div>
        )}
      </div>

      {/* Right Sidebar Filter Component */}
      <FilterSidebar 
        searchTerm={searchTerm} setSearchTerm={setSearchTerm}
        department={department} setDepartment={setDepartment}
        school={school} setSchool={setSchool}
      />
    </div>
  );
};

export default Projects;
