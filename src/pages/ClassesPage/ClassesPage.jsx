import './ClassesPage.css';
import { useContext, Fragment } from 'react';
import Class from '../../components/Class/Class';
import AddClassForm from '../../components/AddClassForm/AddClassForm';
import Button from '../../components/Button/Button';
import CheckInContext from '../../context/CheckInContext';
import useClasses from '../../hooks/useClasses';

const ClassesPage = () => {
  const { classes, addClass, removeClass } = useClasses();
  const { checkInObject, checkInTime, handleCheckInObject } = useContext(CheckInContext);

  const handleSelectClass = (selectedClass) => {
    handleCheckInObject(selectedClass);
  };

  const handleAddClass = (newClass) => {
    addClass(newClass);
  };

  const handleDeleteClass = (classId) => {
    if (window.confirm('Are you sure you want to delete this class?')) {
      removeClass(classId);
    }
  };

  return (
    <div className="classes__page">
      <div className="classes__header">
        <Button 
          buttonType="primary"
          popovertarget="add-class-popover"
        >
          Add Class
        </Button>
      </div>

      <AddClassForm onAddClass={handleAddClass} />

      <div className="classes__list">
        {classes.map((cls, index) => (
          <Fragment key={cls.id}>
            <Class
              classTime={cls.time}
              classCourse={cls.course}
              classLocation={cls.location}
              buttonText={checkInObject?.id === cls.id ? 'Selected' : 'Select'}
              buttonType={checkInObject?.id === cls.id ? 'disabled' : ''}
              classStatus={checkInObject?.id === cls.id && checkInTime}
              onSelect={() => handleSelectClass(cls)}
              onDelete={() => handleDeleteClass(cls.id)}
            />
            {index < classes.length - 1 && (
              <div className="classes__list-divider" />
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ClassesPage;
