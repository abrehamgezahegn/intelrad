import React from "react";
// import { Container } from "./styles";
// import { useOutsideClick } from "../../../hooks/useOutsideClick";
import Select from "react-select";

// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ]

const SelectElm = ({ options, ...props }) => {
  return (
    <div style={{ zIndex: 100 }}>
      <Select
        // defaultValue={colourOptions[0]}
        // isDisabled={isDisabled}
        // isLoading={isLoading}
        // isClearable={isClearable}
        // isRtl={isRtl}
        // isSearchable={isSearchable}
        options={options}
        {...props}
        styles={{ zIndex: 1000 }}
      />
    </div>
  );
};

export default SelectElm;

// const Select = ({
//   options,
//   selectProps = {},
//   value = "",
//   error = false,
//   name = "",
//   onChange = (value) => {},
//   secondaryStyle,
// }) => {
//   const [isOpen, setOpen] = useState(false);
//   const [selected, setSelected] = useState(value);

//   useEffect(() => {
//     const element = document.getElementById(name);
//     if (element) {
//       element.value = selected;
//     }
//     onChange(selected);

//     // eslint-disable-next-line
//   }, [selected]);

//   useEffect(() => {
//     setSelected(value);
//   }, [value]);

//   const selectRef = useOutsideClick(() => setOpen(false));
//   return (
//     <Container isOpen={isOpen} error={error} secondaryStyle={secondaryStyle}>
//       <select {...selectProps} id={name} name={name} className="html-select">
//         {options.map((item) => (
//           <option key={item.value} value={item.value}>
//             {item.label}
//           </option>
//         ))}
//       </select>
//       <div
//         ref={selectRef}
//         onClick={() => {
//           setOpen(true);
//         }}
//         className="custom-select-wrapper"
//       >
//         <div className={`custom-select ${isOpen && "open"}`}>
//           <div className="custom-select__trigger">
//             <span className={selected ? "selected-display" : ""}>
//               {options.find((item) => item.value === selected)?.label ||
//                 "Select"}
//             </span>
//             <div className="arrow"></div>
//           </div>
//           <div className="custom-options">
//             {options.map((item) => (
//               <div
//                 key={item.value}
//                 onClick={() => {
//                   if (item.disabled) return;
//                   setSelected(item.value);
//                   setTimeout(() => {
//                     setOpen(false);
//                   }, 0);
//                 }}
//                 className={`option-container ${item.disabled && "disabled"}`}
//               >
//                 <span
//                   className={`custom-option ${
//                     selected === item.value && "selected"
//                   } `}
//                   data-value={item.value}
//                 >
//                   {item.label}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default Select;
