import axios from "axios";

const fetchGradesHandler = async (page) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/v1/grades?page=${page}` //&limit=${limit}`
    );
    console.log(response);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchGradesHandler;
