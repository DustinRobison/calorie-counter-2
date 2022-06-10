import React, { useState } from "react";
import { format, isValid } from "date-fns";

interface AddFoodModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const formatDate = (date: Date): string => {
  return format(date, "yyyy-LL-dd") + "T" + format(date, "HH:mm");
};
const parseDate = (date: string): Date => {
  try {
    const inputDate = new Date(date);
    if (isValid(inputDate)) return inputDate;
    else {
      return new Date();
    }
  } catch (e) {
    return new Date();
  }
};

const parseNumber = (number: string): number => {
  try {
    return parseInt(number);
  } catch (e) {
    return 0;
  }
};

const AddFoodModal = ({ isOpen, onClose }: AddFoodModalProps) => {
  const [inputDate, setInputDate] = useState<Date>(new Date());
  const [inputName, setInputName] = useState<string>("");
  const [inputCalories, setInputCalories] = useState<number>(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputDate);
    console.log(inputName);
    console.log(inputCalories);

    onClose();
    resetForm();
  };

  const resetForm = () => {
    setInputDate(new Date());
    setInputName("");
    setInputCalories(0);
  };

  return (
    <div className={`modal ${isOpen ? "is-active" : ""} is-clipped`}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Add Food</p>
          <button
            className="delete"
            aria-label="close"
            onClick={onClose}
          ></button>
        </header>
        <form name="add-food" onSubmit={handleSubmit}>
          <section className="modal-card-body">
            {/* Date */}
            <div className="field">
              <label className="label">Date:</label>
              <div className="control">
                <input
                  className="input"
                  type="datetime-local"
                  value={formatDate(inputDate)}
                  onChange={(e) => setInputDate(parseDate(e.target.value))}
                  required={true}
                />
              </div>
            </div>
            {/* Name */}
            <div className="field">
              <label className="label">Food:</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="eg. pasta"
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  required={true}
                />
              </div>
            </div>
            {/* Date */}
            <div className="field">
              <label className="label">Calories:</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  pattern="[0-9]*"
                  value={inputCalories}
                  onChange={(e) =>
                    setInputCalories(parseNumber(e.target.value))
                  }
                  required={true}
                />
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success">Save changes</button>
            <button className="button" onClick={onClose}>
              Cancel
            </button>
          </footer>
        </form>
      </div>
    </div>
  );
};

export default AddFoodModal;
