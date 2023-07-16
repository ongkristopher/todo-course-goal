import { ReactNode } from 'react';
import { Goal } from '../../../interface/Goal';
import './CourseGoalItem.css';

const CourseGoalItem = (props: {
    id: Goal["id"],
    onDelete: (id: Goal["id"]) => void,
    children: ReactNode
}) => {
    // const [deleteText, setDeleteText] = useState('');

    const deleteHandler = () => {
        // setDeleteText('(Deleted!)');
        props.onDelete(props.id);
    };

    return (
        <li className="goal-item" onClick={deleteHandler}>
            {props.children}
        </li>
    );
};

export default CourseGoalItem;
