import "./ProfileCard.css";
import PropTypes from "prop-types"

function ProfileCard(props) {
    return (
        <div className="profile-card">
            <img src={props.ImgURL} alt=""/>
            <h2>{props.name}</h2>
            <p>{props.bio}</p>
        </div>
    );
}

//props validation be explained here! Here we learn documentation, preventing bugs. That is help to get required data and development tooling that is it gives development warning to catch what is the issues.
    // Step 1 we import PropType from "./prop-types"
    // Step 2
    ProfileCard.propTypes = {
        name: PropTypes.string.isRequired,
        bio: PropTypes.string.isRequired,
        ImgURL: PropTypes.string.isRequired,
    }

export default ProfileCard;