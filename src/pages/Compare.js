// import React, { useState } from "react";
// import Button from "@material-ui/core/Button";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import Select from "@material-ui/core/Select";
// import Aqi from "../components/aqi";

// const CompareModal = ({ data, open, handleClose }) => {
//   const [selectCity, setSelectedCity] = useState([]);

//   const handleChange = (event) => {
//     setSelectedCity(event.target.value);
//   };

//   return (
//     <>
//       <Dialog
//         fullWidth={true}
//         maxWidth="sm"
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="form-dialog-title"
//       >
//         <DialogTitle>Compare City wise AQI</DialogTitle>
//         <DialogContent>
//           <div>
//             <InputLabel>Select City</InputLabel>
//             <Select
//               className="citySelectCntrl"
//               id="city-mutiple"
//               multiple
//               value={selectCity}
//               onChange={handleChange}
//             >
//               {data.map((obj) => (
//                 <MenuItem key={obj.city} value={obj.city}>
//                   {obj.city}
//                 </MenuItem>
//               ))}
//             </Select>
//           </div>
//           <br />
//           <div>
//             <table>
//               <thead>
//                 {selectCity.map((c) => (
//                   <th>{c}</th>
//                 ))}
//               </thead>
//               <tbody>
//                 <tr>
//                   {selectCity.map((c) => (
//                     <td>
//                       <Aqi data={data.find((obj) => obj.city === c).aqi} />{" "}
//                     </td>
//                   ))}
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </>
//   );
// };

// export default CompareModal;
