import { useState, useEffect } from 'react';

const CLASSES_STORAGE_KEY = 'classList';

const defaultClasses = [
  {
    id: 1,
    course: "Example Workout",
    location: "Example Location",
    time: "10:00"
  },
];

const useClasses = () => {
  const [classes, setClasses] = useState(() => {
    const saved = localStorage.getItem(CLASSES_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      return parsed.length > 0 ? parsed : defaultClasses;
    }
    return defaultClasses;
  });

  useEffect(() => {
    localStorage.setItem(CLASSES_STORAGE_KEY, JSON.stringify(classes));
  }, [classes]);

  const addClass = (newClass) => {
    const classWithId = {
      ...newClass,
      id: Date.now()
    };
    setClasses(prevClasses => [...prevClasses, classWithId]);
  };

  const removeClass = (classId) => {
    setClasses(prevClasses => prevClasses.filter(cls => cls.id !== classId));
  };

  return {
    classes,
    addClass,
    removeClass,
  };
};

export default useClasses;
