import React, { useState } from 'react';
import { Button, Card, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { useTypedSelector } from '../../Hooks/UseTypedSelector';

export default function Calculator() {

    const [currency, setCurrency] = useState(0);
    const [convertCurrency, setConvertCurrency] = useState(0);

    const { average } = useTypedSelector((state) => state.quotes)
    const { average_sell_price } = average

    const getConvertion = (currency: any) => {
        const result = currency * average_sell_price;
        setConvertCurrency(result)
    }

    return (
        <Card className="me-4 h-25" >
            <Card.Header className="text-muted" >Conversor de Moneda</Card.Header>
            <Card.Body>
                <InputGroup
                    size="sm"
                    className="mb-3"
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
                >
                    <FormControl
                        aria-label="Small"
                        onChange={(e: any) => console.log(e)}
                        value={convertCurrency ? `$ ${convertCurrency}` : 0}
                    />
                </InputGroup>
                <Button size="sm" variant="success" onClick={() => getConvertion(currency)}>CONVERTIR</Button>
            </Card.Body>
        </Card>
    );
}

const styles = {
    cal_container: { width: '25%', marginRight: '50px' },
    cal_body: { display: 'block', marginLeft: 'auto', marginRight: 'auto' }
};