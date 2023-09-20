import { useState } from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';



function FormSingUp ({ handleSubmit }){

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [prom, setProm] = useState(true)
    const [nov, setNov] = useState(false)

    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: 
                "Deben ser al menos 3 caracteres"
        }
    })

    const [apellidoError, setApellidoError] = useState({
        name: {
            error: false,
            message: 
                "Deben ser al menos 3 caracteres"
        }
    })

    function validarNombre(nombre)
    {
        if (nombre.length < 3)
        {
            return { name : { error: true, message: "deben ser mas de 3 caracteres"}}
        }else{
            return { name : { error: false, message: "" }}
        }
    }

    function validarApellido(nombre)
    {
        if (nombre.length < 3)
        {
            return { name : { error: true, message: "deben ser mas de 3 caracteres"}}
        }else{
            return { name : { error: false, message: "" }}
        }
    }



    return <form onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({
            name, 
            lastName, 
            email, 
            prom, 
            nov
        })

    }}>
        
        <TextField 
            id="name" 
            label="Nombre" 
            variant="outlined" 
            fullWidth
            margin='normal'
            onChange={(e) => setName(e.target.value)}
            value={name}
            error={ errors.name.error }
            helperText={ errors.name.error 
                ? errors.name.message 
                : ""
            }
            onBlur={(e) => {
                setErrors(validarNombre(e.target.value));
            }}
            
        />
        <TextField 
        id="name" 
        label="Apellido" 
        variant="outlined" 
        fullWidth
        margin='normal'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        error={ apellidoError.name.error }
        helperText={ apellidoError.name.error 
            ? apellidoError.name.message 
            : ""
        }
        onBlur={(e) => {
            setApellidoError(validarApellido(e.target.value));
        }}
        />
        <TextField 
        id="name" 
        label="Correo electronico" 
        variant="outlined" 
        type='email'
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <FormGroup>
            <FormControlLabel 
            control={<Checkbox 
                checked={prom}
                onChange={(e) => 
                    setProm(
                            e.target.checked
                        )
                    } 
                />
            } 
            label="Promociones" 
        />            
            <FormControlLabel control={<Checkbox 
            checked={nov}
            onChange={(e) => 
                setNov(
                        e.target.checked
                    )
                } 
            />
        } 
        label="Novedades"
    />            
        </FormGroup>
        <Button variant='contained' type='submit' >Registrarse</Button>

        
    </form>
}

export default FormSingUp;