import {request} from "@/utils/request.js";

export async function upload_video(data) {
    return request({
      method: 'POST',
      url: 'http://123.56.40.52:5001/videoload/uploadphoto',
      data,
    });
}

export function upload_voice(data) {
    return request({
        method: 'post',
        url: 'http://123.56.40.52:5000/voiceload/uploadphoto',
        data,
    })
}


export function cosy_voice(data) {
    return request({
        method: 'post',
        url: 'http://123.56.40.52:5000/voice/clone_eq',
        data,
    })
}

export function generate_voice(data) {
    return request({
        method: 'post',
        url: 'http://123.56.40.52:5001/videoG/run_inference',
        data,
    })
}
