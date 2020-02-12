import React from "react";
import { PublicNavBar } from "./PublicNavBar";
import puppy from "../images/puppy_leaf.png";
import { Segment } from "semantic-ui-react";

export function PublicHomePage() {
	return (
		<div>
			<PublicNavBar />
			<div
				style={{
					backgroundImage: `url(${puppy})`,
					backgroundSize: "100% 100%",
					height: "100%",
					width: "100%",
					position: "absolute",
					zIndex: "-1"
				}}>

            </div>
			<Segment
				style={{
					backgroundColor: "rgba(255, 255, 255, 0.5)",
					maxWidth: "75vw",
					height: "75vh",
					margin: "auto",
					marginTop: "10vh"
				}}>
				<div style={{ float: "right", margin: "5%", textAlign: "center" }}>
					<h3 style={{ fontSize: "900%", margin: "0px" }}>HALO</h3>
					<h3 style={{ fontSize: "400%", margin: "0px" }}>ANIMAL CLINIC</h3>
				</div>
				<div style={{ float: "right", marginBottom: "6%", marginRight: "4%", marginLeft: "4%", minWidth: "50%", maxWidth: "50%", textAlign: "center", fontSize: "15px" }}>
				    Halo Animal Clinic is a full-service veterinary medical facility located in Houston, TX. The professional
					and courteous staff at Halo Animal Clinic seeks to provide the best possible medical, surgical and dental care for their
					highly-valued patients. We are committed to promoting responsible pet ownership, preventative health care and health-related educational
					opportunities for our clients. Halo Animal Clinic strives to offer excellence in veterinary care to Houston and surrounding areas.
					Please take a moment to contact us today to learn more about our veterinary practice and to find out more information about how Halo Animal Clinic can serve the needs of you and your cherished pet.
				</div>
                
        
			</Segment>
            <div style={{ 
                display: "flex",
                verticalAlign: "bottom", 
                fontSize: "20px", 
                marginTop: "60px",
                alignContent: "baseline",
                justifyContent: "center"}}>
				<div>1120 Heaven Boulevard, Houston, TX 77089 | Phone: (030) 411-8888 | Mon-Fri: 7:30 AM-6:00 PM | Sat: 8:30 AM-12:30 PM </div>
            </div>
		</div>
	);
}
