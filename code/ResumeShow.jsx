import React,{ useEffect, useState} from 'react';
import '../backdrop/Backdrop.css';
import './Resume.css';
import FloatingCloseButton from '../floatingbutton/Floatingclosebutton';
import SimpleCard from './Simplecard';
import axios from 'axios';
import Progress from '../Progress';


const ResumeShow = (props => {
    
    const [ infoResume, setInfoResume] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        
        const url = "https://raw.githubusercontent.com/braucalderon/jsonFiles/main/resume/resume.json";
        //  waits for data
        async function fetchData() {
            const request = await axios.get(url);
            setInfoResume(request.data);
            setError(true);
            return request;
        }
        fetchData();

    },[]);
    // console.log(infoResume);
    let post = <Progress />;
    if(error){
       post = infoResume.map((res, index) => {
            if(res.id === index){
                return(
                   <SimpleCard 
                   key={res.id}
                   personalInfo={res.personalInfo}
                   skills={res.skills}
                   email={res.email}

                   experience={res.experience}
                   education={res.education}
                   interests={res.interests}

                   jobTittle1={res.jobTittle1}
                   jobTittle2={res.jobTittle2}
                   jobTittle3={res.jobTittle3}

                   jobSubTittle1={res.jobSubTittle1}
                   jobSubTittle2={res.jobSubTittle2}
                   jobSubTittle3={res.jobSubTittle3}

                   educationTittle1={res.educationTittle1}
                   educationTittle2={res.educationTittle2}

                   educationSubTittle1={res.educationSubTittle1}
                   educationSubTittle2={res.educationSubTittle2}

                   gpa={res.gpa}

                   interestsSubTittle1={res.interestsSubTittle1}

                   skill1={res.skill1}
                   skill2={res.skill2}
                   skill3={res.skill3}
                   skill4={res.skill4}
                   skill5={res.skill5}
                   skill6={res.skill6}

                   dateFrom1={res.dateFrom1}
                   dateFrom2={res.dateFrom2}
                   dateFrom3={res.dateFrom3}

                   dateTo1={res.dateTo1}
                   dateTo2={res.dateTo2}
                   dateTo3={res.dateTo3}

                   descriptionJobSubTittle11={res.descriptionJobSubTittle11}
                   descriptionJobSubTittle12={res.descriptionJobSubTittle12}
                   descriptionJobSubTittle13={res.descriptionJobSubTittle13}
                   descriptionJobSubTittle14={res.descriptionJobSubTittle14}
                   descriptionJobSubTittle21={res.descriptionJobSubTittle21}
                   descriptionJobSubTittle22={res.descriptionJobSubTittle22}
                   descriptionJobSubTittle23={res.descriptionJobSubTittle23}
                   descriptionJobSubTittle31={res.descriptionJobSubTittle31}
                   descriptionJobSubTittle32={res.descriptionJobSubTittle32}
                   descriptionJobSubTittle33={res.descriptionJobSubTittle33}

                   graduationFrom1={res.graduationFrom1}
                   graduationFrom2={res.graduationFrom2}

                   graduationTo1={res.graduationTo1}
                   graduationTo2={res.graduationTo2}

                />
                )
                
            }else{
                return null;
            }
        });

    }


    return(
        <React.Fragment>
            <div className="Backdrop">
             <FloatingCloseButton />
             <div className="ResumeScrollDown">scroll down</div>
             <div className="ResumeCard">
             {post}
             </div>
            </div>
        </React.Fragment>
    )
});
export default ResumeShow;