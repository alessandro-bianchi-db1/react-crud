import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.css"

const Read = () => {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://649b7c50048075719236ab2b.mockapi.io/data`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id, firstName, lastName, document, phone, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Nome', firstName);
        localStorage.setItem('Sobrenome', lastName);
        localStorage.setItem('CPF', document);
        localStorage.setItem('Telefone', phone);
        localStorage.setItem('Checkbox', checkbox)
    }    

    const getData = () => {
        axios.get(`https://649b7c50048075719236ab2b.mockapi.io/data`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://649b7c50048075719236ab2b.mockapi.io/data/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div className={styles.container}>
            <h2>Lista de Pessoas Físicas</h2>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nome</Table.HeaderCell>
                        <Table.HeaderCell>Sobrenome</Table.HeaderCell>
                        <Table.HeaderCell>CPF</Table.HeaderCell>
                        <Table.HeaderCell>Telefone</Table.HeaderCell>
                        <Table.HeaderCell>Termo</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.document}</Table.Cell>
                                <Table.Cell>{data.phone}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Link to='/update'>
                                    <Table.Cell> 
                                        <Button onClick={() => setData(data)}>Update</Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    );
}

export default Read;