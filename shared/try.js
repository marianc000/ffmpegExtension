import { blobToUrl } from "../ffmpeg/transmux.js";
import { downloadUrl } from "./download.js";

export async function useFFmpeg() {
    fetch('/file/in.mp4').then(r => r.blob())
        .then(blobToUrl)
        .then(url => downloadUrl(url, 'test.mp4'));
}
 