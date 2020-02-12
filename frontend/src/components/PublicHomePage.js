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
					<h3 style={{ fontSize: "400%", margin: "0px" }}>ANIMAL CARE</h3>
				</div>
				<div style={{ float: "right", margin: "4%", maxWidth: "50%", textAlign: "center" }}>
					Brookdale Animal Hospital Brookdale Animal Hospital is a full-service veterinary medical facility located in Houston, TX. The professional
					and courteous staff at Brookdale Animal Hospital seeks to provide the best possible medical, surgical and dental care for their
					highly-valued patients. We are committed to promoting responsible pet ownership, preventative health care and health-related educational
					opportunities for our clients. Brookdale Animal Hospital strives to offer excellence in veterinary care to Houston and surrounding areas.
					Please take a moment to contact us today to learn more about our veterinary practice and to find out more information about how Brookdale
					Animal Hospital can serve the needs of you and your cherished pet.
				</div>
				<div className="ai-baseline" style={{ textAlign: "center", position: "absolute", bottom: "8px", right: "16px", fontSize: "15px" }}>
					<div>1120 Scarsdale Boulevard Houston,TX 77089</div>
                    <div>Phone: (281) 484-4733</div>  
                    <div>Mon-Fri: 7:30AM-6:00PM Sat: 8:30AM-12:30PM BY APPOINTMENTS ONLY </div>
                </div>
        
			</Segment>
		</div>
	);
}
