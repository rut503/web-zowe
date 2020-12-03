import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'

import Spinner from '../components/Spinner'
import '../css/JobDetailsCSS.css'

function JobDetails() {
	const [jobs, setJobs] = useState([])
	const [jobContent, setJobContent] = useState([])
	const [spinner1, setSpinner1] = useState(false)
	const [spinner2, setSpinner2] = useState(false)

	const getJobs = async () => {
		setSpinner1(true)
		try{
			const res = await axios.get("http://148.100.79.75/list_jobs")
			if(res.data.success === true){
				setJobs(res.data.data)
			}
			// console.log(res)
		} catch (error) {
			console.log(error)
		}
		setSpinner1(false)
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
				btn = <button name={job.jobid} className="col btn btn3" onClick={(e) => getJobContent(e)}>View Job</button>
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

	const getJobContent = async (e) => {
		setSpinner2(true)
		e.preventDefault();
		const jobID = e.target.name

		try{
			const res = await axios.get(`http://148.100.79.75/view_job_spools/${jobID}`)
			setJobContent(res.data)
		} catch (error) {
			console.log(error)
		}
		setSpinner2(false)
	}

	const mapJobContent = useCallback(() => {
		if (jobContent.length < 1) {
			return <div className="table1">
				<div className="table1-body3 row">
					<div className="container">
						Click View Job button for a job you want to fetch content for.
						If nothing returns, something went wrong, choose different job to view.
					</div>
				</div>
				<br/>
			</div>
		}

		return jobContent.map((content, i) => <div className="table1" key={i}>
			<div className="table1-top row">
				<p className="key col">Spool ID : 
					<br/><span className="value">{content.spool_id}</span>
				</p>
				<p className="key col">Record Format : 
					<br/><span className="value">{content.recfm}</span>
				</p>
				<p className="key col">Record Length : 
					<br/><span className="value">{content.lrecl}</span>
				</p>
				<p className="key col">Data Definition Name : 
					<br/><span className="value">{content.ddname}</span>
				</p>
				<p className="key col">Record Count : 
					<br/><span className="value">{content.record_count}</span>
				</p>
			</div>

			<div className="table1-body2 row">
				<div className="container">
					<div className="spool-content">
						<pre className="col">{content.spool_content}</pre>
					</div>
				</div>
			</div>
			<br/>
	</div>
	)}, [jobContent])

	const showSpinner = () => {
		return <div className="table1">
			<div className="table1-body3 row">
				<div className="container">
					<Spinner />
				</div>
			</div>
			<br/>
		</div>
	}

	useEffect(() => {
		// getJobs()
		mapJobs()
		mapJobContent()
	}, [mapJobs, mapJobContent])

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
						{ spinner1 ? showSpinner() : mapJobs() }
					</div>
				</div>
				<br/>
			</div>

			<div className="table1">
				{ spinner2 ? showSpinner() : mapJobContent() }
			</div>
			
        </div>
    );
}

export default JobDetails;