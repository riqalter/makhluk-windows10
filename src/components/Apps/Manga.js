import WindowsBase from "./WindowsBase";
import useStore from "../../store";

const Manga = () => {
  const { setManga } = useStore();

  return (
    <WindowsBase name="Manga" resizer="manga" appClose={setManga} num={6}>
      <div className="w-full h-full bg-white flex flex-col">
        <div className="w-full flex-1 bg-red-200">
          <iframe
            src="https://bato.to/"
            allowfullscreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </WindowsBase>
  );
};

export default Manga;
