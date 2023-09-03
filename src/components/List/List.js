import styles from './List.module.scss';
import SearchForm from '../SearchForm/SearchForm'
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getColumnsByList, getListById } from '../../redux/store';

const List = () => {

  const { listId } = useParams();
  //const allColumns = useSelector(getAllColumns);
  const columns = useSelector(columns => getColumnsByList(columns, listId));
  const listData = useSelector(lists => getListById(lists, listId));

    return (
      <div className={styles.list}>
        <header className={styles.header}>
          <h2 className={styles.title}>{listData.title}</h2>
        </header>
        <p className={styles.description}>{listData.description}</p>
        <SearchForm />
        <section className={styles.columns}>
          {columns.map(column =>
                <Column 
                key={column.id}
                listId={column.listId}
                {...column} />
                )}
        </section>
        <ColumnForm listId={listId} />
      </div>
    );
  };

export default List;