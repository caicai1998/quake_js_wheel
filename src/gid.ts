import axios from 'axios';

export const gid = async (countOfID: number): Promise<number[]> => {
  const { data } = await axios({
    method: 'post',
    url: 'https://1to2to3.cn/quake-gid/global_id/id',
    data: {
      countOfID,
    },
  });
  return data.data;
};
