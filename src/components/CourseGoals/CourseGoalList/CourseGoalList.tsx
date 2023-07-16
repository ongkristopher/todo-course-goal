import { Goal } from '../../../interface/Goal';
import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = (props: { items: Goal[], onDeleteItem: (id: Goal['id']) => void }) => {
    return (
        <ul className="goal-list">
            {props.items.map(goal => (
                <CourseGoalItem
                    key={goal.id}
                    id={goal.id}
                    onDelete={props.onDeleteItem}
                >
                    {goal.text}
                </CourseGoalItem>
            ))}
        </ul>
    );
};

export default CourseGoalList;
