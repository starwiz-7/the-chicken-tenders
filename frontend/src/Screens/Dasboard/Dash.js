import React from "react";
import ResponsiveDrawer from "../../Components/SideBar/SideBar";

function Dash(props) {
	return (
		<div
			style={{
				backgroundColor: "#F5F6FA",
			}}
		>
			{props.page}
		</div>
	);
}

export default Dash;
