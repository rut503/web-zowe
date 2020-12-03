import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import '../css/JobDetailsCSS.css'

// Get all active JOBS :
// 	> zowe zos-jobs list jobs
// Get all Spool File Ids of a JOB :
// 	> zowe zos-jobs list spool-files-by-jobid j3051
// Get JOB Status of a JOB for stat table up top :
// 	> zowe zos-jobs view job-status-by-jobid j3051 --rfj
// Get Spool File Content with JOB ID and Spool ID :
// 	> zowe  zos-jobs view spool-file-by-id JOB03051 4

function viewJob(e){
	e.preventDefault();
	console.log(e.target.name)
}

function JobDetails() {
	const [jobs, setJobs] = useState([]);

	const getJobs = async () => {
		try{
			const res = await axios.get("http://148.100.79.75/list_jobs")
			if(res.data.success === true){
				setJobs(res.data.data)
			}
			// console.log(res)
		} catch (error) {
			console.log(error)
		}
	}

	const mapJobs = useCallback(()=> {
		if(jobs.length < 1 ){
			return <div className="body2-row row">
				<p className="error-message col">No jobs found on Z01301, Try pressing Get Jobs button to fetch. 
				If that doesn't work, either no jobs have been submitted recetly or something went wrong.</p>
			</div>
		}
		return jobs.map((job, i) => {
			let btn 
			if(job.jobname === "Z01301"){
				btn = <button disabled className="col btn btn3">Not Allowed</button>
			}
			else {
				btn = <button name={job.jobid} className="col btn btn3" onClick={(e) => viewJob(e)}>View Job</button>
			}
			return <div className="body2-row row" key={i}>
				<p className="col stat">{job.jobid}</p>
				<p className="col stat">{job.retcode}</p>
				<p className="col stat">{job.jobname}</p>
				<p className="col stat">{job.status}</p>
				{btn}
			</div>
		})
	}, [jobs])

	useEffect(() => {
		// getFiles()
		mapJobs()
	}, [mapJobs])

	// const submitJob = async (e) => {
	// 	e.preventDefault();
	// 	const fileName = e.target.innerHTML

	// 	try{
	// 		const res = await axios.get(`http://148.100.79.75/submit_job/${fileName}`)
	// 		if(res.data.success !== true){
	// 			alert("Something went wrong, job not submitted!")
	// 		}
	// 		else{
	// 			alert("Job submitted successfully!")
	// 		}
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }

    return (
        <div className="job-details-page container">
            <div className="table1">
				<div className="table1-top row">
					<span className="table1-name col">Current Jobs on Z01301</span>
					<div className="table1-btns col">
						<button className="btn btn1" onClick={getJobs}>Get Jobs</button>
					</div>
				</div>
				<div className="table1-body2 row">
					<div className="container">
						{ mapJobs() }
					</div>
				</div>
				<br/>
				<div className="table1-body3 row">
					<pre>Hello name name is Rut</pre>
				</div>
			</div>
        </div>
    );
}

export default JobDetails;