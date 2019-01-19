import React from "react";
import ProfileStyle from "./profileStyle";

//headshot photo
import william from "../assets/img/profile/Profile.jpg";

const borderColor = "#DDDDDD"

export default () => (
    <div>
        <ProfileStyle 
            headshot = {william}
            color = {borderColor}
        />
    </div>
);