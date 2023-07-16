import { ChangeEvent, SyntheticEvent, useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props: { onAddGoal: (enteredValue: string) => void }) => {
    const [enteredValue, setEnteredValue] = useState('');

    const goalInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event: SyntheticEvent) => {
        event.preventDefault();
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
