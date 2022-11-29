import React, { useEffect, useState } from "react";
import styles from "./users.module.css";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../Redux/Users/thunks";
import { Link } from 'react-router-dom';

const Users = (props) => {
  const dispatch = useDispatch();

  const [itemId, setItemId] = useState(null);

  const { isLoading, users: usersList, error } = useSelector((state) => state);
  
  console.log(usersList, "USUARIOS");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  if (isLoading) {
    return (
      <p> Loading...</p>
    )
  } else {
  return (
    <div className={styles.container}>
      <div>Users</div>
      <div>
        <div className={styles.tableTitle}>
          <h2>Products</h2>
          <button
            className={styles.add}
            onClick={() => {
              props.history.push('/api/Users/form');
            }}
          >
            <p>Add new Product</p>
          </button>
        </div>
      <table>
        <thead>
          <tr>
            <th className={styles.textLeft}>Nombre</th>
            <th className={styles.textLeft}>Apellido</th>
            <th className={styles.textLeft}>Fecha de nacimiento</th>
            <th className={styles.textLeft}>DNI</th>
            <th className={styles.textLeft}>Edad</th>
            <th className={styles.textLeft}>Nacionalidad</th>
            <th className={styles.textLeft}>Email</th>
            <th className={styles.textLeft}>Contraseña</th>
            <th className={styles.button}></th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => {
            return (
              <tr key={user._id}>
                <td className={styles.textLeft}>{user.name}</td>
                <td className={styles.textLeft}>{user.lastname}</td>
                <td className={styles.textLeft}>{user.dateofbirth}</td>
                <td className={styles.textLeft}>{user.dni}</td>
                <td className={styles.textLeft}>{user.age}</td>
                <td className={styles.textLeft}>{user.nationality}</td>
                <td className={styles.textLeft}>{user.email}</td>
                <td className={styles.textLeft}>{user.password}</td>
                <td className={styles.buttons}>
                  <Link to={`/api/Users/${user._id}`}>
                    <button className={styles.update}>
                      <p>Update</p>
                    </button>
                  </Link>
                  <button
                    className={styles.delete}
                    onClick={() => {
                      setItemId(user._id);
                      const content = `Do you want to DELETE Product: ${user.name}`
                      dispatch(alert(content));
                    }}
                  >
                    <p>Delete</p>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
      </div>
    </div>
  );
};
}

export default Users;
