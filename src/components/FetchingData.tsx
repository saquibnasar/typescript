import { useEffect, useState } from "react";
import { db } from "./Firebase";
import { getDocs, collection } from "firebase/firestore";
export default function FetchingData() {
  // interface IPostProps {
  //   id: string;
  //   recievedAnOscar: boolean;
  //   releaseDate: number;
  //   title: string;
  // }
  type PostProps = {
    id?: string;
    title?: string;
    receivedAnOscar?: boolean;
    releaseDate?: number;
  };

  const [movieList, setMovieList] = useState<PostProps[] | []>([]);
  // const [movieList, setMovieList] = useState([]);
  const moviesCollectionRef = collection(db, "movies");

  async function getMovieList(): Promise<PostProps[]> {
    try {
      const data = await getDocs(moviesCollectionRef);
      const filteredData = (await data.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      })) as PostProps;

      return filteredData;
    } catch (err) {
      console.error(err);
    }
    return [{}];
  }

  useEffect(() => {
    const data = getMovieList();
    setMovieList(data);
  }, []);

  return (
    <>
      <div>
        {movieList ? (
          <>
            {movieList.map((movie) => (
              <div key={movie.id}>
                {console.log(movieList)}
                <h1 style={{ color: movie.receivedAnOscar ? "green" : "red" }}>
                  {movie.title}
                </h1>
                <p> Date: {movie.releaseDate} </p>
              </div>
            ))}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
