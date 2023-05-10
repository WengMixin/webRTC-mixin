/*
 * @Author: mixin weng mixin_weng2022@163.com
 * @Date: 2023-05-09 15:01:06
 * @LastEditors: mixin weng mixin_weng2022@163.com
 * @LastEditTime: 2023-05-10 22:27:29
 * @FilePath: /webRTC/client/src/webrtc/configuration.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import fetchXirsysIceServers from "./iceServers";

const baseIceServers = [
  {
    urls: "stun:openrelay.metered.ca:80",
  },
  {
    urls: "turn:openrelay.metered.ca:80",
    username: "openrelayproject",
    credential: "openrelayproject",
  },
  {
    urls: "turn:openrelay.metered.ca:443",
    username: "openrelayproject",
    credential: "openrelayproject",
  },
  {
    urls: "turn:openrelay.metered.ca:443?transport=tcp",
    username: "openrelayproject",
    credential: "openrelayproject",
  },
];

export async function getRtcConfiguration() {
  const xirsysIceServers = await fetchXirsysIceServers();
  return {
    iceServers: [...baseIceServers, ...xirsysIceServers],
  };
}
