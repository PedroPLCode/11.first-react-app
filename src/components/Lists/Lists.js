import styles from './Lists.module.scss';
import ListForm from '../ListForm/ListForm';
import { Link } from 'react-router-dom';
import { getAllLists } from "../../redux/store";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeList } from '../../redux/store';

const Lists = () => {

  const dispatch = useDispatch();
  const allLists = useSelector(getAllLists);

  const handleRemoveList = (event, listId) => {
    event.preventDefault();
    dispatch(removeList(listId));
  }

  return (
    <section className={styles.lists}>
      <h2 className={styles.heading}>Browse lists</h2>
        {allLists.map(list => (
          <Link key={list.id} to={`list/${list.id}`} className={styles.listLink}>
            <h3>{list.title}<button onClick={event => handleRemoveList(event, list.id)}><i className="fa fa-trash"></i></button></h3>
            <p>{list.description}</p>
          </Link>
        ))}
        <ListForm />
    </section>
  );
}

export default Lists;
