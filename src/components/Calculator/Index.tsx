import React, { useEffect, useState } from 'react';
import { Button, Card, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { getAverage } from '../../redux/actions';

export default function Calculator() {

    const [currency, setCurrency] = useState(0);
    const [convertCurrency, setConvertCurrency] = useState(0);

    const dispatch = useDispatch();
    const { average_buy_price, average_sell_price } = useSelector((state: any) => state.reducer.quotes.average);

    useEffect(() => {
        if (!average_buy_price) dispatch(getAverage())
    });

    const getConvertion = (currency:any) => {
        const result = currency * average_sell_price;
        setConvertCurrency(result)
    }

    return (
        <Container style={{ width: '25%', marginRight: '50px' }}>
            <Row>
                <Card>
                    <Card.Header>Conversor de Moneda</Card.Header>
                    <Card.Body style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
                        <InputGroup
                            size="sm"
                            className="mb-3"
                            style={{ width: '200px' }}
                        >
                            <FormControl
                                aria-label="Small"
                                onChange={(e: any) => setCurrency(+e.target.value)}
                                placeholder='Ingrese importe en USD'
                            />
                        </InputGroup>
                        <InputGroup
                            size="sm"
                            className="mb-3"
                            style={{ width: '200px' }}>
                            <FormControl
                                aria-label="Small"
                                value={convertCurrency ? `$ ${convertCurrency}` : 0}
                            />
                        </InputGroup>
                        <Button variant="success" style={{ padding: '10px', width: '150px' }} onClick={() => getConvertion(currency)}>CONVERTIR</Button>
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
}
