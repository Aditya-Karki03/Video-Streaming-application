const key=import.meta.env.VITE_YTAPI

export const CommentsAPI=(videoId)=>{
    return `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=500&videoId=${videoId}&key=${key}`;
}

export const InputSuggestionAPI=(searchInput)=>{
    return `https://suggestqueries-clients6.youtube.com/complete/search?client=youtube-reduced&hl=en&gs_ri=youtube-reduced&ds=yt&cp=3&gs_id=100&q=${searchInput}&xhr=t&xssi=t&gl=us`
}

export const SearchedItemAPI=(id)=>{
    return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${id}%20phones&key=${key}`;
}

export const videoAPI=()=>{
 
    return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${key}`;
}