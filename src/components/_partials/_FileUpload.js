// Filename - App.js

import axios from "axios";
import styles from "../styles/ProfilePage/FileUpload.module.css";

import React, { Component } from "react";
import getPlotProfileInfo from "../../helpers/getPlotProfileInfo";

class FileUpload extends Component {

	state = {
		// Initially, no file is selected
		selectedFile: null,
	};

	// On file select (from the pop up)
	onFileChange = (event) => {
		// Update the state
		this.setState({
			selectedFile: event.target.files[0],
		});
	};

	// On file upload (click the upload button)
	onFileUpload = () => {

		//error handling

		if (this.state.selectedFile === null) {
			alert("You need to choose a file first!")
			console.log("alert")
		} else {

		// Create an object of formData
		const formData = new FormData();

		// Update the formData object
		formData.append(
			"myFile",
			this.state.selectedFile,
			this.state.selectedFile.name
		);
		// Details of the uploaded file
		console.log(this.state.selectedFile);

		// Request made to the backend api
		// Send formData object
		const uploadPhotoRoute =
    process.env.REACT_APP_SERVER +
    ":" +
    process.env.REACT_APP_SERVER_PORT +
    `/uploadPhoto/${this.props.plotID}`;

		// function dealWithUpload (plot)
		axios
		.post(uploadPhotoRoute, formData)
		.then((response) => {
				this.props.setPhotos(response.data)
				formData.delete("myFile")
				// document.getElementById('files-upload').value = "No file chos";
				this.setState({
					selectedFile: null,
				});
				// document.getElementById('files-upload').value = "No file chos";
		})
		}

		
		

	};

	// File content to be displayed after
	// file upload is complete
	fileData = () => {
		if (this.state.selectedFile) {
			return (
				<div>
					<h4 className={styles.uploadH4}>File Details:</h4>
					<p className={styles.uploadP}>
						File Name:{" "}
						{this.state.selectedFile.name}
					</p>

					<p className={styles.uploadP}>
						File Type:{" "}
						{this.state.selectedFile.type}
					</p>
				</div>
			);
		} else {
			return (
				<div>
					<br />
					<h4 className={styles.uploadH4}>
						Choose before Pressing the Upload
						button
					</h4>
				</div>
			);
		}
	};

	render() {

		const props = this.props;
		console.log("props", props);
		return (
			<div>
				<h3 className={styles.uploadH3}>Upload A New Photo:</h3>
				<div>
					<input
						type="file"
						onChange={this.onFileChange}
						className={styles.uploadInput}
					/>
					<button onClick={this.onFileUpload}
					className={styles.uploadButton}>
						Upload!
					</button>
				</div>
				{this.fileData()}
			</div>
		);
	}
}

export default FileUpload;
