import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Input, Button, Checkbox } from "antd";
import styles from "./styles.module.css"

const Create = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [document, setDocument] = useState('');
    const [phone, setPhone] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const navigate = useNavigate();

    const postData = () => {
        axios.post(`https://649b7c50048075719236ab2b.mockapi.io/data`, {
            firstName,
            lastName,
            document,
            phone,
            checkbox
        });
        navigate('/read');
    }
    
    
    const handleChangeFirstName = event => {
        setFirstName(event.target.value)
    }

    const handleChangeLastName = event => {
        setLastName(event.target.value)
    }

    const handleChangeDocument = event => {
        setDocument(event.target.value)
    }

    const handleChangePhone = event => {
        setPhone(event.target.value)
    }

    return (
        <div>
            <Row className={styles.container}>
                <Col span={10} offset={7}>
                    <h2> Cadastro de pessoa física</h2>
                    <Row gutter={[24, 24]}>
                        <Col span={12}> 
                            <Input placeholder="Nome" value={firstName} onChange={handleChangeFirstName}/>
                        </Col>
                        <Col span={12}> 
                            <Input placeholder='Sobrenome' value={lastName} onChange={handleChangeLastName}/>
                        </Col>
                        <Col span={12}> 
                            <Input placeholder="CPF" value={document} onChange={handleChangeDocument}/>
                        </Col>
                        <Col span={12}> 
                            <Input placeholder='Telefone' value={phone} onChange={handleChangePhone}/>
                        </Col>
                        <Col span={24}> 
                            <Checkbox checked={checkbox} onChange={(e) => setCheckbox(!checkbox)}>I agree to the Terms and Conditions</Checkbox>
                        </Col>
                        <Col span={24}>
                            <Button type="primary" onClick={postData}>Cadastrar</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Create;
