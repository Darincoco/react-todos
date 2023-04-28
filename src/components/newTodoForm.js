import React, {useState} from 'react';

function NewTodoForm(props){

    const [description, setDescripition] = useState('');
    const [assigned, setAssigned] = useState('');

    const submitTodo = () => {
        if (description !== '' && assigned !== '') {
            props.addTodo(description, assigned);
            setDescripition('');
            setAssigned('');
        }
    }

    return (
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Assigned</label>
                    <input type='text'
                    className='form-control'
                    required
                    value={assigned}
                    onChange={e => {setAssigned(e.target.value)}}></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <textarea className='form-control'
                    rows={3}
                    required
                    value={description}
                    onChange={e => {setDescripition(e.target.value)}}></textarea>
                </div>
                <button type='button' className='btn btn-primary mt-3' onClick={submitTodo}>Add Todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm;