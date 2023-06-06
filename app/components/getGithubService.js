import axios from "axios";

const getGithubService = async () => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${process.env.GITHUB_USERNAME}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_API_KEY}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export default getGithubService;
