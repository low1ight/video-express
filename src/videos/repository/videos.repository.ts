

type Video = {
    id: string,
    title: string,
    author: string,
    "canBeDownloaded": boolean,
    "minAgeRestriction": null | number,
    "createdAt": Date,
    "publicationDate": Date,
    availableResolutions:string[]
}

export const videosRepository = {

    arr: [] as Video[],

     getVideos():Video[] {

        return this.arr
    },


    getVideoById(id:string):Video | null {

        const video = this.arr.find(i => i.id === id)

        return video ? video : null
    },


    deleteVideoById(id:string) {
        this.arr = this.arr.filter(i => i.id !== id)

    },


     createVideo({title,author,availableResolutions}:{title:string,author:string,availableResolutions:string[]}) {


        const date = new Date()
        const postingDays = 1

        const newVideo = {
            "id": new Date().toISOString(),
            title,
            author,
            "canBeDownloaded": true,
            "minAgeRestriction": null,
            "createdAt": date,
            "publicationDate": new Date(date.getTime() + postingDays * 24 * 60 * 60 * 1000),
            availableResolutions
        }

       this.arr.push(newVideo)

       return newVideo
    },


    updateVideo(id:string,{title,author,availableResolutions,canBeDownloaded,minAgeRestriction,publicationDate}: {
                    title:string,
                    author:string,
                    availableResolutions:string[],
                    canBeDownloaded:boolean,
                    minAgeRestriction:number,
                    publicationDate:Date}) {


        this.arr = this.arr.map((item) => {

            if(item.id !== id) return item


            return {
                    ...item,
                    title,
                    author,
                    availableResolutions,
                    canBeDownloaded,
                    minAgeRestriction,
                    publicationDate
                  }


            }

        )




    }






}