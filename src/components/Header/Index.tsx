import React, { useEffect } from 'react';
import { Card, Container, Navbar, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import { getAverage } from '../../redux/actions';

export default function Header() {
    const dispatch = useDispatch();
    const { average_buy_price, average_sell_price } = useSelector((state: any) => state.reducer.quotes.average);
    const { quotes } = useSelector((state: any) => state.reducer.quotes);

    useEffect(() => {
        if (quotes) dispatch(getAverage())
    }, [quotes]);

    return (
        <Navbar expand="sm" variant="dark" bg="secondary" style={{ marginBottom: '30px' }}>
            <Container>
                <Navbar.Brand>ENCONTRA LA MEJOR COTIZACION</Navbar.Brand>
                <Navbar.Brand>
                    <div>
                        <Card bg='warning' style={{ padding: '10px', marginRight: '-100px' }}>
                            <Card.Title style={{ color: 'grey', fontSize: '15px' }}>COTIZACION PROMEDIO</Card.Title>
                            <Card.Text>
                                <small style={{ fontSize: '13px', marginLeft: '15px' }}>
                                    COMPRA: <strong>{average_buy_price ? average_buy_price : <Spinner size='sm' animation="border" variant="secondary" />}</strong>
                                </small>
                                <small style={{ marginLeft: '10px', marginRight: '10px', fontSize: '20px' }}>
                                    |
                                </small>
                                <small style={{ fontSize: '13px', marginRight: '15px' }}>
                                    VENTA: <strong>{average_sell_price ? average_sell_price : <Spinner size='sm' animation="border" variant="secondary" />}</strong>
                                </small>
                            </Card.Text>
                        </Card>
                    </div>
                </Navbar.Brand>
            </Container>
        </Navbar >
    );
}
