const [status, setStatus] = useState(true);
const [movies, setMovies] = useState({});
const [lists, setLists] = useState({ myList: [] });

const addMyList = (id) => {
  setLists((lists) => ({
    ...lists,
    myList: lists.myList.includes(id)
      ? lists.myList.filter((myId) => myId !== id)
      : [...lists.myList, id],
  }));
  setMovies((movies) => ({
    ...movies,
    [id]: Object.assign(movies[id], { mylist: !movies[id].mylist }),
  }));
};
