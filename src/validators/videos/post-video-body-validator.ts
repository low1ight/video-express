
import {VIDEO_RESOLUTIONS} from "./videoResolutions";

export const postVideoBodyValidator = ({title,author,availableResolutions}:any) => {
    if (!title || !author || !Array.isArray(availableResolutions)) return false



    if(title.length < 1 || title.length > 40) return false
    if(author.length < 1 || author.length > 20) return false

    if(availableResolutions.length < 1 ) return false
    for(let resolution of availableResolutions) {
         if(!VIDEO_RESOLUTIONS.includes(resolution)) return false
    }



    return true
}