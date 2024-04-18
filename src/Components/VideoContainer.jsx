import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import VideoCard from "./VideoCard";
import CardShimmer from "./Shimmers/CardShimmer";
import { addRecommendedVids } from "../Store/RecommendVidSlice";
import { videoAPI } from "../Constants";

export default function VideoContainer(){
    const[data,setData]=useState([]);
    const dispatch=useDispatch();

    const[loading,setLoading]=useState(false);

    

    useEffect(()=>{
        apiCallForVideoCards();
    },[])


    useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
        return(()=>window.removeEventListener('scroll',handleScroll))
    },[loading])

    const handleScroll=()=>{
        if(window.innerHeight + document.documentElement.scrollTop!==document.documentElement.offsetHeight || loading)
            return;
        else{
            alert('You are at the end of the page')
        }

        // apiCallForVideoCards()
    }

    const apiCallForVideoCards=()=>{
        setLoading(true)
        const apiURL=videoAPI();
        fetch(apiURL)
        .then((res)=>res.json())
        .then(res=>setData(res))
        .catch(err=>alert(err))
        .finally(setLoading(false));

    }
    if(data.length<=0)   return <CardShimmer/>;
    else{
        
        dispatch(addRecommendedVids(data.items))
    }
    const{items}=data;
   
    return(
        <div className="ml-20 mt-30 pt-4 px-3 flex justify-center  flex-shrink-0 flex-wrap gap-5 z-0 ">
            {
                items && items.map((item)=>
                    <Link to={`/watch/${item.id}`} key={item.id} state={{itemName:item}}>
                        <VideoCard
                            values={item}
                        />
                    </Link>
                )
            }
            
            
        </div>
    )
}