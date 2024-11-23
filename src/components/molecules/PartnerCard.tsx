"use client"

import React , {useState} from "react";


// dailog 
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";



function PartnerModal({ dialogOpen, handleDialogClose   }) {
    return (
      <Dialog
        open={dialogOpen}
        keepMounted
        onClose={handleDialogClose}
        aria-describedby="alert-dialog-slide-description"
        classes={{ paper: "dialog-paper" }} // Custom CSS class for dialog
      >
        <DialogTitle className="dialog-title">
          {"  "}
        </DialogTitle>
        <DialogContent className="dialog-content flex-row">
    
      test
      
        </DialogContent>
        <DialogActions className="dialog-actions flex-row">
          {/* <Button onClick={handleDialogClose}>Apply</Button> */}
          
        </DialogActions>
      </Dialog>
    );
  }




export default function PartnerCard() {
    const [PartnerDialogOpen, setPartnerDialogOpen] = useState(false);

    const handlePartnerDialogOpen = ()=>{
        setPartnerDialogOpen(true)
    }
    const handlePartnerDialogClose = ()=>{
        setPartnerDialogOpen(false)
    }

  return (
    <>
    <PartnerModal dialogOpen={PartnerDialogOpen} handleDialogClose={handlePartnerDialogClose}/>
    <div
      className="partner-card flex-col"
      style={{ padding: "15px", gap: "20px" , cursor : "pointer"}}
      onClick={()=> handlePartnerDialogOpen()}
      >
      <div className="card-img" style={{ width: "100%" }}>
        <img
          src="https://clinic-next-github.vercel.app/_next/image?url=%2Fmedia%2FDoctors%2F2.jpg&w=640&q=75"
          alt="partner-img"
          style={{ width: "100%" }}
          />
      </div>
     
    </div>
          </>
  );
}
