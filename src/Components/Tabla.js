import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import axios from "axios"

const labels = [
    "# de orden",
    "Fecha",
    "Ciudad destino",
    "Direccion de destino",
    "Estado",
    "Action"    
]
const TablaHome = () => {
    const [orders, setOrders] = useState(null)
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        const userId = "638d5d80e3c3f9ccbb1c9e7"
        axios
            .get("http://localhost:5000/orders?userId=" + userId)
            .then((response) => {
                console.log(response.data)
                setOrders(response.data)
            })
    }, [update])

    const deleteClick = (orderId) => {
        axios
            .delete("http://localhost:5000/orders/delete/" + orderId)
            .then(response => {
                console.log(response.data)
                setUpdate(!update)
            })
    }

  return (
    <>
    <div className="Tabla">
        <Link className="btn btn-primary orders-home__create" to='/orders/new'>Create</Link>
        <table className="table">
            <thead>
                <tr>
                    {labels.map((label, index) => {
                        return (<th key={index} scope="col">{label}</th>)
                    })}
                </tr>
            </thead>
            <tbody>
                {orders !== null ? orders.map((order, index) => {
                    return (
                        <tr key={index}>
                            <th scope="row">
                                <Link to={'/Updateorder/' + order._id}>{index}</Link>
                            </th>
                            <td>{order.date}</td>
                            <td>{order.city2}</td>
                            <td>{order.address}</td>
                            <td>{order.state}</td>
                            <td className="d-flex gap-2 justify-content-center">
                                <Link className="btn btn-success" to={'/Updateorder/' + order._id + '/edit'}>Actualizar</Link>
                                <button onClick={() => deleteClick(order._id)}>Delete</button>
                                
                            </td>
                        </tr>)
                }) : ''}
            </tbody>
        </table>
    </div>
</>
)
}
export default TablaHome;