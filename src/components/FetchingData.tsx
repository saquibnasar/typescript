import { useEffect } from "react";
import { db } from "./Firebase";
import { getDocs, collection } from "firebase/firestore";
export default function FetchingData() {
  type PostProps = {
    id: string;
    title: string;
    receivedAnOscar: boolean;
    releaseDate: number;
  }[];
  const movieList: Array<PostProps> = [];
  // const [movieList, setMovieList] = useState([]);
  const moviesCollectionRef = collection(db, "movies");

  async function getMovieList(): Promise<PostProps> {
    try {
      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      console.log(typeof filteredData[0].id);
      return filteredData;
    } catch (err) {
      console.error(err);
    }
    return movieList;
  }

  useEffect(() => {
    const data = getMovieList();
    console.log(data);
  }, []);

  return (
    <>
      <div>
        {movieList.map((movie) => (
          <div key={movie.id}>
            <h1 style={{ color: movie.receivedAnOscar ? "green" : "red" }}>
              {movie.title}
            </h1>
            <p> Date: {movie.releaseDate} </p>
          </div>
        ))}
      </div>
    </>
  );
}
