import { useEffect, useState } from "react";

function useCourses(){
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('./package.JSON')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return [courses];
}

export default useCourses;