// import * as React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";

// import Modal from "@mui/material/Modal";
// import AuthPage from "../Auth";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

// const BasicModal = (
//   user,
//   login,
//   logout,
//   handleClose,
//   handleOpen,
//   open,
//   setUser
// ) => {
//   //   const [open, setOpen] = React.useState(false);
//   //   const handleOpen = () => setOpen(true);
//   //   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       {user ? (
//         <Button
//           onClick={() => {
//             logout();
//           }}
//           sx={{ color: "white", fontWeight: "700" }}
//         >
//           Sign Out
//         </Button>
//       ) : (
//         <Button onClick={handleOpen} sx={{ color: "white", fontWeight: "700" }}>
//           Sign In
//         </Button>
//       )}

//       <Modal
//         open={open}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           {/* <Button onClick={handleClose}>x</Button> */}

//           <AuthPage handleClose={handleClose} setUser={setUser} login={login} />
//         </Box>
//       </Modal>
//     </div>
//   );
// };
// export default BasicModal;
