import axios from "axios";

export const fetchTasks = async () => {
  const { data } = await axios.get(
    "https://api.github.com/users/MagalhaesArtur"
  );
  console.log(data.followers);
};
