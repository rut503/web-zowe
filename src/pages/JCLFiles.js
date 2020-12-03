import React from 'react'
import '../css/JCLFilesCSS.css'

// Get all JCL Files :
// 	> zowe zos-files list all-members "Z01301.JCL"
// {
// 	"success": true,
// 	"exitCode": 0,
// 	"message": "",
// 	"stdout": "JES1JOB1\nJES1JOB2\nJES2JOB1\n",
// 	"stderr": "",
// 	"data": {
// 	  "success": true,
// 	  "commandResponse": null,
// 	  "apiResponse": {
// 		"items": [
// 		  {
// 			"member": "JES1JOB1"
// 		  },
// 		  {
// 			"member": "JES1JOB2"
// 		  },
// 		  {
// 			"member": "JES2JOB1"
// 		  }
// 		],
// 		"returnedRows": 3,
// 		"JSONversion": 1
// 	  }
// 	}
// }


function submitJob(e){
	e.preventDefault();
	console.log(e.target.innerHTML)
}

function getJCLFiles(){
	alert("Get JCL!!!!")
}

function JCLFiles() {
    return (
        <div className="jcl-files-page container">

            <div className="table1">
				<div className="table1-top row">
					<span className="table1-name col">Files from Z01301.JCL</span>
					<div className="table1-btns col">
						<button className="btn btn1" onClick={getJCLFiles}>Get JCL</button>
						{/* <button className="btn btn1" onClick={getJCLFiles}>Submit</button> */}
					</div>
				</div>
				<div className="table1-body row">
					<div className="col">
						<button className="btn btn2" onClick={(e) => submitJob(e)}>JES1JOB1</button>
						<button className="btn btn2" onClick={(e) => submitJob(e)}>JES1JOB2</button>
						<button className="btn btn2" onClick={(e) => submitJob(e)}>JES2JOB1</button>
					</div>
				</div>
			</div>

        </div>
    );
}

export default JCLFiles;