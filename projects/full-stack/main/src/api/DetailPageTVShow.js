import React from 'react'
import ReactPlayer from 'react-player'



function DetailInformation({title,overview,genre,filename,_id, release_date, videoUrl}) {
    const src = '/api/tvshow/img/';
    return <table key={_id}>
        <tbody>
        <tr>
            <td>
                <img alt='filename' src={`${src}${filename}`} width={500}/>
            </td>
            <td>
                <div className='detailalign'><h2>{title}</h2>
                    <h4>Overview: {overview} </h4>
                    <div className={"player-wrapper"}>
                        <ReactPlayer className={'react-player'} url={videoUrl} width={'98%'} height={'75%'}playing />
                    </div>
                    <h4>Release Date: {release_date}</h4>
                </div>
            </td>
        </tr>
        </tbody>
    </table>
}
export default DetailInformation