import React, { useState } from "react";

const initialFormState = { username: "", email: "", password: "" };

export default function Register () {

    const [ form, setForm ] = useState(initialFormState);
    const [ user, setUser ] = useState(initialFormState);

    const handleChange = event => {
        setForm({ 
            ...form, 
            [event.target.name]: event.target.value 
        })

    }

    const handleSubmit = event => {
        event.preventDefault();
        setUser(form);
        setForm(initialFormState);
    }

    return (
        <div style={{ textAlign: "center"}}>
          <h1>Register</h1>
          <form 
            style={{ display: "grid", alignItems:'center', justifyContent: 'center' }}
            onSubmit={handleSubmit} 
          >  
            <input 
                type="text" 
                placeholder="Username"
                name="username"
                value={form.username}
                onChange={handleChange} 
            />
            <input 
              type="email" 
              placeholder="Email Address"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <input 
              type="password" 
              placeholder="Password" 
              name="password"
              value={form.password}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
            </form>
            { user.username && <section>
                <hr />
                <p>Name submited: {user.username}!</p>
            </section>
            }
        </div>
      );
}