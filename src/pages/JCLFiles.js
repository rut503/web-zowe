import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

import Spinner from '../components/Spinner'
import '../css/JCLFilesCSS.css'

function JCLFiles() {
	const [files, setFiles] = useState([]);
	const [spinner, setSpinner] = useState(false)

	const getFiles = async () => {
		setSpinner(true)
		try{
			const res = await axios.get("http://148.100.79.75/list_jcl_files")
			setFiles(res.data.data.apiResponse.items)
		} catch (error) {
			console.log(error)
		}
		setSpinner(false)
	}

	const mapFiles = useCallback(()=> {
		if(files.length < 1){
			return <p className="error-message">No files found in Z01301.JCL, Try pressing Get JCL button to fetch. 
				If that doesn't work than something went wrong.</p>
		}
		return files.map((file, i) => (
			<button key={i} className="btn btn2" onClick={(e) => submitJob(e)}>{file.member}</button>
		))
	}, [files])

	useEffect(() => {
		// getFiles()
		mapFiles()
	}, [mapFiles])

	const submitJob = async (e) => {
		e.preventDefault();
		const fileName = e.target.innerHTML

		try{
			const res = await axios.get(`http://148.100.79.75/submit_job/${fileName}`)
			if(res.data.success !== true){
				alert("Something went wrong, job not submitted!")
			}
			else{
				alert("Job submitted successfully!")
			}
		} catch (error) {
			console.log(error)
		}
	}

    return (
        <div className="jcl-files-page container">
            <div className="table1">
				<div className="table1-top row">
					<span className="table1-name col">Files from Z01301.JCL</span>
					<div className="table1-btns col">
						<button className="btn btn1" onClick={getFiles}>Get JCL</button>
					</div>
				</div>
				<div className="table1-body row">
					<div className="col">
						{ spinner ? <Spinner /> : mapFiles() }
					</div>
				</div>
			</div>
        </div>
    );
}

export default JCLFiles;