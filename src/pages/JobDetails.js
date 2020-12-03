import React, { useState } from 'react';
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

function getJobs(){
	alert("Get Jobs!!!!")
}

function JobDetails() {
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
						<div className="body2-row row">
							<p className="col stat">JOB99999</p>
							<p className="col stat">CC 0000</p>
							<p className="col stat">JES1JOB1</p>
							<p className="col stat">OUTPUT</p>
							<button name="JOB99999" className="col btn btn3" onClick={(e) => viewJob(e)}>View Job</button>
						</div>
						<div className="body2-row row">
							<p className="col stat">JOB03051</p>
							<p className="col stat">CC 0000</p>
							<p className="col stat">JES1JOB1</p>
							<p className="col stat">OUTPUT</p>
							<button name="JOB03051" className="col btn btn3" onClick={(e) => viewJob(e)}>View Job</button>
						</div>
						<div className="body2-row row">
							<p className="col stat">JOB00000</p>
							<p className="col stat">CC 0000</p>
							<p className="col stat">JES1JOB1</p>
							<p className="col stat">OUTPUT</p>
							<button name="JOB00000" className="col btn btn3" onClick={(e) => viewJob(e)}>View Job</button>
						</div>
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