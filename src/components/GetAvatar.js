import React from 'react';
import PropTypes from 'prop-types';



class GetAvatar extends React.Component {
    constructor(props) {
        super(props);

        this.fr = new FileReader();
        this.myFileField = React.createRef();

        this.handleFilePicker = this.handleFilePicker.bind(this);
        this.uploadImage = this.uploadImage.bind(this);
        this.getImage = this.getImage.bind(this);
    }

    handleFilePicker() {
        this.myFileField.current.click();
    }

    uploadImage(e) {
        const myFile = e.currentTarget.files[0];
        this.fr.addEventListener('load', this.getImage);
        this.fr.readAsDataURL(myFile);
    }

    getImage() {
        const image = this.fr.result;
        this.props.updatePhoto(image);
    }

    getPreview(isDefault, image) {
        return (!isDefault) ? { backgroundImage: `url(${image})` } : {};
    }

    render() {
        const { isPhotoDefault, photo } = this.props;
        return (
            <div className="add-image-container">
                <button className="btn-add-image js__profile-trigger" type="button" onClick={this.handleFilePicker}>Añadir imagen</button>

                <input type="file" ref={this.myFileField} className="photo js__profile-upload-btn" onChange={this.uploadImage} />

                <div className="preview-image js__profile-preview" style={this.getPreview(isPhotoDefault, photo)}></div>
            </div>
        );
    }
}

GetAvatar.propTypes = {
    isPhotoDefault: PropTypes.bool.isRequired,
    photo: PropTypes.string.isRequired,
    updatePhoto: PropTypes.func.isRequired
};

export default GetAvatar;