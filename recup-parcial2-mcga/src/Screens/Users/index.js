import React from "react";
import styles from "./users.module.css";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { useForm } from "react-hook-form";

const Products = () => {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.container}>
      <div>Users</div>
      <div>

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
                        required: "Cantidad es requerido"
                    }}
                    required
                />

                <div>
                    <Button className={styles.confirm} type="submit">
                        Confirm
                    </Button>
                </div>
            </form>
      </div>
    </div>
  );
};

export default Products;
