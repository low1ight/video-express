
import {VIDEO_RESOLUTIONS} from "./videoResolutions";

export const updateVideoBodyValidator = ({title,author,availableResolutions,canBeDownloaded,minAgeRestriction,publicationDate}:any) => {
    if (!title ||
        !author ||
        !Array.isArray(availableResolutions) ||
        !canBeDownloaded ||
        !minAgeRestriction ||
        !publicationDate
    ) return false



    if(title.length < 1 || title.length > 40) return false

    if(author.length < 1 || author.length > 20) return false

    if(typeof canBeDownloaded !== "boolean") return false

    if(!isFinite(minAgeRestriction)) return false
    if(+minAgeRestriction > 18 || +minAgeRestriction < 1) return false


    if(availableResolutions.length < 1 ) return false
    for(let resolution of availableResolutions) {
         if(!VIDEO_RESOLUTIONS.includes(resolution)) return false
    }


    return true
}