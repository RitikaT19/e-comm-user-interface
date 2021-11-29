// Bhavana Gupta - [18/09/2021]
import React, { useState, useRef, useEffect } from "react";
import "../../styles/drop-down.css";
import downArrow from "../../../assets/icons/down-arrow.svg";
interface Props {
  options?: Array<any>;
  label: string;
  id: string;
  value?: string;
  handleChange: (value: string) => void;
  showLabel: boolean;
  noOptionsText?: string;
}

export const DropDown: React.FC<Props> = ({
  value,
  options,
  id,
  label,
  handleChange,
  showLabel,
  noOptionsText,
}) => {
  //showOptions variable and setShowOptions method for showing/hiding the Options
  const [showOptions, setShowOptions] = useState<boolean>(false);
  var dropDownOptions: Array<string> = [];
  // for received options
  if (options) {
    dropDownOptions = options;
  } else {
    // when no options were send to dropdown components
    //  and no valid [dropDownFor] parameter was received
    dropDownOptions = ["Options unavailable"];
  }

  // creating a mutable ref object using useRef
  // to handle hiding the drop-down options
  // when user clicks outside the drop-down options
  const wrapperRef = useRef<any>(null);

  // useEffect to render the component with the new values
  // based on the ref parameter passed to the function
  useEffect(
    () => {
      // event handler that will update the show drop-down options value in state
      const handleClickOutside = (event: any) => {
        // hide options only if the clicked element is outside the current component
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          // to hide the options
          setShowOptions(false);
        }
      };
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    },
    // only apply update if the [wrapperRef] value changes
    [wrapperRef]
  );

  return (
    // Main
    <div className="drop-down-main-container">
      {/* Label */}
      {showLabel && (
        <label className="dropdown-label" htmlFor={id + "_element"}>
          {label}
        </label>
      )}
      <div
        id={id + "-drop-down-main"}
        className="drop-down-main"
        // for hiding the dropdown options when user clicks outside
        // assigning a reference of useRef to this List
        ref={wrapperRef}
      >
        {/* Selected value */}
        <div
          className="selected-option"
          id={id + "-selected-option"}
          // to show/hide the dropdown options
          onClick={() => setShowOptions(!showOptions)}
        >
          {/* label / selected value */}
          <p id={id + "-selected-option-text"} className="selected-option-text">
            {value && value.length !== 0 ? value : label}
          </p>
          {/* down arrow icon */}
          <img
            id={id + "-drop-down-down-edit"}
            src={downArrow}
            alt="Down Arrow"
            className="edit-icon"
          />
        </div>
        {/* shows options based on the state variable value */}
        <ul
          id={id + "-drop-down-list"}
          className={showOptions ? "drop-down-list" : "hidden-drop-down-list"}
        >
          {/* Mapping the Options */}
          {showOptions ? (
            dropDownOptions.length > 0 ? (
              dropDownOptions.map((option: any, index) =>
                typeof option === "object" ? (
                  <div
                    id={id + "-" + option + "-drop-down-option"}
                    key={id + option.value + "-div"}
                  >
                    {/* The Option value */}
                    <li
                      onClick={() => {
                        // does not call the handleChange if no options are available
                        // and if the option displayed has value ==> Options unavailable
                        if (option !== "Options unavailable") {
                          handleChange(option);
                        }
                        setShowOptions(!showOptions);
                      }}
                      id={id + "-" + option.value + "-drop-down-option-li"}
                      key={id + option.value + "-li"}
                      className={
                        "drop-down-option" +
                        (value === option.label
                          ? " drop-down-selected-option"
                          : "")
                      }
                    >
                      {option.label}
                    </li>
                    {/* horizontal Line */}
                    {index !== dropDownOptions.length - 1 && (
                      <hr
                        id={id + "-" + option.value + "-drop-down-option-line"}
                        key={id + option.value + "-line"}
                        className="drop-down-option-line"
                      ></hr>
                    )}
                  </div>
                ) : (
                  // Individual List Item from Options of DropDown
                  <div
                    id={id + "-" + option + "-drop-down-option"}
                    key={id + option + "-div"}
                  >
                    {/* The Option value */}
                    <li
                      onClick={() => {
                        // does not call the handleChange if no options are available
                        // and if the option displayed has value ==> Options unavailable
                        if (option !== "Options unavailable") {
                          handleChange(option);
                        }
                        setShowOptions(!showOptions);
                      }}
                      id={id + "-" + option + "-drop-down-option-li"}
                      key={id + option + "-li"}
                      className={
                        "drop-down-option" +
                        (value === option ? " drop-down-selected-option" : "")
                      }
                    >
                      {option}
                    </li>
                    {/* horizontal Line */}
                    {index !== dropDownOptions.length - 1 && (
                      <hr
                        id={id + "-" + option + "-drop-down-option-line"}
                        key={id + option + "-line"}
                        className="drop-down-option-line"
                      ></hr>
                    )}
                  </div>
                )
              )
            ) : (
              <p className="drop-down-option">
                {noOptionsText ? noOptionsText : "No Options present"}
              </p>
            )
          ) : null}
        </ul>
      </div>
    </div>
  );
};
