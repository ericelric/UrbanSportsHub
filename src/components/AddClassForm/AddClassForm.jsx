import { useState } from 'react';
import Button from '../Button/Button';
import './AddClassForm.css';

const AddClassForm = ({ onAddClass }) => {
  const [formData, setFormData] = useState({
    course: '',
    location: '',
    time: '05:00'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.course.trim() || !formData.location.trim() || !formData.time.trim()) {
      alert('Please fill in all fields');
      return;
    }

    onAddClass(formData);
    setFormData({ course: '', location: '', time: '' });
  };

  return (
    <div className="add-class-form" id='my-popover' popover="auto">
      <h3 className="add-class-form__title">Add New Class</h3>
      <form onSubmit={handleSubmit}>
        <div className="add-class-form__group">
          <label className="add-class-form__label" htmlFor="course">Course Name:</label>
          <input
            className="add-class-form__input"
            type="text"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleInputChange}
            placeholder="e.g., Yoga Flow"
            required
          />
        </div>

        <div className="add-class-form__group">
          <label className="add-class-form__label" htmlFor="location">Location:</label>
          <input
            className="add-class-form__input"
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="e.g., Central Park"
            required
          />
        </div>

        <div className="add-class-form__group">
          <label className="add-class-form__label" htmlFor="time">Time:</label>
          <input
            className="add-class-form__input"
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="add-class-form__actions">
          <Button type="submit" buttonType="primary">
            Add Class
          </Button>
          <Button type="button" buttonType="secondary" popovertarget="my-popover" popovertargetaction="hide">
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddClassForm;
