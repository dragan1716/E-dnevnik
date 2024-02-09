import axios from "axios";

const fetchGradesHandler = async (page) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/v1/grades?page=${page}` //&limit=${limit}`
    );
    //console.log(response.data.results);
    console.log(response.data);
    console.log(response.data.results);

    //return response.data.results;
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};

export default fetchGradesHandler;
