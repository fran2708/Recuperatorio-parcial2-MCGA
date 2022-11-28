import React from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { useForm } from "react-hook-form";
import styles from "./test.module.css";

const Test = () => {
    const { register, reset, setValue, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        reset()
    };
    
    return (
        <>
        <div>Test</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type="text"
                    name="name"
                    label="Nombre"
                    errors={errors}
                    register={register}
                    validationSchema={{ 
                        required: "El nombre es requerido",
                        minLength: {
                            value: 3,
                            message: "Por favor ingrese al menos 3 caracteres"
                        }
                    }}
                    required
                />      
                <Input
                    type="number"
                    name="quantity"
                    label="Cantidad"
                    errors={errors}
                    register={register}
                    validationSchema={{ 
                        required: "Cantidad es requerido",
                        validate: {
                            positive: v => parseInt(v) > 0
                        }
                    }}
                    required
                />

                <div>
                    <Button className={styles.confirm} type="submit" name="Confirm">
                    </Button>
                </div>
            </form>
        </>
    );
  };
  
  export default Test;