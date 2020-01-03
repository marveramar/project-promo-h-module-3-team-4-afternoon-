import React from 'react';
import PropTypes from 'prop-types';


class Profile extends React.Component {
    render() {

        const { photo } = this.props;
        return (
            <div className="profile">
                <div className="preview_card-image js__profile-image" style={{ backgroundImage: `url(${photo})` }}></div>
            </div>
        );
    }
}

Profile.propTypes = {
    photo: PropTypes.string.isRequired
};

export default Profile;