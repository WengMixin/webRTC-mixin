/*
 * @Author: mixin weng mixin_weng2022@163.com
 * @Date: 2023-05-10 23:13:13
 * @LastEditors: mixin weng mixin_weng2022@163.com
 * @LastEditTime: 2023-05-10 23:24:16
 * @FilePath: /webRTC/client/src/webrtc/iceServers.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "axios";

async function fetchXirsysIceServers() {
  try {
    let o = {
      format: "urls",
    };

    let bodyString = JSON.stringify(o);
    let options = {
      method: "PUT",
      url: "https://global.xirsys.net/_turn/webRTC-mixin",
      headers: {
        Authorization:
          "Basic " + btoa("mixin88585:bd5610be-ef75-11ed-ae90-0242ac150002"),
        "Content-Type": "application/json",
      },
      data: bodyString,
    };

    const response = await axios(options);
    console.log("ICE List: ", response.data);
    return response.data.v.iceServers;
  } catch (error) {
    console.log("request error: ", error);
    throw error;
  }
}

export default fetchXirsysIceServers;
