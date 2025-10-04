import Button from '../Button/Button';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { cva } from 'class-variance-authority';
import './Class.css';

const classCardVariants = cva('class', {
  variants: {
    variant: {
      default: '',
      compact: 'class--compact',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const Class = ({
  classTime,
  classCourse,
  classLocation,
  classStatus = null,
  buttonType,
  buttonText,
  onSelect,
  onDelete,
  variant = 'default',
}) => {
  return (
    <div className={classCardVariants({ variant })}>
      <div className="class__details">
        <div className="class__time">{classTime}</div>
        <div className="class__details-column">
          <div className="class__course">{classCourse}</div>
          <div className="class__location">{classLocation}</div>
          <div
            className={`class__status ${
              classStatus ? 'class__status--checked-in' : ''
            }`.trim()}
          >
            {classStatus ? (
              <>
                <span className="class__status-icon">
                  <FaRegCircleCheck />
                </span>
                Checked in
              </>
            ) : (
              'Not checked in'
            )}
          </div>
        </div>
      </div>

      <div className="class__action">
        <Button buttonType={buttonType} onClick={onSelect}>
          {buttonText}
        </Button>
        {variant === 'default' && (
          <div className="class__delete">
            <Button
              buttonType="trash"
              onClick={onDelete}
              title="Delete class from list"
              aria-label="Delete class from list">
                DEL
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Class;
