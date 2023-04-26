import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import Youtube from 'react-youtube'
import {imageUrl,API_KEY} from '../../constants/Constants'
import './RowPost.css'
const RowPost = (props) => {
  const [movies,setMovies] = useState([])
  const [urlId,seturlId] = useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      // console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      // alert("network error")
    })
  },[])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id)=>{
    console.log(id)
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      // console.log(response.data)
      if(response.data.results.length!==0){
        seturlId(response.data.results[0])
      }else{
        console.log("trailer not available")
      }
    })
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            {movies.map((obj)=>(
              <img key={obj.id} onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />
            ))}
            
        </div>

       { urlId && <Youtube opts={opts} videoId={urlId.key} /> }

    </div>
  )
}

export default RowPost