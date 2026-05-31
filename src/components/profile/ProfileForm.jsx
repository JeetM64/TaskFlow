

import './profileform.css';

function ProfileForm() {

    
  return (
    <div>
      <div className="form-container">
        <h2>profile Setting </h2>
        
        <form className="parent">
            <input type="text" placeholder="Name"/>
            <input type = "email" placeholder="Email"/>
            <input type ="password" placeholder="Password"/>
            <input type ="password" placeholder="conform Password"/>
            <button type="submit"> Save Changes </button>

        </form>

      </div>
    </div>
  )
}

export default ProfileForm