import React from 'react'
import ReactPlayer from 'react-player'



function DetailInformation({title,overview,genre,filename,_id, release_date, videoUrl}) {
    const src = '/api/movie/img/';
    return <table key={_id}>
        <tbody>
        <tr>
            <td>
                <img alt='filename' src={`${src}${filename}`} width={450}/>
            </td>
            <td>
                <div className='detailalign'><h1>{title}</h1>
                    <h3>Overview: {overview} </h3>
                    <div className={"player-wrapper"}>
                    <ReactPlayer className={'react-player'} url={videoUrl} width={'98%'} height={'75%'}playing />
                </div>
                    <h3>Release Date: {release_date}</h3>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
}
export default DetailInformation