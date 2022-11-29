<form onSubmit={handleSubmit(onSubmit)}>
        <Input
            type="text"
            name="name"
            label="Nombre"
            errors={errors}
            register={register}
            validationSchema={{ 
                required: "El nombre es requerido"
            }}
            required
        />      
        <Input
            type="text"
            name="lastname"
            label="Apellido"
            errors={errors}
            register={register}
            validationSchema={{ 
                required: "El apellido es requerido"
            }}
            required
        />
        <Input
            type="date"
            name="dateofbirth"
            label="Fecha de nacimiento"
            errors={errors}
            register={register}
            validationSchema={{ 
                required: "La fecha de nacimiento es requerida"
            }}
            required
        />      
        <Input
            type="number"
            name="dni"
            label="DNI"
            errors={errors}
            register={register}
            validationSchema={{ 
                required: "El DNI es requerido"
            }}
            required
        />
        <Input
            type="number"
            name="age"
            label="Edad"
            errors={errors}
            register={register}
            validationSchema={{ 
                required: "El nombre es requerido"
            }}
            required
        />      
        <Input
            type="text"
            name="nationality"
            label="Nacionalidad"
            errors={errors}
            register={register}
            validationSchema={{ 
                required: "La nacionalidad es requerida"
            }}
            required
        />
        <Input
            type="text"
            name="email"
            label="Email"
            errors={errors}
            register={register}
            validationSchema={{ 
                required: "El email es requerido"
            }}
            required
        />      
        <Input
            type="text"
            name="password"
            label="Contraseña"
            errors={errors}
            register={register}
            validationSchema={{ 
                required: "La contraseña es requerida"
            }}
            required
        />

        <div>
            <Button className={styles.confirm} type="submit" name="Registrar">
            </Button>
        </div>
      </form>