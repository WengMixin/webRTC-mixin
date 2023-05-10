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
          "Basic " +
          Buffer.from(
            "mixin88585:bd5610be-ef75-11ed-ae90-0242ac150002"
          ).toString("base64"),
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
