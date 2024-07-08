import React from "react";
function UpddateUsers(){
    return(

        
        <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded p-3'>
                <form>
                    <h2>Update USER</h2>
                    <div className='mb-2'>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className='mb-2'>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className='mb-2'>
                        <label for="age">Age:</label>
                        <input type="number" id="age" name="age" required />
                    </div>
                    <button className='btn btn-success' type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpddateUsers; 