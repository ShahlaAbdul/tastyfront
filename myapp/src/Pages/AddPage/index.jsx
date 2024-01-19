import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./style.scss"

function AddPage() {
    const [addData, setAddData] = useState([])


    useEffect(() => {
        getAll()
    }, [])
    async function getAll() {
        const res = await fetch("http://localhost:3100/")
        const data = await res.json()
        setAddData(data)
    }

    async function handleAdd(value) {
        const POST = await fetch("http://localhost:3100/", {
            method: "POST",
            body: JSON.stringify(value),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        await getAll()
    }

    async function handleDelete(id) {
        fetch("http://localhost:3100/" + id, {
            method: "DELETE"
        })
        await getAll();
    }

    return (
        <div>
            <Helmet>
                <title>Add Page</title>
            </Helmet>

            <Formik
                initialValues={{ image: '', name: '', description: '', price: "" }}
                validationSchema={Yup.object({
                    image: Yup.string()
                        .required('Required'),
                    name: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    description: Yup.string()
                        .required('Required'),
                    price: Yup.number()
                        .required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        handleAdd(values)
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form>
                    <label htmlFor="image">First Name</label>
                    <Field name="image" type="text" />

                    <label htmlFor="name">Last Name</label>
                    <Field name="name" type="text" />

                    <label htmlFor="description">description Address</label>
                    <Field name="description" type="text" />

                    <label htmlFor="price">price Address</label>
                    <Field name="price" type="number" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>

            <div className=' table'>
                <table className="w3-table-all">
                    <thead>
                        <tr>
                            <th> image</th>
                            <th>name</th>
                            <th className="w3-center">description</th>
                            <th> delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {addData && addData.map((x) => (
                            <tr key={x._id}>
                                <td>{x.image}</td>
                                <td>{x.name}</td>
                                <td>{x.description}</td>
                                <td><i className="fa-solid fa-trash" onClick={(x) => handleDelete(x._id)}></i></td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AddPage