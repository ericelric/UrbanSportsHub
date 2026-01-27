import { useContext, useState, useEffect } from "react";
import ProfileContext from "../../context/ProfileContext";
import CheckInContext from "../../context/CheckInContext";
import ModalProfilePicture from "../ModalProfilePicture/ModalProfilePicture";
import { formatDateAndTime, formatTimer } from "../../utils/timeUtils";
import { IoCloseOutline, IoShareSocialOutline } from "react-icons/io5";
import { BsBatteryHalf, BsReception4 } from "react-icons/bs";
import { FaLocationDot, FaBottleWater, FaTag } from "react-icons/fa6";
import "./Modal.css";

const Modal = ({ onClose }) => {
  const { memberName, memberId } = useContext(ProfileContext);
  const { checkInTime, checkInObject, setAndStoreCheckInTime } =
    useContext(CheckInContext);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  // The check-in time is set when the modal is opened for the first time
  useEffect(() => {
    if (!checkInTime) {
      setAndStoreCheckInTime();
    }
  }, [checkInTime, setAndStoreCheckInTime]);

  // Timer logic
  useEffect(() => {
    if (!checkInTime) return;

    const timer = setInterval(() => {
      setTimeElapsed(Math.floor((new Date() - checkInTime) / 1000));
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [checkInTime]);

  const formatCurrentTime = (date) => {
    return date.toLocaleTimeString("de-DE", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      <div className="modal__overlay"></div>
      <div className="modal">
        <div className="modal__header">
          <div className="modal__header-time">
            {formatCurrentTime(currentTime)}
          </div>
          <div className="modal__header-icons">
            <div className="modal__header-signal">
              <BsReception4 className="modal__header-signal-full" />
              <BsReception4 className="modal__header-signal-medium" />
            </div>
            <BsBatteryHalf className="modal__header-battery" />
          </div>
        </div>

        <div className="modal__button-wrapper">
          <button
            className="modal__icon modal__icon--close"
            aria-label="Close check-in"
            onClick={onClose}
          >
            <IoCloseOutline />
          </button>
          <div
            className="modal__icon modal__icon--share"
            aria-label="Share check-in"
          >
            <IoShareSocialOutline />
          </div>
        </div>

        <div className="modal__content">
          <ModalProfilePicture />

          <section className="modal__details">
            <p className="modal__name-id">
              {memberName} · {memberId}
            </p>
            <p className="modal__checkin-time">
              Check-in: {checkInTime && formatDateAndTime(checkInTime)} · {formatTimer(timeElapsed)}
            </p>
          </section>

          <div className="modal__info-list">
            <div className="modal__info-row">
              <FaLocationDot className="modal__info-icon" />
              <span className="modal__info-label">Venue</span>
              <span className="modal__info-value">{checkInObject.location}</span>
            </div>
            <div className="modal__info-row">
              <FaBottleWater className="modal__info-icon modal__info-icon--activity" />
              <span className="modal__info-label">Activity</span>
              <span className="modal__info-value">{checkInObject.course}</span>
            </div>
            {checkInObject.category && (
              <div className="modal__info-row">
                <FaTag className="modal__info-icon modal__info-icon--category" />
                <span className="modal__info-label">Category</span>
                <span className="modal__info-value">{checkInObject.category}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
