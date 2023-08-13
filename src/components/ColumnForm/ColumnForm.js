import Button from '../Button/Button';
import styles from './ColumnForm.module.scss';
import { useState } from 'react';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const handleSubmit = event => {
        event.preventDefault();
        props.action({ title: title, icon: icon });
        setTitle('');
        setIcon('');
    }

	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            Title: <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
            Icon: <input type="text" value={icon} onChange={event => setIcon(event.target.value)} />
            <Button>Add Column</Button>
        </form>
	);
};

export default ColumnForm;