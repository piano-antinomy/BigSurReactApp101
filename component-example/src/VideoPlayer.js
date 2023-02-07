import './VideoPlayer.css'
import React, { useState, useEffect } from "react";

function VideoPlayer() {
    
    const [studies, setStudies] = useState([]);

    useEffect(() => {
        fetch("https://clinicaltrials.gov/api/query/full_studies?expr=prostate&min_rnk=1&max_rnk=10&fmt=JSON")
            .then(response => response.json())
            .then(data => {setStudies(data.FullStudiesResponse.FullStudies)})
            .catch(error => console.error(error));
        }, []);

    //console.log(studies);
    return ( 
        <div>
            <div className="videoPlayer"> VideoPlayer - haha </div>
            
            <div className="studies-list">
                {studies.map(study => (
                        <li key={study.Rank} className="study-title">
                            {study.Study.ProtocolSection.IdentificationModule.BriefTitle}
                        </li>
                ))}
            </div>

        </div>
    );
}

export default VideoPlayer;
