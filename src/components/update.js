    import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Col, Input, Row } from 'antd';
import styles from "./styles.module.css"

const Update = () => {
    const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [document, setDocument] = useState('');
    const [phone, setPhone] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('Nome'));
        setLastName(localStorage.getItem('Sobrenome'));
        setDocument(localStorage.getItem('CPF'));
        setPhone(localStorage.getItem('Telefone'));
        setCheckbox(localStorage.getItem('Checkbox'))
    }, []);

    const updateAPIData = () => {
        axios.put(`https://649b7c50048075719236ab2b.mockapi.io/data/${id}`, {
            firstName,
             lastName,
             document,
             phone,
             checkbox
        });
        navigate('/read');
    }

    return (
        <div> 
            <Row className={styles.container}>
                <Col span={10} offset={7}>
                <h2>Editar Pessoa Física</h2>
                    <Row gutter={[24, 24]}>
                        <Col span={12}> 
                            <Input placeholder="Nome" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        </Col>
                        <Col span={12}> 
                            <Input placeholder='Sobrenome' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        </Col>
                        <Col span={12}> 
                            <Input placeholder="CPF" value={document} onChange={(e) => setDocument(e.target.value)}/>
                        </Col>
                        <Col span={12}> 
                            <Input placeholder='Telefone' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                        </Col>
                        <Col span={24}> 
                            <Checkbox checked={checkbox} onChange={(e) => setCheckbox(!checkbox)}>I agree to the Terms and Conditions</Checkbox>
                        </Col>
                        <Col span={24}>
                            <Button type="primary" onClick={updateAPIData}>Alterar</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );

}

export default Update;