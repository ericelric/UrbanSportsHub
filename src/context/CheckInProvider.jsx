import { useState, useEffect } from 'react';
import CheckInContext from './CheckInContext';

const CheckInProvider = ({ children }) => {
  // State to track the check-in time
  const [checkInTime, setCheckInTime] = useState(() => {
    const storedTime = localStorage.getItem('checkInTime');
    if (storedTime) {
      const parsedTime = new Date(storedTime);
      if (!isNaN(parsedTime)) return parsedTime;
    }

    return null;
  });

  // State to track the selected check-in object (class info)
  const [checkInObject, setCheckInObject] = useState(() => {
    const storedCheckIn = localStorage.getItem('checkInObject');
    return storedCheckIn ? JSON.parse(storedCheckIn) : null;
  });

  // Whenever checkInObject updates, store it in localStorage
  useEffect(() => {
    if (checkInObject) {
      localStorage.setItem('checkInObject', JSON.stringify(checkInObject));
    } else {
      localStorage.removeItem('checkInObject');
    }
  }, [checkInObject]);

  // Function to update check-in time and store it in localStorage
  const updateCheckInTime = (time) => {
    setCheckInTime(time);
    if (time) {
      localStorage.setItem('checkInTime', time.toISOString());
    } else {
      localStorage.removeItem('checkInTime');
    }
  };

  // Function to set and store the current time as check-in time
  const setAndStoreCheckInTime = () => updateCheckInTime(new Date());

  // Function to update the selected check-in class
  const handleCheckInObject = (newCheckInObject) => {
    setCheckInObject(newCheckInObject);
  };

  // Function to reset check-in data (clear selected class and check-in time)
  const resetCheckIn = () => {
    setCheckInObject(null);
    updateCheckInTime(null);
  };

  return (
    <CheckInContext.Provider
      value={{
        checkInTime,
        checkInObject,
        setAndStoreCheckInTime,
        handleCheckInObject,
        resetCheckIn,
      }}
    >
      {children}
    </CheckInContext.Provider>
  );
};

export default CheckInProvider;
