import React from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';

const FilterSidebar = ({ searchTerm, setSearchTerm, department, setDepartment, school, setSchool }) => {
  return (
    <div className="filter-sidebar">
      <h3><FaFilter /> Filters & Search</h3>

      <div className="filter-group">
        <label>Search by Faculty Name</label>
        <div className="search-input-wrapper">
          <FaSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="e.g. Dr. Ananya" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="filter-group">
        <label>Department</label>
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          <option value="All">All Departments</option>
          <option value="CSE">CSE (Computer Science)</option>
          <option value="ECE">ECE (Electronics)</option>
          <option value="Mechanical">Mechanical</option>
          <option value="Chemical">Chemical</option>
        </select>
      </div>

      <div className="filter-group">
        <label>School</label>
        <select value={school} onChange={(e) => setSchool(e.target.value)}>
          <option value="All">All Schools</option>
          <option value="SCOPE">SCOPE</option>
          <option value="SENSE">SENSE</option>
          <option value="SMEC">SMEC</option>
          <option value="SCHEME">SCHEME</option>
        </select>
      </div>
      
      <button 
        className="clear-btn"
        onClick={() => {
          setSearchTerm('');
          setDepartment('All');
          setSchool('All');
        }}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterSidebar;
