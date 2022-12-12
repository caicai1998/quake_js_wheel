import axios from 'axios';

export const robot_message = async (message: any) => {
  await axios({
    method: 'post',
    url: 'https://1to2to3.cn/hm-app-distribute/distribute',
    data: message,
  });
};
