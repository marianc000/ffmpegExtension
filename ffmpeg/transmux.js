//transmux.js
import { FFmpeg } from "./lib/index.js";
import { fetchFile } from "./lib/util/index.js";
import { TYPE_MP4 } from "../shared/constants.js";
 
export async function blobToUrl(blob) {

    const ffmpeg = new FFmpeg();
    const name = 'in.mp4', outName = 'out.mp4';

    await ffmpeg.load({
        coreURL: "./ffmpeg-core.js"
    });

    await ffmpeg.writeFile(name, await fetchFile(blob));

    const cmd = `-i ${name} -acodec copy -vcodec copy ${outName}`;
    await ffmpeg.exec(cmd.split(' '));

    const data = await ffmpeg.readFile(outName);

    return URL.createObjectURL(new Blob([data.buffer], { type: TYPE_MP4 }));
}