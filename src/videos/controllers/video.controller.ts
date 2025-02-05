import {Router,Request,Response} from "express";
import {videosRepository} from "../repository/videos.repository";
import {postVideoBodyValidator} from "../../validators/videos/post-video-body-validator";
import {updateVideoBodyValidator} from "../../validators/videos/update-video-body-validator";


export const videosRouter = Router()


videosRouter.get('/',(req:Request, res:Response) => {
    const videos = videosRepository.getVideos()
     res.send(videos)

})

videosRouter.get('/:id',(req:Request, res:Response) => {

    const video = videosRepository.getVideoById(req.params.id)

    if(!video) {
        res.send(404)
        return
    }
    res.send(video)
})

videosRouter.delete('/:id',(req:Request, res:Response) => {

    const video = videosRepository.getVideoById(req.params.id)

    if(!video) {
        res.send(404)
        return
    }

    videosRepository.deleteVideoById(req.params.id)

    res.send(204)

})


videosRouter.post('/',(req:Request, res:Response) => {
    if(!postVideoBodyValidator(req.body)) {
        res.send(400)
        return
    }
    const video = videosRepository.createVideo(req.body)
    res.send(video)
})


videosRouter.put('/:id',(req:Request, res:Response) => {

    if(!updateVideoBodyValidator(req.body)) {
        res.send(400)
        return
    }

    const video = videosRepository.getVideoById(req.params.id)

    if(!video) {
        res.send(404)
        return
    }

    videosRepository.updateVideo(req.params.id, req.body)
    res.send(204)
})