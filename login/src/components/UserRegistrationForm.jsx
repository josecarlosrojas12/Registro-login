import React, {useState} from "react";

const UserRegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('user registrado',{username,email,password})
    };

    return(

        <div className="flex justify-center items-center min-h-screen bg-green-600">
            <div className="bg-white p-10 rounded-lg shadow-lg w-96">
                <h2 className="font-bold text-2xl text-green-700 mb-6 text-center">Registro de Usuario</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-green-800">Nombre de Usuario</label>
                        <input 
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border border-green-400 rounded mt-1 focus:outline-none focus:border-green required:"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-green-800">Correo electronico</label>
                        <input 
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}  className="w-full p-2 border border-green-400 rounded mt-1 focus:outline-none focus:border-green-600 required:"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-green-600">contraseña</label>
                        <input 
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) =>setPassword(e.target.value)}
                        className="w-full p-2 border border-green-400 rounded mt-1 focus:outline-none focus:border-green-600 required:"
                        />
                    </div>
            <button type="submit " className="w-full bg-green-600 text-white py-2 rounded hover:green-700 transition duration-200" >Registrar</button>
                </form>
            </div>
        </div>
       
    )
}

export default UserRegistrationForm;